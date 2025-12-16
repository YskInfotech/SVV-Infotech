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

const ALL_CANDIDATES = [
  {
    id: 1,
    name: "Aila Bhat",
    email: "aila.bhat@cybersec.com",
    phone: "9939303049",
    skills: "Python",
    status: "New",
  },
  {
    id: 2,
    name: "Prasanth Babu",
    email: "prasanth.babu@secfirm.net",
    phone: "2343322342",
    skills: "HTML, CSS, JavaScript",
    status: "Shortlisted",
  
  },
  {
    id: 3,
    name: "John Babu",
    email: "john.babu@pentest.io",
    phone: "0876464833",
    skills: "Ethical Hacking",
    status: "Rejected",
  },
  {
    id: 4,
    name: "Bobbal Mounika",
    email: "mounika.bobbal@defend.com",
    phone: "0847674830",
    skills: " Testing",
    status: "Maybe",
  },
  {
    id: 5,
    name: "Smitha Pooja",
    email: "smitha.pooja@linuxsec.org",
    phone: "9739302021",
    skills: "Linux",
    status: "Shortlisted",
  },
  {
    id: 6,
    name: "Gudla Rama",
    email: "rama.gudla@websec.co",
    phone: "09734333344",
    skills: "Web Security",
    status: "Shortlisted",
  },
  {
    id: 7,
    name: "Naveen Kumar",
    email: "naveen.kumar@nosqlsec.com",
    phone: "0987675668",
    skills: "NoSQL, MongoDB",
    status: "Rejected",
  },
  {
    id: 8,
    name: "Arjun Reddy",
    email: "arjun.reddy@socanalyst.com",
    phone: "0897656273",
    skills: "SQL",
    status: "Shortlisted",
  },
  {
    id: 9,
    name: "Adhiya S",
    email: "Adhiya.s@secintern.net",
    phone: "0897642343",
    skills: "Ethical Hacking, Python",
    status: "Maybe",
  },
  {
    id: 10,
    name: "Harsha V",
    email: "harsha.v@pentester.pro",
    phone: "7365463454",
    skills: "Web Development, Node.js",
    status: "Shortlisted",
  },
  {
    id: 11,
    name: "Kiran M",
    email: "kiran.m@netsec.expert",
    phone: "9867638221",
    skills: "Network Security, Wireshark",
    status: "Maybe",
  },
  {
    id: 12,
    name: "Lakshmi P",
    email: "lakshmi.p@vulnscan.com",
    phone: "0897635433",
    skills: "React, Frontend Security",
    status: "Rejected",
  },
];

