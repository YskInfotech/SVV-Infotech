import React, { useState } from "react";
import "../../Styles/Registercandidates.css";
import { RiShareForwardLine, RiDownloadFill } from "react-icons/ri";
import { MdOutlineBlock, MdOutlineDeleteOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

// __define-ocg__
const Pendingcandidates = () => {
  // example usage variable requested earlier
  const varOcg = "pending_candidates_doc";

  const navigate = useNavigate();

  const experienceOptions = ["Fresher (0-1 Years)", "Experienced (1+ Years)"];

  const initialData = [
    { id: 1, name: "Rahul Sharma", appliedfor: "Software Engineer", email: "rahul@example.com", phone: "+91 9876543210", exp: 3, status: "Active" },
    { id: 2, name: "Priya Varma", appliedfor: "HR Manager", email: "priya@example.com", phone: "+91 9123456780", exp: 6, status: "Inactive" },
    { id: 3, name: "Amit Singh", appliedfor: "Marketing Executive", email: "amit@example.com", phone: "+91 9988776655", exp: 4, status: "Active" },
    { id: 4, name: "Neha Kapoor", appliedfor: "UI/UX Designer", email: "neha@example.com", phone: "+91 9988223344", exp: 1, status: "Inactive" },
  ];

  const [records, setRecords] = useState(initialData);
  const [filters, setFilters] = useState({
    title: "",
    department: "",
    status: "",
    experience: "",
  });

  // store selected ids (numbers)
  const [selectedRows, setSelectedRows] = useState([]);
  const [viewData, setViewData] = useState(null);

  const applyFilters = () => {
    let filtered = initialData;

    if (filters.title.trim()) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    if (filters.status) {
      filtered = filtered.filter((item) => item.status === filters.status);
    }

    if (filters.experience === "Fresher (0-1 Years)") {
      filtered = filtered.filter((item) => item.exp <= 1);
    } else if (filters.experience === "Experienced (1+ Years)") {
      filtered = filtered.filter((item) => item.exp > 1);
    }

    setRecords(filtered);
  };

  // toggle selection by id
  const toggleSelect = (id) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  // delete selected by id with confirmation
  const handleDeleteSelected = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one candidate to delete.");
      return;
    }
    const confirmDelete = window.confirm("Are you sure you want to delete the selected candidate(s)?");
    if (!confirmDelete) return;

    setRecords((prev) => prev.filter((item) => !selectedRows.includes(item.id)));
    setSelectedRows([]);
    alert("Selected candidate(s) deleted successfully.");
  };

  // download selected as .docx (one section per candidate)
  const handleDownloadSelected = async () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one candidate to download.");
      return;
    }

    const selected = records.filter((r) => selectedRows.includes(r.id));
    if (selected.length === 0) {
      alert("No matching records found for download.");
      return;
    }

    const doc = new Document({
      sections: selected.map((item) => ({
        properties: {},
        children: [
          new Paragraph({
            children: [new TextRun({ text: "Candidate - Details", bold: true, size: 28 })],
          }),
          new Paragraph({ text: "" }),
          new Paragraph({ children: [new TextRun(`ID: ${item.id}`)] }),
          new Paragraph({ children: [new TextRun(`Name: ${item.name}`)] }),
          new Paragraph({ children: [new TextRun(`Applied For: ${item.appliedfor || "N/A"}`)] }),
          new Paragraph({ children: [new TextRun(`Email: ${item.email || "N/A"}`)] }),
          new Paragraph({ children: [new TextRun(`Phone: ${item.phone || "N/A"}`)] }),
          new Paragraph({ children: [new TextRun(`Experience: ${item.exp} Years`)] }),
          new Paragraph({ children: [new TextRun(`Status: ${item.status || "N/A"}`)] }),
          new Paragraph({ text: "" }),
          new Paragraph({ children: [new TextRun("--------------------------------------------------")] }),
          new Paragraph({ text: "" }),
        ],
      })),
    });

    try {
      const blob = await Packer.toBlob(doc);
      const fname = `pending_candidates_${new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-")}.docx`;
      saveAs(blob, fname);
    } catch (err) {
      console.error("Download error:", err);
      alert("Failed to generate document. See console for details.");
    }
  };

  const handleShortlistview = () => {
    navigate("/dashboard/Shortlistcandidates");
  };

  const handleRejectview = () => {
    navigate("/dashboard/Rejectcandidates");
  };

  const handlePendingview = () => {
    navigate("/dashboard/Pendingcandidates");
  };

  const handlecandidateview = () => {
    navigate("/dashboard/Candidateview");
  };

  const handlePendinglistview = () => {
    navigate("/dashboard/Candidateview");
  };

  return (
    <div className="candit-wrapper">
      <>
        <h2 className="candit-title">Candidates</h2>

        <div className="candit-filter-row">
          <button className="candit-shortlist-btn">
            <RiShareForwardLine className="icon-candit" /> Shortlist
          </button>
          <button className="candit-reject-btn" onClick={applyFilters}>
            <MdOutlineBlock className="icon-candit" /> Reject
          </button>
          <button className="candit-email-btn" onClick={applyFilters}>
            <HiOutlineMail className="icon-candit" /> Email
          </button>
          <button className="candit-forward-btn" onClick={applyFilters}>
            <RiShareForwardLine className="icon-candit" /> Forward
          </button>

          <button className="candit-download-btn" onClick={handleDownloadSelected}>
            <RiDownloadFill className="icon-candit" /> Download
          </button>

          <button className="candit-delete-btn" onClick={handleDeleteSelected}>
            <MdOutlineDeleteOutline className="icon-candit" /> Delete
          </button>
        </div>

        <div className="candit-list-view">
          <div className="candit-filter-group">
            <div className="shortlist-count" onClick={handleShortlistview}>
              <p className="mb-0">Shortlisted</p>
              <p className="mt-0" style={{ color: "#33E613", fontSize: "20px", fontWeight: "bold" }}>
                07
              </p>
            </div>
            <div className="reject-count" onClick={handleRejectview}>
              <p className="mb-0">Rejected</p>
              <p className="mt-0" style={{ color: "#F00C0C", fontSize: "20px", fontWeight: "bold" }}>
                10
              </p>
            </div>
            <div className="pending-count active" onClick={handlePendingview}>
              <p className="mb-0">Pending</p>
              <p className="mt-0" style={{ color: "#FFBD07", fontSize: "20px", fontWeight: "bold" }}>
                04
              </p>
            </div>
          </div>
          <div className="candit-filter">
            <select
              className="candit-filter-input"
              onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
            >
              <option value="">Filter by Experience</option>
              {experienceOptions.map((ex) => (
                <option key={ex}>{ex}</option>
              ))}
            </select>
          </div>
        </div>

        <table className="candit-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={(e) => setSelectedRows(e.target.checked ? records.map((r) => r.id) : [])}
                  checked={records.length > 0 && selectedRows.length === records.length}
                />
              </th>
              <th>Application Name</th>
              <th>Applied For</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" checked={selectedRows.includes(item.id)} onChange={() => toggleSelect(item.id)} />
                </td>

                <td>{item.name}</td>
                <td>{item.appliedfor}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.exp} Years</td>

                <td>
                  <button className="candit-view-btn" onClick={handlePendinglistview}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default Pendingcandidates;
