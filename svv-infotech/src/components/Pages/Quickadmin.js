import React,{useState} from "react";
import "../../Styles/Quickadmin.css";
import {  FaTimes,FaTrash} from "react-icons/fa";
function Quickadmin(){
    const contacts=[
        {
            name:"Rahul Sharma",
            mail:"rahul@gmail.com",
            phone:"9988776655",
            msg:"I'm interested in applying for the Software Developer role at SVV"
        },
         {
            name:"Rajesh gupta",
            mail:"rajesh@gmail.com",
            phone:"9988776655",
            msg:"I would like to join your HR team. Kindly review my profile.what are svv"
        },
         {
            name:"surya",
            mail:"surya@gmail.com",
            phone:"9988776655",
            msg:"I’m applying for the Technical Support Engineer role.Let me know..."
        },
         {
            name:"gupta",
            mail:"gupta@gmail.com",
            phone:"9988776655",
            msg:" Please let me know if my portfolio link can be shared for review.Need...."
        },
         {
            name:"mani",
            mail:"mani@gmail.com",
            phone:"9988776655",
            msg:"Looking for opportunities in your Digital Marketing team. Eager to....."
        },
    ]
    const [employees, setEmployees] = useState(contacts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [page, setPage] = useState(1);
  const [viewEmployee, setViewEmployee] = useState(null);


  const recordsPerPage = 10;

  
  const filtered = employees.filter((emp) => {
    const term = searchTerm.toLowerCase();
    return (
      emp.name.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term) ||
      emp.phone.toLowerCase().includes(term) ||
      emp.industry.toLowerCase().includes(term) ||
      emp.organization.toLowerCase().includes(term)
    );
  });

  const paginated = filtered.slice((page - 1) * recordsPerPage, page * recordsPerPage);
  const totalPages = Math.ceil(filtered.length / recordsPerPage);

  
  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(paginated.map((emp) => emp.name));
    } else {
      setSelectedIds([]);
    }
  };

  const toggleSelect = (name) => {
    if (selectedIds.includes(name)) {
      setSelectedIds(selectedIds.filter((sid) => sid !== name));
    } else {
      setSelectedIds([...selectedIds, name]);
    }
  };


  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) {
      alert("Please select at least one employee to delete.");
      return;
    }
    if (window.confirm("Are you sure you want to delete selected employees?")) {
      setEmployees(employees.filter((emp) => !selectedIds.includes(emp.name)));
      setSelectedIds([]);
    }
  };

   
    return(
        <>
         <div className="main-cont-quick">
     
      <div className="main-title-quick">
        <h2>Quick Contacts</h2>
        
      </div>
       <div className="empview-toolbar">

        <button className="quick-delete-btn" onClick={handleDeleteSelected}>
          <FaTrash /> Delete
        </button>
       

      </div>

     
      <div className="quick-table-container">
        <table className="quick-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={toggleSelectAll}
                  checked={paginated.length > 0 && selectedIds.length === paginated.length}
                />
              </th>
              <th>Applicant Name</th>
              <th> Email</th>
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
                      checked={selectedIds.includes(emp.name)}
                      onChange={() => toggleSelect(emp.name)}
                    />
                  </td>
                  <td>{emp.name}</td>
                 
                  <td>{emp.mail}</td>
                  <td>{emp.phone}</td>
                  
                  <td>{emp.msg}</td>
                  <td>
                    <button className="quick-view-btn" onClick={() => setViewEmployee(emp)}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="quick-no-data">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

     
      <div className="quick-pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>

      
      {viewEmployee && (
        <div className="quick-overlay">
          <div className="quick-content">
            <button className="quick-close-btn" onClick={() => setViewEmployee(null)}>
              <FaTimes />
            </button>
      
            <h3 className="quick-popup-header">Contact Details</h3>
      
            <div className="quick-popup-scroll">
              <div className="quick-popup-details">
      
                {/* Existing auto-generated fields */}
                {Object.entries(viewEmployee).map(([key, value]) => (
                      (
                    <div key={key}>
                      <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                      <input type="text" value={value} readOnly />
                    </div>
                  )
                ))}
      
              
      
              </div>
            </div>
          </div>
        </div>
      )}
      
          </div>
        </>
    )
}
export default  Quickadmin;