function AdminCandidatesList() {
  const { jobId } = useParams();
  const location = useLocation();
  const [candidates, setCandidates] = useState(ALL_CANDIDATES);
  const [selectedIds, setSelectedIds] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [nameFilter, setNameFilter] = useState("");
  const [skillFilter, setSkillFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [page, setPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const pageSize = 10;
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState("Unknown Position");

  useEffect(() => {
    if (location.state && location.state.jobTitle) {
      setJobTitle(location.state.jobTitle);
    }
  }, [location.state]);

  const filteredAll = useMemo(
  () =>
    candidates.filter((c) => {
      if (statusFilter !== "all" && c.status.toLowerCase() !== statusFilter)
        return false;
      if (nameFilter && !c.name.toLowerCase().includes(nameFilter.toLowerCase()))
        return false;
      if (skillFilter && !c.skills.toLowerCase().includes(skillFilter.toLowerCase()))
        return false;
      if (emailFilter && !c.email.toLowerCase().includes(emailFilter.toLowerCase()))
        return false;
      return true;
    }),
  [candidates, statusFilter, nameFilter, skillFilter, emailFilter]
);


  const totalPages = Math.max(1, Math.ceil(filteredAll.length / pageSize));

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredAll.slice(start, start + pageSize);
  }, [filteredAll, page]);

  const allSelected = paged.length > 0 && selectedIds.length === paged.length;

  const toggleSelectAll = (e) => {
    if (e.target.checked) setSelectedIds(paged.map((c) => c.id));
    else setSelectedIds([]);
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const getStatusBadgeClass = (status) => {
    const s = status.toLowerCase();
    if (s === "new") return "border border-secondary text-secondary bg-transparent";
    if (s === "shortlisted") return "border border-success text-success bg-transparent";
    if (s === "maybe") return "border border-warning text-warning bg-transparent";
    if (s === "rejected") return "border border-danger text-danger bg-transparent";
    return "border border-secondary text-secondary bg-transparent";
  };

  const resetFilters = () => {
    setStatusFilter("all");
    setNameFilter("");
    setSkillFilter("");
    setEmailFilter("");
    setPage(1);
  };

 const handleStatusChange = (id, newStatus) => {
  setCandidates(prev =>
    prev.map(c =>
      c.id === id ? { ...c, status: newStatus } : c
    )
  );
  setEditingId(null);
};


   const handleViewCandidate = (id) => {
    const candidate = candidates.find((c) => c.id === id);

    if (candidate) {
      sessionStorage.setItem(`candidate_${id}`, JSON.stringify(candidate));
      navigate(`/dashboard/CandidateProfile/${id}`);
    }
  };

  const handleBackToJobs = () => {
    navigate(-1);
  };


  const handleDownloadSelected = async () => {
  if (selectedIds.length === 0) {
    alert("Please select at least one candidate to download.");
    return;
  }

 const selectedCandidates = candidates.filter((c) =>
  selectedIds.includes(c.id)
);


  if (selectedCandidates.length === 0) {
    alert("No matching candidates found.");
    return;
  }

  const doc = new Document({
    sections: selectedCandidates.map((c) => ({
      properties: {},
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
        new Paragraph(""),
        new Paragraph(`ID: ${c.id}`),
        new Paragraph(`Name: ${c.name}`),
        new Paragraph(`Email: ${c.email}`),
        new Paragraph(`Phone: ${c.phone}`),
        new Paragraph(`Skills: ${c.skills}`),
        new Paragraph(`Status: ${c.status}`),
        new Paragraph(""),
        new Paragraph(
          "------------------------------------------------------"
        ),
        new Paragraph(""),
      ],
    })),
  });

  try {
    const blob = await Packer.toBlob(doc);
    const fileName = `candidates_${new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/[:T]/g, "-")}.docx`;

    saveAs(blob, fileName);
  } catch (error) {
    console.error("Download error:", error);
    alert("Failed to download candidates.");
  }
};


 const handleDelete = () => {
    if (selectedIds.length === 0) {
      alert("Please select candidate(s) to delete");
      return;
    }

    if (!window.confirm(`Delete ${selectedIds.length} candidate(s)?`)) return;

    setCandidates(prev =>
      prev.filter(c => !selectedIds.includes(c.id))
    );

    setSelectedIds([]);
    setPage(1);
  };

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
              <Button variant="success" size="sm" className="me-2 border rounded-3">
                <SiTicktick /> Shortlist
              </Button>
              <Button variant="warning" size="sm" className="me-2 border rounded-3">
                <ImConfused /> May be
              </Button>
              <Button variant="danger" size="sm" className="me-2 border rounded-3">
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

      <div className="border-bottom pb-2 mb-2 d-flex align-items-center">
        <div className="form-check me-3">
          <input
            type="checkbox"
            className="form-check-input border-3"
            checked={allSelected}
            onChange={toggleSelectAll}
          />
        </div>
        <div className="flex-grow-1 d-flex text-muted small fw-semibold">
          <div className="col-2 text-start">Name</div>
          <div className="col-2 text-start">Email</div>
          <div className="col-2 text-start">Phone</div>
          <div className="col-2 text-start">Skills</div>
          <div className="col-2">Status</div>
          <div className="col-2 text-center">Actions</div>
        </div>
      </div>

      {paged.map((c) => (
        <div key={c.id} className="border-bottom py-2 d-flex align-items-center">
          <div className="form-check me-3">
            <input
              type="checkbox"
              className="form-check-input border-3"
              checked={selectedIds.includes(c.id)}
              onChange={() => toggleSelect(c.id)}
            />
          </div>

          <div className="flex-grow-1 d-flex align-items-center">
            <div className="col-2 text-start">
              <div className="fw-semibold">{c.name}</div>
            </div>
            <div className="col-2 text-start">
              <small className="text-break">{c.email}</small>
            </div>
            <div className="col-2 text-start">
              <small>{c.phone}</small>
            </div>
            <div className="col-2 text-start">
              <small>{c.skills}</small>
            </div>
            <div className="col-2">
              {editingId === c.id ? (
                <select
                  className={`form-select form-select-sm ${getStatusBadgeClass(
                    c.status
                  )}`}
                  value={c.status}
                  onChange={(e) => handleStatusChange(c.id, e.target.value)}
                  onBlur={() => setEditingId(null)}
                  autoFocus
                  style={{
                    width: "120px",
                    fontSize: "0.85rem",
                    padding: "0.35rem 0.5rem",
                  }}
                >
                  <option value="New">New</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Maybe">Maybe</option>
                  <option value="Rejected">Rejected</option>
                </select>
              ) : (
                <span
                  className={`badge ${getStatusBadgeClass(
                    c.status
                  )} d-inline-flex align-items-center justify-content-center`}
                  style={{
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    minWidth: "120px",
                    padding: "0.35rem 0.5rem",
                  }}
                  title="Click to change status"
                  onClick={() => setEditingId(c.id)}
                >
                  {c.status}
                </span>
              )}
            </div>
            <div className="col-2 text-center">
              <button
                className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
                title="View details"
                onClick={() => handleViewCandidate(c.id)}
              >
                <Eye size={16} />
                <span className="d-none d-md-inline">View</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {paged.length === 0 && (
        <p className="text-muted mt-3">No candidates match the filters.</p>
      )}

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <small className="text-muted">
          Showing {(page - 1) * pageSize + 1}-
          {Math.min(page * pageSize, filteredAll.length)} of {filteredAll.length} responses
        </small>
        <div className="btn-group">
          <button
            className="btn btn-sm border rounded-2 m-2 btn-primary"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </button>
          <small className="text-muted m-3">
            Page {page} of {Math.max(1, totalPages)}
          </small>
          <button
            className="btn btn-sm border m-2 rounded-2 btn-primary"
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminCandidatesList;
