import React, { useState } from "react";
import "../../Styles/viewjobs.css";

const JobApplication = () => {
  const experienceOptions = ["Fresher (0-1 Years)", "Experienced (1+ Years)"];

  const initialData = [
    { id: 1, title: "Software Engineer",      dep: "IT",        loc: "Bangalore", exp: "2-5", sal: "1-3", status: "Active" },
    { id: 2, title: "Hr Manager",             dep: "HR",        loc: "Noida",     exp: "1-4", sal: "2-4", status: "Inactive" },
    { id: 3, title: "Marketing Executive",    dep: "Marketing", loc: "Chennai",   exp: "2-3", sal: "3-5", status: "Active" },
    { id: 4, title: "Developer",              dep: "IT",        loc: "Hyderabad", exp: "3-5", sal: "1-4", status: "Active" },
    { id: 5, title: "Project Manager",        dep: "PM",        loc: "Bangalore", exp: "2-3", sal: "3-5", status: "Inactive" },
    { id: 6, title: "Data Analyst",           dep: "IT",        loc: "Hyderabad", exp: "3-5", sal: "1-2", status: "Active" },
  ];

  const [records, setRecords] = useState(initialData);
  const [filters, setFilters] = useState({
    title: "",
    status: "", // "", "Active", "Inactive"
    experience: "",
  });

  const [selectedRows, setSelectedRows] = useState([]);
  const [viewData, setViewData] = useState(null);

  const applyFilters = () => {
    let filtered = initialData;

    if (filters.title.trim()) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    if (filters.status) {
      filtered = filtered.filter((item) => item.status === filters.status);
    }

    setRecords(filtered);
    setSelectedRows([]);
  };

  const toggleSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const deleteSelected = () => {
    setRecords(records.filter((item) => !selectedRows.includes(item.id)));
    setSelectedRows([]);
  };

  const activeCount = records.filter((item) => item.status === "Active").length;
  const inactiveCount = records.filter(
    (item) => item.status === "Inactive"
  ).length;

  const handleStatusClick = (status) => {
    setFilters((prev) => ({
      ...prev,
      status: prev.status === status ? "" : status, // toggle off
    }));
  };

  return (
    <div className="viewjobs-svv-wrapper">
      <h2 className="viewjobs-svv-title">View Jobs</h2>

      {/* Filter row (Select all + Apply + Delete) */}
      <div className="viewjobs-svv-filter-row">
        <input
          type="checkbox"
          className="viewjobs-svv-check-all"
          onChange={(e) =>
            setSelectedRows(e.target.checked ? records.map((r) => r.id) : [])
          }
        />

        <button className="viewjobs-svv-apply-btn" onClick={applyFilters}>
          Apply
        </button>
        <button className="viewjobs-svv-delete-btn" onClick={deleteSelected}>
          Delete
        </button>
      </div>

      {/* Active / Inactive cards row */}
      <div className="viewjobs-svv-status-row">
        <div
          className={`viewjobs-svv-status-card viewjobs-svv-status-active ${
            filters.status === "Active" ? "is-selected" : ""
          }`}
          onClick={() => handleStatusClick("Active")}
        >
          <span className="viewjobs-svv-status-label">Active</span>
          <span className="viewjobs-svv-status-count">
            {activeCount.toString().padStart(2, "0")}
          </span>
        </div>

        <div
          className={`viewjobs-svv-status-card viewjobs-svv-status-inactive ${
            filters.status === "Inactive" ? "is-selected" : ""
          }`}
          onClick={() => handleStatusClick("Inactive")}
        >
          <span className="viewjobs-svv-status-label">In Active</span>
          <span className="viewjobs-svv-status-count">
            {inactiveCount.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Table */}
      <table className="viewjobs-svv-table">
        <thead>
          <tr>
            <th></th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Location</th>
            <th>Experience</th>
            <th>Salary</th>
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
              <td>{item.title}</td>
              <td>{item.dep}</td>
              <td>{item.loc}</td>
              <td>{item.exp} Years</td>
              <td>{item.sal} LPA</td>
              <td>
                <button
                  className="viewjobs-svv-view-btn"
                  onClick={() => setViewData(item)}
                >
                  View / Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* You can later use viewData for a modal */}
      {/* {viewData && <JobViewModal data={viewData} onClose={() => setViewData(null)} />} */}
    </div>
  );
};

export default JobApplication;
