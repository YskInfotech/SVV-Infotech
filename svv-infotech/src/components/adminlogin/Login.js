import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../components/adminlogin/styles/Login.css";
import bgimage from "../../assets/bgimagelogin.png"
import { IoIosCloseCircle } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { IoReloadCircle } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";




function Login() {
    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userinput, setUserinput] = useState("")
    // eslint-disable-next-line
    const [captch, setCaptch] = useState({ a: 3, b: 3 })

    const dummymail = "svv@gmail.com";
    const dummypass = "svv123";
    const handlesubmit = (e) => {
        e.preventDefault(); // stop page reload

        const correctCaptcha = captch.a + captch.b;

        if (parseInt(userinput) !== correctCaptcha) {
            toast.error("Captcha incorrect!");
            return;
        }

        if (username === dummymail && password === dummypass) {
            toast.success("Login successful! Welcome to Admin dashboard");
            setTimeout(() => navigate("/dashboard"), 1000); // correct path
        } else {
            toast.error("Invalid Email or Password!");
        }
    };



    return (

        <>
            <ToastContainer />
            <div className="bg-cont-login" style={{ backgroundImage: `url(${bgimage})` }}>

                <div className="login-card">
                    <div className="d-flex justify-content-end" onClick={() => navigate("/")}>
                        <IoIosCloseCircle className="login-icon" />
                    </div>

                    <div className="row g-0">

                        <div className="login-body">
                            <h3 className="login-tittle"> Admin LogIn  </h3>
                            <form onSubmit={handlesubmit} autoComplete="off">
                                <div className="mb-2">
                                    <label className="fw-semibold small-label">Email *</label>
                                    <input
                                        type="email"
                                        className="form-control login-input"
                                        placeholder="Enter email"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <label className="fw-semibold small-label">Password *</label>
                                    <input
                                        type="password"
                                        className="form-control login-input"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                </div>

                                <div className="  login-reg-for">
                                    <p className="login-forget">Forgot Password?</p>
                                </div>

                                <div>
                                    <p className="human-text-login">Please solve to prove you're human.</p>
                                    <div className="d-flex">
                                        <p className="captcha-numb">
                                            <IoReloadCircle className="captcha-icon" />{captch.a}+{captch.b} = </p>
                                        <input type="text" className="captcha-login mb-3" value={userinput} onChange={(e) => setUserinput(e.target.value)} />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-outline-success w-100 mb-2 rounded-pill login-btn1">
                                    Sign In
                                </button>


                                <p className="text-center mb-2 fw-light small-label">Or With</p>

                                <button
                                    type="button"
                                    className="btn btn-outline-danger w-100 rounded-pill login-btn2" >
                                    <FcGoogle className="mx-2" />Log in with Google
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;