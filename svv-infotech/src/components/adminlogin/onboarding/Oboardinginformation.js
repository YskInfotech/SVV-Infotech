import React,{useState} from "react";
import "../../../Styles/Onboardinginformation.css";

import { useNavigate } from "react-router-dom";

function Onboardinginformation() {
    const navigate =useNavigate()
    const [active, setActive] = useState("personal");

    const handleviewpersonal=()=>{
         setActive("personal");
        navigate("/dashboard/Onboardinglanding/")
    }

    const handleviewdocuments=()=>{
        setActive("documents")
        navigate("/dashboard/Onboardinglanding/Documentsid")
    }

    const handleviewnominee=()=>{
        setActive("nominee")
        navigate("/dashboard/Onboardinglanding/Nomineebankdetails")
    }

    const handleviewjoining=()=>{
        setActive("joining")
        navigate("/dashboard/Onboardinglanding/JoiningDoc")
    }
    return (
        <>
            <div className="onboarding-main-cont">
                <div className="onboarding-sub-cont">
                    <div  className={`personal-information box ${active === "personal" ? "active" : ""}`} onClick={handleviewpersonal}>
                        <p>  Personal Information</p>

                    </div>
                    <div className= {`documents-information box ${active === "documents" ? "active" : ""}`} onClick={handleviewdocuments}>
                        <p> Documents & ID Proof</p>
                    </div>
                    <div className={`nominee-information box ${active === "nominee" ? "active" : ""}`} onClick={handleviewnominee}>
                        <p> Nominee & Banking Details</p>
                    </div>
                    <div className= {`joining-information box ${active === "joining" ? "active" : ""}`} onClick={handleviewjoining}>
                        <p> Joining CheckList</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Onboardinginformation;