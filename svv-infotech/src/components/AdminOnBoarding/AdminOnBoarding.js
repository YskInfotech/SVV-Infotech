import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaFileDownload, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import "../../Styles/Onboardingview.css";

function AdminOnBoarding() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedEmployers, setSelectedEmployers] = useState([]);
  const [employers, setEmployers] = useState([]);

  /* ===============================
     LOAD EMPLOYEES FROM STORAGE
     (REMOVE DUPLICATES HERE)
  =============================== */
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("employeeOnboarding")) || [];

    // format data (NO field changes)
    const formatted = stored.map((emp) => ({
      id: emp.id,
      name: emp.personalInfo?.fullName || "",
      appliedFor: emp.personalInfo?.appliedFor || "",
      email: emp.personalInfo?.email || "",
      phone: emp.personalInfo?.phone || "",
      experience: emp.experienceType || "Fresher",
    }));

    // ✅ REMOVE DUPLICATES USING ID
    const uniqueEmployers = Array.from(
      new Map(formatted.map(emp => [emp.id, emp])).values()
    );

    setEmployers(uniqueEmployers);
  }, []);

  /* ===============================
     FILTER OPTIONS
  =============================== */
  const departments = [...new Set(employers.map((e) => e.appliedFor))];
  const experiences = [...new Set(employers.map((e) => e.experience))];

  const filteredEmployers = employers.filter((emp) => {
    const searchMatch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.appliedFor.toLowerCase().includes(searchTerm.toLowerCase());

    const deptMatch =
      !departmentFilter || emp.appliedFor === departmentFilter;

    const expMatch =
      !experienceFilter || emp.experience === experienceFilter;

    return searchMatch && deptMatch && expMatch;
  });

  /* ===============================
     SELECTION HANDLERS
  =============================== */
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedEmployers([]);
    } else {
      setSelectedEmployers(filteredEmployers.map((e) => e.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectEmployer = (id) => {
    setSelectedEmployers((prev) =>
      prev.includes(id)
        ? prev.filter((e) => e !== id)
        : [...prev, id]
    );
  };

  /* ===============================
     ACTION HANDLERS
  =============================== */
  const handleView = (emp) => {
    navigate(`/dashboard/OnboardingDetail/${emp.id}`);
  };

  const handleEmail = () => {
    const emails = employers
      .filter((e) => selectedEmployers.includes(e.id))
      .map((e) => e.email)
      .filter(Boolean)
      .join(",");

    if (!emails) {
      alert("Please select employees with email");
      return;
    }

    window.location.href = `mailto:${emails}`;
  };

  const handleWhatsapp = () => {
    const phones = employers
      .filter((e) => selectedEmployers.includes(e.id))
      .map((e) => e.phone)
      .filter(Boolean);

    if (phones.length === 0) {
      alert("Please select employees with phone numbers");
      return;
    }

    window.open(`https://wa.me/${phones[0]}`, "_blank");
  };

  const handleDownload = () => {
    if (selectedEmployers.length === 0) {
      alert("Select employees to download");
      return;
    }

    const rows = employers.filter((e) =>
      selectedEmployers.includes(e.id)
    );

    const csv =
      "Name,Applied For,Email,Phone,Experience\n" +
      rows
        .map(
          (e) =>
            `${e.name},${e.appliedFor},${e.email},${e.phone},${e.experience}`
        )
        .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "onboarding_employees.csv";
    link.click();
  };

  const handleDelete = () => {
    if (selectedEmployers.length === 0) return;

    if (window.confirm("Are you sure you want to delete selected employees?")) {
      const updatedEmployers = employers.filter(
        (e) => !selectedEmployers.includes(e.id)
      );

      setEmployers(updatedEmployers);
      setSelectedEmployers([]);
      setSelectAll(false);

      const stored =
        JSON.parse(localStorage.getItem("employeeOnboarding")) || [];

      const updatedStorage = stored.filter(
        (e) => !selectedEmployers.includes(e.id)
      );

      localStorage.setItem(
        "employeeOnboarding",
        JSON.stringify(updatedStorage)
      );
    }
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setDepartmentFilter("");
    setExperienceFilter("");
  };

  /* ===============================
     RENDER
  =============================== */
  return (
    <div className="onboarding-container">
      <div className="onboarding-header">
        <h1>ON-BOARDING EMPLOYERS</h1>
      </div>

      {/* Filters */}
      <div className="filters-section mb-4">
        <div>
          <div className="position-absolute pt-2">
            <IoSearch size={18} />
          </div>
          <input
            type="text"
            placeholder="  Search By Name or Job Title"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="filter-select"
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
        >
          <option value="">All Job Titles</option>
          {departments.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select
          className="filter-select"
          value={experienceFilter}
          onChange={(e) => setExperienceFilter(e.target.value)}
        >
          <option value="">All Experience</option>
          {experiences.map((e) => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>

        <button className="apply-btn-on">Apply</button>
        <button className="reset-btn" onClick={handleResetFilters}>
          Reset
        </button>
      </div>

      {/* Actions */}
      <div className="action-buttons mb-4">
        <div className="left-actions">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            Select All ({filteredEmployers.length})
          </label>

          <button className="action-btn email-btn" onClick={handleEmail}>
            <FaEnvelope /> Email ({selectedEmployers.length})
          </button>

          <button className="action-btn whatsapp-btn" onClick={handleWhatsapp}>
            <FaWhatsapp /> WhatsApp ({selectedEmployers.length})
          </button>

          <button className="action-btn download-btn" onClick={handleDownload}>
            <FaFileDownload /> Download ({selectedEmployers.length})
          </button>
        </div>

        {selectedEmployers.length > 0 && (
          <button className="delete-btn" onClick={handleDelete}>
            Delete ({selectedEmployers.length})
          </button>
        )}
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="employers-table">
          <thead>
            <tr>
              <th></th>
              <th>Employee Name</th>
              <th>Applied For</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Experience</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployers.length > 0 ? (
              filteredEmployers.map((emp) => (
                <tr key={emp.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedEmployers.includes(emp.id)}
                      onChange={() => handleSelectEmployer(emp.id)}
                    />
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.appliedFor}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.experience}</td>
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => handleView(emp)}
                    >
                      <FaEye /> View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOnBoarding;
