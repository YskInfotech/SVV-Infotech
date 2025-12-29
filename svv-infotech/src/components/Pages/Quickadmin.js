import React, { useState, useEffect, useMemo } from "react";
import "../../Styles/Quickadmin.css";
import { FaTimes, FaTrash } from "react-icons/fa";

function Quickadmin() {

  /* ---------------- LOAD FROM LOCALSTORAGE ---------------- */
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("contactRequests")) || [];

    const mapped = stored.map((item, index) => ({
      id: index + 1,
      name: item.name,
      mail: item.email,
      phone: item.mobile,
      msg: item.message,
      date: item.submittedAt
        ? new Date(item.submittedAt).toISOString().split("T")[0]
        : "No Date",
    }));

    setEmployees(mapped);
  }, []);

  /* ---------------- STATES ---------------- */
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [page, setPage] = useState(1);
  const [viewEmployee, setViewEmployee] = useState(null);

  const recordsPerPage = 10;

  /* ---------------- SEARCH ---------------- */
  const filtered = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return employees.filter((emp) =>
      [emp.name, emp.mail, emp.phone, emp.msg]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [employees, searchTerm]);

  /* ---------------- PAGINATION ---------------- */
  const paginated = filtered.slice(
    (page - 1) * recordsPerPage,
    page * recordsPerPage
  );

  const totalPages = Math.ceil(filtered.length / recordsPerPage);

  /* ---------------- SELECT ---------------- */
  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(paginated.map((emp) => emp.id));
    } else {
      setSelectedIds([]);
    }
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  /* ---------------- DELETE + LOCALSTORAGE ---------------- */
  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) {
      alert("Please select at least one contact to delete.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete selected contacts?"))
      return;

    const updated = employees.filter(
      (emp) => !selectedIds.includes(emp.id)
    );

    setEmployees(updated);
    setSelectedIds([]);

    // ✅ Save back to localStorage
    localStorage.setItem(
      "contactRequests",
      JSON.stringify(
        updated.map(({ name, mail, phone, msg, date }) => ({
          name,
          email: mail,
          mobile: phone,
          message: msg,
          submittedAt: date,
        }))
      )
    );
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="main-cont-quick">

      <div className="main-title-quick">
        <h2>Quick Contacts</h2>
      </div>

      {/* ACTION BAR */}
      <div className="quickcontactusrow">
        <input
          type="text"
          placeholder="Search contacts..."
          className="quick-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="quick-delete-btn" onClick={handleDeleteSelected}>
          <FaTrash /> Delete
        </button>
      </div>

      {/* TABLE */}
      <div className="quick-table-container">
        <table className="quick-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={toggleSelectAll}
                  checked={
                    paginated.length > 0 &&
                    selectedIds.length === paginated.length
                  }
                />
              </th>
              <th>Applicant Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.length > 0 ? (
              paginated.map((emp) => (
                <tr key={emp.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(emp.id)}
                      onChange={() => toggleSelect(emp.id)}
                    />
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.mail}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.msg}</td>
                  <td>
                    <button
                      className="quick-view-btn"
                      onClick={() => setViewEmployee(emp)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="quick-no-data">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="quick-pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages || 1}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      {/* VIEW MODAL */}
      {viewEmployee && (
        <div className="quick-overlay">
          <div className="quick-content">
            <button
              className="quick-close-btn"
              onClick={() => setViewEmployee(null)}
            >
              <FaTimes />
            </button>

            <h3 className="quick-popup-header">Contact Details</h3>

            <div className="quick-popup-details">
              {Object.entries(viewEmployee).map(([key, value]) => (
                <div key={key}>
                  <label>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  <input type="text" value={value} readOnly />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quickadmin;
