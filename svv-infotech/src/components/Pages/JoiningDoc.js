import React, { useState } from "react";
import "../../Styles/joiningdate.css";
import { useNavigate } from "react-router-dom";
import {  MdKeyboardDoubleArrowLeft } from "react-icons/md";




const documentsList = [
  "Aadhar Card Photo Copy",
  "PAN Card Photo Copy",
  "Education Proof",
  "Passport Size Photo",
  "Bank Account Proof",
  "Employer Reference Check Done",
];

const JoiningDoc = () => {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState({});

  const toggleCheckbox = (index) => {
    setSubmitted({ ...submitted, [index]: !submitted[index] });
  };

  return (
    <div className="joining-container">
      <div>
        <h2 className="joining-title">Joining Documents Check List</h2>
      </div>

      <table className="joining-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Document</th>
            <th>Submitted</th>
            <th>Remarks</th>
          </tr>
        </thead>

        <tbody>
          {documentsList.map((doc, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{doc}</td>
              <td className="checkbox-cell">
                <input
                  type="checkbox"
                  checked={submitted[index] || false}
                  onChange={() => toggleCheckbox(index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter remarks"
                  className="remarks-input"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

        <button className="bc-button mt-3" onClick={() => { navigate("/dashboard/Onboardinglanding/Nomineebankdetails") }}><MdKeyboardDoubleArrowLeft className="bc-ic" />Back</button>

    </div>
  );
};

export default JoiningDoc;
