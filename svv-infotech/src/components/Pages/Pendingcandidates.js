import React, { useState } from "react";
import "../../Styles/Registercandidates.css";
import { RiShareForwardLine,RiDownloadFill } from "react-icons/ri";
import { MdOutlineBlock,MdOutlineDeleteOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";


// __define-ocg__
const Pendingcandidates = () => {
//   const varOcg = true;

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

  const toggleSelect = (name) => {
    setSelectedRows((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]
    );
  };

 


  return (
    <div className="candit-wrapper">
        <>
          <h2 className="candit-title">Candidates</h2>

          <div className="candit-filter-row">

          <button className="candit-shortlist-btn" >
             <RiShareForwardLine className="icon-candit"/> Shortlist
            </button>
            <button className="candit-reject-btn" >
              <MdOutlineBlock className="icon-candit" />Reject
            </button>
            <button className="candit-email-btn" >
             <HiOutlineMail className="icon-candit"/> Email
            </button>
            <button className="candit-forward-btn">
             <RiShareForwardLine className="icon-candit" /> Forward
            </button>

            <button className="candit-download-btn" >
              <RiDownloadFill className="icon-candit"/>Download
            </button>

            <button className="candit-delete-btn" >
             <MdOutlineDeleteOutline className="icon-candit"/> Delete
            </button>
          </div>
          <div className="candit-list-view">
            <div className="shortlist-count">
             <div></div>
            <p className="mb-0">Shortlisted</p>
            <p className="mt-0" style={{color:"#33E613", fontSize:"20px", fontWeight:"bold"}}>07</p>
            </div>
            <div className="reject-count">
             
             <p className="mb-0">Rejected</p>
            <p className="mt-0"style={{color:"#F00C0C", fontSize:"20px", fontWeight:"bold"}}>10</p>
            </div>
            <div className="pending-count">
               <p className="mb-0">Pending</p>
            <p className="mt-0"style={{color:"#FFBD07", fontSize:"20px", fontWeight:"bold"}}>04</p>
            </div>
                 <select
              className="candit-filter-input"
              onChange={(e) =>
                setFilters({ ...filters, experience: e.target.value })
              }
            >
              <option value="">Filter by Experience</option>
              {experienceOptions.map((ex) => (
                <option key={ex}>{ex}</option>
              ))}
            </select>
          </div>

          <table className="candit-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setSelectedRows(e.target.checked ? records.map((r) => r.name) : [])
                    }
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
                <tr key={item.name}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item.name)}
                      onChange={() => toggleSelect(item.name)}
                    />
                  </td>

                  <td>{item.name}</td>
                  <td>{item.appliedfor}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.exp} Years</td>

                  <td>
                    <button
                      className="candit-view-btn"
                      onClick={() => setViewData(item)}
                    >
                      View / Edit
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
