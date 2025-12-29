import React, { useMemo, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";

function AdminJobsList() {
    const [page, setPage] = useState(1);
    const pageSize = 4;
    const navigate = useNavigate();

    const [jobs, setJobs] = useState([]);

useEffect(() => {
  const loadJobs = () => {
    const storedJobs =
      JSON.parse(localStorage.getItem("jobs")) || [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const formatDate = (date) =>
      new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

    const getStatusByDeadline = (deadline) => {
      if (!deadline) return "Open";
      const d = new Date(deadline);
      d.setHours(0, 0, 0, 0);
      return d >= today ? "Open" : "Closed";
    };

    const normalizedJobs = storedJobs.map((job) => ({
      id: job.id,
      title: job.jobTitle || "Untitled Job",
      location: job.jobLocation || "N/A",
      totalResponses: job.totalResponses || 0,
      shortlisted: job.shortlisted || 0,
      rejected: job.rejected || 0,
      status: getStatusByDeadline(job.deadline),
      postedDate: job.postedDate
        ? formatDate(job.postedDate)
        : formatDate(today),
      originalJob: job, // future edit / preview safe
    }));

    setJobs(normalizedJobs);
  };

  loadJobs();
  window.addEventListener("focus", loadJobs);

  return () =>
    window.removeEventListener("focus", loadJobs);
}, []);



    const [searchInput, setSearchInput] = useState("");
    const [selectedIds, setSelectedIds] = useState([]);

    // ✅ FIXED: jobs added in dependency
    const filteredJobs = useMemo(() => {
        return jobs.filter(
            job =>
                job.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                job.location.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [jobs, searchInput]);

    const totalPages = Math.ceil(filteredJobs.length / pageSize);

    const currentJobs = useMemo(() => {
        const startIndex = (page - 1) * pageSize;
        return filteredJobs.slice(startIndex, startIndex + pageSize);
    }, [filteredJobs, page, pageSize]);

    // ✅ FIXED: correct select-all logic
    const allSelected =
        currentJobs.length > 0 &&
        currentJobs.every(job => selectedIds.includes(job.id));

    const handleToggleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedIds(currentJobs.map(job => job.id));
        } else {
            setSelectedIds([]);
        }
    };

    const handleToggleSelect = (id) => {
        setSelectedIds(prev =>
            prev.includes(id)
                ? prev.filter(x => x !== id)
                : [...prev, id]
        );
    };

    const handleSearch = () => {
        setPage(1);
    };

    // ✅ DELETE – WORKING
    const handleDelete = () => {
        if (selectedIds.length === 0) {
            alert("Please select item(s) to delete");
            return;
        }

        if (!window.confirm(`Delete ${selectedIds.length} job(s)?`)) return;

       const updatedJobs = jobs.filter(
  job => !selectedIds.includes(job.id)
);

setJobs(updatedJobs);
localStorage.setItem("jobs", JSON.stringify(
  updatedJobs.map(j => j.originalJob)
));

setSelectedIds([]);
setPage(1);


        setSelectedIds([]);
        setPage(1);
    };

    const handlePreview = (job) => {
        navigate(`/dashboard/Jobedit/${job.id}`, {
            state: { job: job.originalJob },
        });
    };

    // ✅ FIXED route
    const handleViewResponses = (job) => {
        navigate(`/dashboard/AdminCandidateList/:jobId`, {
            state: {
                jobTitle: job.title,
                jobId: job.id,
                returnPath: "/dashboard/AdminCandidateList"
            }
        });
    };

    const handleAddJob = () => {
        navigate("/dashboard/AddonJobs", {
            state: { returnPath: "/dashboard/AddonJobs" }
        });
    };

    return (
        <div className="container py-4 mt-5">
            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h5 className="mb-0">All Jobs</h5>
                    <small className="text-muted">
                        Total: {filteredJobs.length} of {jobs.length}
                    </small>
                </div>
                <button
                    className="btn btn-success btn-sm d-flex align-items-center gap-1"
                    onClick={handleAddJob}
                >
                    <i className="bi bi-plus-lg"></i>
                    Post Job
                </button>
            </div>

            {/* ACTION BAR */}
            <div className="bg-light border rounded-3 p-3 mb-4 d-flex flex-wrap align-items-center gap-3">
                <div className="form-check ms-1">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="selectAll"
                        checked={allSelected}
                        onChange={handleToggleSelectAll}
                    />
                    <label className="form-check-label ms-1" htmlFor="selectAll">
                        Select All
                    </label>
                </div>

                <div className="flex-grow-1 d-flex gap-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Job Title or Location..."
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                            setPage(1);
                        }}
                    />
                    <button
                        className="btn btn-primary px-4"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

                <button
                    className="btn btn-outline-danger"
                    onClick={handleDelete}
                >
                    Delete ({selectedIds.length})
                </button>
            </div>

            {/* JOB CARDS */}
            {currentJobs.map(job => (
                <div key={job.id} className="card mb-3 shadow-sm border-0">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                            <div className="d-flex align-items-start gap-2">
                                <input
                                    type="checkbox"
                                    className="form-check-input mt-1"
                                    checked={selectedIds.includes(job.id)}
                                    onChange={() => handleToggleSelect(job.id)}
                                />
                                <div>
                                    <h6 className="mb-1">Job Title:- {''} {job.title}</h6>
                                    <small className="text-muted"><TfiLocationPin />Location:- {''}{job.location}</small>
                                </div>
                            </div>

                            <button
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => handlePreview(job)}
                            >
                                Job Preview
                            </button>
                        </div>

                        <div className="d-flex flex-wrap gap-3 my-2">
                            <button
                                className="btn btn-sm btn-outline-primary d-flex flex-column align-items-center"
                                onClick={() => handleViewResponses(job)}
                            >
                                <span className="fw-semibold">{job.totalResponses}</span>
                                <span className="small">Total Responses</span>
                            </button>

                            <button className="btn btn-sm btn-outline-success d-flex flex-column align-items-center">
                                <span className="fw-semibold">{job.shortlisted}</span>
                                <span className="small">Shortlist</span>
                            </button>

                            <button className="btn btn-sm btn-outline-danger d-flex flex-column align-items-center">
                                <span className="fw-semibold">{job.rejected}</span>
                                <span className="small">Rejected</span>
                            </button>
                        </div>

                        <div className="d-flex justify-content-end align-items-center gap-3 mt-2 small">
                            <span
                                className={`badge ${job.status === "Open" ? "bg-success" : "bg-secondary"
                                    }`}
                                style={{ fontSize: "13px" }}   // change size as needed
                            >
                                {job.status}
                            </span>

                            <span className="text-muted">
                                Posted: <span className="text-warning fw-bold">{job.postedDate}</span>
                            </span>
                        </div>
                    </div>
                </div>
            ))}

            {/* Empty state */}
            {currentJobs.length === 0 && (
                <div className="text-center py-5">
                    <h6 className="text-muted">No jobs found</h6>
                    <p className="text-muted small">Try adjusting your search filters</p>
                    <button
                        className="btn btn-success mt-3"
                        onClick={handleAddJob}
                    >
                        <i className="bi bi-plus-circle me-2"></i>
                        Post Your First Job
                    </button>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <small className="text-muted">
                        Showing {((page - 1) * pageSize) + 1} -
                        {Math.min(page * pageSize, filteredJobs.length)} of {filteredJobs.length}
                    </small>
                    <div className="btn-group me-2 gap-2">
                        <button
                            className="btn btn-outline-secondary btn-sm"
                            disabled={page === 1}
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                        >
                            Previous
                        </button>
                        <small className="text-muted">
                            Page {page} of {Math.max(1, totalPages)}
                        </small>
                        <button
                            className="btn btn-outline-secondary ms-2 btn-sm"
                            disabled={page === totalPages}
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminJobsList;