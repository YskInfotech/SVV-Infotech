import React, { useState } from "react";
import "../../../Styles/Onboardingview.css";
import { RiDownloadFill } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


// __define-ocg__
const Onboardingview = () => {
    //   const varOcg = true;
    const navigate=useNavigate()

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

    const toggleSelect = (name) => {
        setSelectedRows((prev) =>
            prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]
        );
    };

    const handleonboardviewinfo=()=>{
        navigate("/dashboard/Onboardinglanding")
    }



    return (
        <div className="onboarding-wrapper">
            <>
                <h2 className="onboarding-title">ON-BOARDING EMPLOYERS </h2>


                <div className="onboarding-list-view">

                    <input type="text" className="onboarding-filter-input" placeholder="Search by Name" />
                    <input type="text" className="onboarding-filter-input" placeholder="Search by Job Title" />
                   
                    <select
                        className="onboarding-filter-input"
                        onChange={(e) =>
                            setFilters({ ...filters, experience: e.target.value })
                        }
                    >
                        <option value="">Select Experience</option>
                        {experienceOptions.map((ex) => (
                            <option key={ex}>{ex}</option>
                        ))}
                    </select>
                    <button className="onboarding-apply-btn" >
                        Apply
                    </button>
                </div>

                <div className="onboarding-filter-row">
                    <div className="onboarding-forward">
                        <button className="onboarding-email-btn" >
                            <input type="checkbox" />
                            <HiOutlineMail className="icon-onboarding" /> Email
                        </button>
                        <button className="onboarding-forward-btn">
                            <input type="checkbox" />
                            <PiWhatsappLogoBold className="icon-onboarding" /> whatsapp
                        </button>
                        <button className="onboarding-apply-btn" >
                            Send
                        </button>
                    </div>
                    <div className="onboarding-del-down">

                        <button className="onboarding-download-btn" >
                            <RiDownloadFill className="icon-onboarding" />Download
                        </button>

                        <button className="onboarding-delete-btn" >
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
                                    onChange={(e) =>
                                        setSelectedRows(e.target.checked ? records.map((r) => r.name) : [])
                                    }
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
                                        className="onboarding-view-btn"
                                        onClick={handleonboardviewinfo}
                                    >
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

export default Onboardingview;
