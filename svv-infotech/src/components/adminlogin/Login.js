import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../components/adminlogin/styles/Login.css";
import bgimage from "../../assets/bgimagelogin.png";
import { IoIosCloseCircle } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { IoReloadCircle } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  /* ================= LOGIN STATES ================= */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userinput, setUserinput] = useState("");
  const [captch] = useState({ a: 3, b: 3 });

  /* ================= FORGOT STATES ================= */
  const [showForgot, setShowForgot] = useState(false);
  const [step, setStep] = useState(1);
  const [forgotEmail, setForgotEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /* ================= DUMMY CREDENTIALS ================= */
  const dummymail = "svv@gmail.com";
  const dummypass = "svv123";

  /* ================= LOGIN HANDLER ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    const correctCaptcha = captch.a + captch.b;
    if (parseInt(userinput) !== correctCaptcha) {
      toast.error("Captcha incorrect!");
      return;
    }

    if (username === dummymail && password === dummypass) {
      toast.success("Login successful!");
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      toast.error("Invalid Email or Password!");
    }
  };

  /* ================= FORGOT STEP 1 ================= */
  const verifyEmail = (e) => {
    e.preventDefault();

    if (forgotEmail === dummymail) {
      const otpValue = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(otpValue);
      toast.success(`OTP sent: ${otpValue}`);
      setStep(2);
    } else {
      toast.error("Email not registered!");
    }
  };

  /* ================= FORGOT STEP 2 ================= */
  const verifyOtp = (e) => {
    e.preventDefault();

    if (otp === generatedOtp) {
      setStep(3);
    } else {
      toast.error("Invalid OTP!");
    }
  };

  /* ================= FORGOT STEP 3 ================= */
  const setPasswordHandler = (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Password changed successfully!");
    setShowForgot(false);
    setStep(1);
    setForgotEmail("");
    setOtp("");
    setGeneratedOtp("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <ToastContainer />

      <div
        className="bg-cont-login"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className={`login-card ${showForgot ? "forgot-mode" : ""}`}>
          <div className="d-flex justify-content-end">
            <IoIosCloseCircle
              className="login-icon"
              onClick={() => navigate("/")}
            />
          </div>

          {/* ================= LOGIN ================= */}
          {!showForgot && (
            <div className="login-body">
              <h3 className="login-tittle">Admin Login</h3>

              <form onSubmit={handleSubmit} autoComplete="off">
                <label  className="small-label">Email *</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control login-input mb-2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <label className="small-label">Password *</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control login-input mb-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div className="login-reg-for">
                  <p
                    className="login-forget"
                    onClick={() => setShowForgot(true)}
                  >
                    Forgot Password?
                  </p>
                </div>

                <p className="human-text-login">
                  Please solve to prove you're human.
                </p>

                <div className="d-flex align-items-center">
                  <p className="captcha-numb">
                    <IoReloadCircle className="captcha-icon" />
                    {captch.a}+{captch.b} =
                  </p>
                  <input
                    type="text"
                    className="captcha-login"
                    value={userinput}
                    onChange={(e) => setUserinput(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-success w-100 mt-3 rounded-pill login-btn1"
                >
                  Sign In
                </button>

                {/* <p className="text-center mt-2 small-label">Or With</p>

                <button
                  type="button"
                  className="btn btn-outline-danger w-100 rounded-pill login-btn2"
                >
                  <FcGoogle className="mx-2" />
                  Login with Google
                </button> */}
              </form>
            </div>
          )}

          {/* ================= FORGOT STEP 1 ================= */}
          {showForgot && step === 1 && (
            <form className="login-body" onSubmit={verifyEmail}>
              <h3 className="login-tittle">Forgot Password</h3>
             <label className="form-label-admin" style={{color:"#fff"}}>Enter your registered email</label>
              <input
                type="email"
                className="form-control login-input mb-3"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
              />

              <div className="btn-row">
                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={() => setShowForgot(false)}
                >
                  Back
                </button>
                <button type="submit" className="btn btn-primary">
                  Send OTP
                </button>
              </div>
            </form>
          )}

          {/* ================= FORGOT STEP 2 ================= */}
          {showForgot && step === 2 && (
            <form className="login-body" onSubmit={verifyOtp}>
              <h3 className="login-tittle">Enter OTP</h3>

              <input
                type="text"
                className="form-control login-input mb-3"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />

              <div className="btn-row">
                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button type="submit" className="btn btn-primary">
                  Verify
                </button>
              </div>
            </form>
          )}

          {/* ================= FORGOT STEP 3 ================= */}
          {showForgot && step === 3 && (
            <form className="login-body" onSubmit={setPasswordHandler}>
              <h3 className="login-tittle">Set New Password</h3>

              <input
                type="password"
                className="form-control login-input mb-2"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />

              <input
                type="password"
                className="form-control login-input mb-3"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button type="submit" className="btn btn-primary w-100">
                Update Password
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
