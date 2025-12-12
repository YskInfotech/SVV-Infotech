import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/viewjobs.css";

const ORIG_DATA = [
  { id: 1, title: "Software Engineer", dep: "IT", loc: "Bangalore", exp: "2-5", sal: "1-3", status: "Active" },
  { id: 2, title: "Hr Manager", dep: "HR", loc: "Noida", exp: "1-4", sal: "2-4", status: "Inactive" },
  { id: 3, title: "Marketing Executive", dep: "Marketing", loc: "Chennai", exp: "2-3", sal: "3-5", status: "Active" },
  { id: 4, title: "Developer", dep: "IT", loc: "Hyderabad", exp: "3-5", sal: "1-4", status: "Active" },
  { id: 5, title: "Project Manager", dep: "PM", loc: "Bangalore", exp: "2-3", sal: "3-5", status: "Inactive" },
  { id: 6, title: "Data Analyst", dep: "IT", loc: "Hyderabad", exp: "3-5", sal: "1-2", status: "Active" },
];

const JobApplication = () => {
  const navigate = useNavigate();
  const experienceOptions = ["Job Title",                               "Experience"];


  const [records, setRecords] = useState(ORIG_DATA);

  const [filters, setFilters] = useState({
    title: "",
    status: "",
    experience: "",
  });


  const [selectedRows, setSelectedRows] = useState([]);

  const applyFilters = () => {

    let filtered = ORIG_DATA.slice();

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

    const numId = Number(id);
    setSelectedRows((prev) =>
      prev.includes(numId) ? prev.filter((x) => x !== numId) : [...prev, numId]
    );
  };


  const deleteSelected = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one job to delete.");
      return;
    }


    const confirmDelete = window.confirm(
      "Are you sure you want to delete the selected job ?"
    );

    if (!confirmDelete) {
      return;
    }

    console.log("Deleting selected ids:", selectedRows);

    setRecords((prev) => prev.filter((item) => !selectedRows.includes(item.id)));
    setSelectedRows([]);
  };



  // helper for the header checkbox
  const toggleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(records.map((r) => r.id));
    } else {
      setSelectedRows([]);
    }
  };

  const activeCount = records.filter((item) => item.status === "Active").length;
  const inactiveCount = records.filter((item) => item.status === "Inactive").length;

  const handleStatusClick = (status) => {
    setFilters((prev) => ({
      ...prev,
      status: prev.status === status ? "" : status,
    }));
  };

  return (
    <div className="viewjobs-svv-wrapper">
      <h2 className="viewjobs-svv-title">View Jobs</h2>

      <div className="d-flex justify-content-around">
        <div>
          <button className="viewjobs-svv-delete-btn" onClick={deleteSelected}>
            Delete
          </button>
        </div>

        <div className="viewjobs-svv-status-row">
          <div
            className={`viewjobs-svv-status-card viewjobs-svv-status-active ${filters.status === "Active" ? "is-selected" : ""
              }`}
            onClick={() => handleStatusClick("Active")}
          >
            <span className="viewjobs-svv-status-label">Active</span>
            <span className="viewjobs-svv-status-count">
              {activeCount.toString().padStart(2, "0")}
            </span>
          </div>

          <div
            className={`viewjobs-svv-status-card viewjobs-svv-status-inactive ${filters.status === "Inactive" ? "is-selected" : ""
              }`}
            onClick={() => handleStatusClick("Inactive")}
          >
            <span className="viewjobs-svv-status-label">In Active</span>
            <span className="viewjobs-svv-status-count">
              {inactiveCount.toString().padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="candit-filter">
          <select
            className="viewjob-filter-input"
            onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
            value={filters.experience}
          >
            <option value="">Sort By Relevance</option>
            {experienceOptions.map((ex) => (
              <option key={ex} value={ex}>{ex}</option>
            ))}
          </select>
        </div>
      </div>

      <table className="viewjobs-svv-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                className="viewjobs-svv-check-all"
                onChange={(e) => toggleSelectAll(e.target.checked)}
                checked={records.length > 0 && selectedRows.length === records.length}
              />
            </th>
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
                  onClick={() => navigate("/dashboard/AddonJob", { state: { data: item } })}
                >
                  View / Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobApplication;
