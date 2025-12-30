import React, { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Eye } from "lucide-react";
import { Button } from "react-bootstrap";
import { saveAs } from "file-saver";
import { RiShareForwardLine, RiDownloadFill } from "react-icons/ri";
import { MdOutlineBlock, MdOutlineDeleteOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { ImConfused } from "react-icons/im";
import { Document, Packer, Paragraph, TextRun } from "docx";

function AdminCandidatesList() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  /* ================= STATE ================= */
  const [candidates, setCandidates] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [nameFilter, setNameFilter] = useState("");
  const [skillFilter, setSkillFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [page, setPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [jobTitle, setJobTitle] = useState("Unknown Position");

  const pageSize = 10;

  /* ================= LOAD CANDIDATES ================= */
  useEffect(() => {
    const loadCandidates = () => {
      const stored =
        JSON.parse(localStorage.getItem("candidates")) || [];
      setCandidates(stored);
    };

    loadCandidates();
    window.addEventListener("focus", loadCandidates);
    return () =>
      window.removeEventListener("focus", loadCandidates);
  }, []);

  /* ================= JOB TITLE ================= */
  useEffect(() => {
    if (location.state?.jobTitle) {
      setJobTitle(location.state.jobTitle);
    }
  }, [location.state]);

  /* ================= FILTER BY JOB ================= */
  const jobCandidates = useMemo(() => {
    return candidates.filter(
      (c) => String(c.jobId) === String(jobId)
    );
  }, [candidates, jobId]);

  /* ================= FILTERS ================= */
  const filteredAll = useMemo(() => {
    return jobCandidates.filter((c) => {
      if (
        statusFilter !== "all" &&
        c.status?.toLowerCase() !== statusFilter
      )
        return false;

      if (
        nameFilter &&
        !c.firstName
          ?.toLowerCase()
          .includes(nameFilter.toLowerCase())
      )
        return false;

      if (
        skillFilter &&
        !c.keySkills
          ?.toLowerCase()
          .includes(skillFilter.toLowerCase())
      )
        return false;

      if (
        emailFilter &&
        !c.email
          ?.toLowerCase()
          .includes(emailFilter.toLowerCase())
      )
        return false;

      return true;
    });
  }, [jobCandidates, statusFilter, nameFilter, skillFilter, emailFilter]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.max(
    1,
    Math.ceil(filteredAll.length / pageSize)
  );

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredAll.slice(start, start + pageSize);
  }, [filteredAll, page]);

  /* ================= SELECT ================= */
  const allSelected =
    paged.length > 0 &&
    paged.every((c) => selectedIds.includes(c.id));

  const toggleSelectAll = (e) => {
    setSelectedIds(
      e.target.checked ? paged.map((c) => c.id) : []
    );
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  /* ================= STATUS ================= */
  const getStatusBadgeClass = (status = "") => {
    const s = status.toLowerCase();
    if (s === "new") return "border border-secondary text-secondary";
    if (s === "shortlisted") return "border border-success text-success";
    if (s === "maybe") return "border border-warning text-warning";
    if (s === "rejected") return "border border-danger text-danger";
    return "border border-secondary text-secondary";
  };
    const resetFilters = () => {
    setStatusFilter("all");
    setNameFilter("");
    setSkillFilter("");
    setEmailFilter("");
    setPage(1);
  };

  const updateCandidates = (updated) => {
    localStorage.setItem(
      "candidates",
      JSON.stringify(updated)
    );
    setCandidates(updated);
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = candidates.map((c) =>
      c.id === id ? { ...c, status: newStatus } : c
    );
    updateCandidates(updated);
    setEditingId(null);
  };


  /* ================= BULK ACTIONS ================= */
  const bulkUpdateStatus = (status) => {
    const updated = candidates.map((c) =>
      selectedIds.includes(c.id)
        ? { ...c, status }
        : c
    );
    updateCandidates(updated);
    setSelectedIds([]);
  };

  const bulkDelete = () => {
    const updated = candidates.filter(
      (c) => !selectedIds.includes(c.id)
    );
    updateCandidates(updated);
    setSelectedIds([]);
  };


  /* ================= BULK DELETE ================= */
  const handleDelete = () => {
    if (selectedIds.length === 0) {
      alert("Please select candidate(s) to delete");
      return;
    }

    if (!window.confirm(`Delete ${selectedIds.length} candidate(s)?`)) return;

    const updated = candidates.filter(
      (c) => !selectedIds.includes(c.id)
    );

    updateCandidates(updated);
    setSelectedIds([]);
    setPage(1);
  };

  /* ================= DOWNLOAD ================= */
  const handleDownloadSelected = async () => {
    if (selectedIds.length === 0) {
      alert("Select candidates to download");
      return;
    }

    const selected = candidates.filter((c) =>
      selectedIds.includes(c.id)
    );

    const doc = new Document({
      sections: selected.map((c) => ({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Candidate Details",
                bold: true,
                size: 28,
              }),
            ],
          }),
          new Paragraph(`Name: ${c.firstName}`),
          new Paragraph(`Email: ${c.email}`),
          new Paragraph(`Phone: ${c.phone}`),
          new Paragraph(`Skills: ${c.keySkills}`),
          new Paragraph(`Status: ${c.status}`),
          new Paragraph(" "),
        ],
      })),
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "candidates.docx");
  };

  /* ================= NAVIGATION ================= */
  const handleViewCandidate = (id) => {
    navigate(`/dashboard/CandidateProfile/${id}`);
  };

  const handleBackToJobs = () => {
    navigate(-1);
  };

  /* ================= UI ================= */
  return (
    <div className="container-fluid py-3 mt-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="justify-content-start">
              <button
                className="btn btn-outline-secondary btn-sm mb-2"
                onClick={handleBackToJobs}
              >
                <FaArrowLeft size={18} /> Back to Jobs
              </button>
              <h5 className="mb-0">Candidates Responses</h5>
              <small className="text-muted">
                Position: <span className="fw-semibold">{jobTitle}</span>
              </small>
            </div>
            <div
              md={6}
              className="d-flex justify-content-md-end justify-content-start mt-2 mt-md-0"
            >
              <div className="btn-toolbar" role="toolbar">
                <div className="btn-group btn-group-sm" role="group">
                  <Button variant="success" size="sm" className="me-2 border rounded-3" 
                  onClick={() => bulkUpdateStatus("Shortlisted")}>
                    <SiTicktick /> Shortlist
                  </Button>
                  <Button variant="warning" size="sm" className="me-2 border rounded-3"
                   onClick={() => bulkUpdateStatus("Maybe")}>
                    <ImConfused /> May be
                  </Button>
                  <Button variant="danger" size="sm" className="me-2 border rounded-3"
                  onClick={() => bulkUpdateStatus("Rejected")}>
                    <MdOutlineBlock /> Reject
                  </Button>
                  <Button variant="primary" size="sm" className="me-2 border rounded-3">
                    <HiOutlineMail /> Email
                  </Button>
                  <Button variant="secondary" size="sm" className="me-2 border rounded-3">
                    <RiShareForwardLine /> Forward
                  </Button>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="me-2 border rounded-3" onClick={handleDownloadSelected}
                  >
                    <RiDownloadFill /> Download
                  </Button>
                  <Button variant="outline-danger" size="sm" className="border rounded-3"
                  onClick={handleDelete}>
                    <MdOutlineDeleteOutline /> Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
    
          <div className="bg-light border rounded-3 p-3 mb-3">
            <div className="row g-3 align-items-end">
              <div className="col-md-2">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setPage(1);
                  }}
                >
                  <option value="all">All</option>
                  <option value="new">New</option>
                  <option value="shortlisted">Shortlisted</option>
                  <option value="rejected">Rejected</option>
                  <option value="maybe">Maybe</option>
                </select>
              </div>
              <div className="col-md-2">
                <label className="form-label">Candidate Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name"
                  value={nameFilter}
                  onChange={(e) => {
                    setNameFilter(e.target.value);
                    setPage(1);
                  }}
                />
              </div>
              <div className="col-md-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Search by email"
                  value={emailFilter}
                  onChange={(e) => {
                    setEmailFilter(e.target.value);
                    setPage(1);
                  }}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Skills</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by skills"
                  value={skillFilter}
                  onChange={(e) => {
                    setSkillFilter(e.target.value);
                    setPage(1);
                  }}
                />
              </div>
              <div className="col-md-3 d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={resetFilters}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

      {/* TABLE */}
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th><input type="checkbox" checked={allSelected} onChange={toggleSelectAll} /></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Skills</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paged.map((c) => (
            <tr key={c.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(c.id)}
                  onChange={() => toggleSelect(c.id)}
                />
              </td>
              <td>{c.firstName}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.keySkills}</td>
              <td>
                <span
                  className={`badge ${getStatusBadgeClass(c.status)}`}
                  onClick={() => setEditingId(c.id)}
                  style={{ cursor: "pointer" }}
                >
                  {c.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => handleViewCandidate(c.id)}
                >
                  <Eye size={14} /> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="d-flex justify-content-between mt-3">
        <small>
          Showing {(page - 1) * pageSize + 1}-
          {Math.min(page * pageSize, filteredAll.length)} of {filteredAll.length}
        </small>
        <div>
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminCandidatesList;
