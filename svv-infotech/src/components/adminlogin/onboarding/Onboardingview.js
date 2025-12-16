import React, { useState } from "react";
import "../../../Styles/Onboardingview.css";
import { RiDownloadFill } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

const initialData = [
  { id: 1, name: "Rahul Sharma", appliedfor: "Software Engineer", email: "rahul@example.com", phone: "+91 9876543210", exp: 3, status: "Active" },
  { id: 2, name: "Priya Varma", appliedfor: "HR Manager", email: "priya@example.com", phone: "+91 9123456780", exp: 6, status: "Inactive" },
  { id: 3, name: "Amit Singh", appliedfor: "Marketing Executive", email: "amit@example.com", phone: "+91 9988776655", exp: 4, status: "Active" },
  { id: 4, name: "Neha Kapoor", appliedfor: "UI/UX Designer", email: "neha@example.com", phone: "+91 9988223344", exp: 1, status: "Inactive" },
];

const   Onboardingview = () => {
  const navigate = useNavigate();
  const experienceOptions = ["Fresher (0-1 Years)", "Experienced (1+ Years)"];

  const [records, setRecords] = useState(initialData);

  const [filters, setFilters] = useState({
    title: "",
    department: "",
    status: "",
    experience: "",
  });

  const [selectedRows, setSelectedRows] = useState([]);

  // Send options state added (email, whatsapp, message)
  const [sendOptions, setSendOptions] = useState({
    email: false,
    whatsapp: false,
    message: false,
  });

  const toggleSelect = (id) => {
    const numId = Number(id);
    setSelectedRows((prev) =>
      prev.includes(numId) ? prev.filter((x) => x !== numId) : [...prev, numId]
    );
  };

  const handleonboardviewinfo = () => {
    navigate("/Adminonboarding");
  };

  const deleteSelected = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one item to delete.");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete the selected item(s)?"
    );

    if (!confirmDelete) return;

    setRecords((prev) => prev.filter((item) => !selectedRows.includes(item.id)));
    setSelectedRows([]);
    alert("Selected item(s) deleted successfully.");
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(records.map((r) => r.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleDownloadSelected = async () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one item to download.");
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
            children: [
              new TextRun({ text: "Onboarding - Employer Details", bold: true, size: 28 }),
            ],
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
      const fname = `onboarding_students_${new Date().toISOString().slice(0,19).replace(/[:T]/g, "-")}.docx`;
      saveAs(blob, fname);
    } catch (err) {
      console.error("Download error:", err);
      alert("Failed to generate document. See console for details.");
    }
  };

  // ------------------ Send functionality (ALERT-ONLY) ------------------
  const handleSend = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one record to send messages.");
      return;
    }

    if (!sendOptions.email && !sendOptions.whatsapp && !sendOptions.message) {
      alert("Please select at least one communication method (Email / WhatsApp / Message).");
      return;
    }

    const selected = records.filter((r) => selectedRows.includes(r.id));
    if (selected.length === 0) {
      alert("No matching records found for sending.");
      return;
    }

    const names = selected.map((s) => s.name).join(", ");
    const channels = [];
    if (sendOptions.email) channels.push("Email");
    if (sendOptions.whatsapp) channels.push("WhatsApp");
    if (sendOptions.message) channels.push("Message");

    // ALERT-ONLY: show single friendly alert (no external links)
    alert(`Sending ${channels.join(", ")} to: ${names}`);
  };
  // ---------------------------------------------------------

  return (
    <div className="onboarding-wrapper">
      <h2 className="onboarding-title">ON-BOARDING EMPLOYERS</h2>

      <div className="onboarding-list-view">
        <input type="text" className="onboarding-filter-input" placeholder="Search by Name" />
        <input type="text" className="onboarding-filter-input" placeholder="Search by Job Title" />

        <select
          className="onboarding-filter-input"
          onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
          value={filters.experience}
        >
          <option value="">Select Experience</option>
          {experienceOptions.map((ex) => (
            <option key={ex} value={ex}>{ex}</option>
          ))}
        </select>

        <button className="onboarding-apply-btn">Apply</button>
      </div>

      <div className="onboarding-filter-row">
        <div className="onboarding-forward">
          <label className="onboarding-checkbox-label">
            <input
              type="checkbox"
              checked={sendOptions.email}
              onChange={() => setSendOptions((p) => ({ ...p, email: !p.email }))}
            />
            <HiOutlineMail className="icon-onboarding" /> Email
          </label>

          <label className="onboarding-checkbox-label">
            <input
              type="checkbox"
              checked={sendOptions.whatsapp}
              onChange={() => setSendOptions((p) => ({ ...p, whatsapp: !p.whatsapp }))}
            />
            <PiWhatsappLogoBold className="icon-onboarding" /> WhatsApp
          </label>

          

          <button className="onboarding-apply-btn" onClick={handleSend}>Send</button>
        </div>

        <div className="onboarding-del-down">
          <button className="onboarding-download-btn" onClick={handleDownloadSelected}>
            <RiDownloadFill className="icon-onboarding" /> Download
          </button>

          <button className="onboarding-delete-btn" onClick={deleteSelected}>
            <MdOutlineDeleteOutline className="icon-onboarding" /> Delete
          </button>
        </div>
      </div>

      <table className="onboarding-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={(e) => handleSelectAll(e.target.checked)}
                checked={records.length > 0 && selectedRows.length === records.length}
              />
            </th>
            <th>Employer Name</th>
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
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => toggleSelect(item.id)}
                />
              </td>

              <td>{item.name}</td>
              <td>{item.appliedfor}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.exp} Years</td>

              <td>
                <button className="onboarding-view-btn" onClick={handleonboardviewinfo}>
                  View
                </button>
              </td>
            </tr>
          ))}

         
        </tbody>
      </table>
    </div>
  );
};

export default Onboardingview;
