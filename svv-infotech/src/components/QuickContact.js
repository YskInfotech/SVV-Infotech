import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/QuickContact.css";
import { FaWhatsapp } from "react-icons/fa";
import contactImg from "../assets/contact-img.jpeg";
import indiaFlag from "../assets/flag.png";
import { MdRefresh } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuickContact = () => {

  function generateCaptcha() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [isChecked, setIsChecked] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    userCaptcha: "",
  });

  const handleRefreshCaptcha = () => setCaptcha(generateCaptcha());

  const handleInputs = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      toast.error("⚠ Please fill all the fields");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error("⚠ Mobile number must be 10 digits");
      return;
    }

    if (formData.userCaptcha !== captcha) {
      toast.error("⚠ Invalid Captcha");
      return;
    }

    // ✅ Save to localStorage
    const stored = JSON.parse(localStorage.getItem("contactRequests")) || [];
    stored.push({
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      submittedAt: new Date().toISOString(),
    });

    localStorage.setItem("contactRequests", JSON.stringify(stored));

    toast.success("✔ Message sent successfully");

    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
      userCaptcha: "",
    });

    handleRefreshCaptcha();
  };

  return (
    <div className="quickcontact-section">
      <h2 className="text-white text-center fw-bold mb-2">QUICK CONTACT</h2>
      <p className="text-center text-white mb-4">
        Build your future with SVV Infotech — where talent meets innovation and growth begins.
      </p>
      <div className="container contact-box shadow">
        <div className="row g-0">

          <div className="col-md-6 contact-img-container">
            <img src={contactImg} alt="Contact Team" className="contact-img" />
          </div>

          <div className="col-md-6 bg-white p-4 rounded-end form-container">
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputs}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <div className="flag-box">
                  <img src={indiaFlag} alt="India" className="flag-icon" />
                  <span className="ms-1">+91</span>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputs}
                    className="form-control number-quick"
                  />
                  <FaWhatsapp className="icon whatsapp" />
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="ms-2"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email Id</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputs}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Leave message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleInputs}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Captcha*</label>
                <div className="captcha-row">
                  <div className="captcha-input-wrapper">
                    <input
                      className="form-control captcha-box fw-bold"
                      value={captcha}
                      readOnly
                    />

                    <button
                      type="button"
                      onClick={handleRefreshCaptcha}
                      className="captcha-refresh-btn"
                      aria-label="Refresh Captcha"
                    >
                      <MdRefresh size={18} />
                    </button>
                  </div>

                  <input
                    type="text"
                    name="userCaptcha"
                    value={formData.userCaptcha}
                    onChange={handleInputs}
                    className="form-control"
                  />
                </div>
              </div>

              <button className="btn btn-success w-100" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ REQUIRED */}
      <ToastContainer />
    </div>
  );
};

export default QuickContact;
