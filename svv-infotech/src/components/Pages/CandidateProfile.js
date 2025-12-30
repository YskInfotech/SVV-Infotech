import React, { useEffect, useState } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import {
  RiShareForwardLine,
  RiDownloadFill,
} from "react-icons/ri";
import {
  MdOutlineBlock,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { ImConfused } from "react-icons/im";
import { jsPDF } from "jspdf";

function CandidateProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState(null);

  /* ================= LOAD CANDIDATE ================= */
  useEffect(() => {
    const candidates =
      JSON.parse(localStorage.getItem("candidates")) || [];

    const found = candidates.find(
      (c) => String(c.id) === String(id)
    );

    setCandidate(found || null);
  }, [id]);

  if (!candidate) {
    return (
      <h4 className="text-center mt-5 text-danger">
        Candidate Not Found
      </h4>
    );
  }

  /* ================= STATUS UPDATE ================= */
  const updateStatus = (status) => {
    const candidates =
      JSON.parse(localStorage.getItem("candidates")) || [];

    const updated = candidates.map((c) =>
      String(c.id) === String(id) ? { ...c, status } : c
    );

    localStorage.setItem("candidates", JSON.stringify(updated));
    setCandidate({ ...candidate, status });
  };

  /* ================= EMAIL ================= */
  const sendEmail = () => {
    const subject = `Application Update - ${candidate.jobTitle}`;
    const body = `
Name: ${candidate.firstName} ${candidate.lastName}
Email: ${candidate.email}
Phone: ${candidate.phone}
Skills: ${candidate.keySkills}
Status: ${candidate.status}
`;
    window.location.href = `mailto:${candidate.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  /* ================= DOWNLOAD PDF ================= */
  const downloadPDF = () => {
    const doc = new jsPDF();
    let y = 20;

    const add = (label, value) => {
      doc.text(`${label}: ${value || "N/A"}`, 20, y);
      y += 8;
    };

    doc.text("Candidate Profile", 20, y);
    y += 12;

    add("First Name", candidate.firstName);
    add("Last Name", candidate.lastName);
    add("Email", candidate.email);
    add("Phone", candidate.phone);
    add("Location", candidate.location);
    add("Job Title", candidate.jobTitle);
    add("Key Skills", candidate.keySkills);
    add("Expected Salary", candidate.expectedSalary);
    add("Status", candidate.status);

    doc.save(`${candidate.firstName}_Profile.pdf`);
  };

  /* ================= DELETE ================= */
  const handleDelete = () => {
    if (!window.confirm("Delete this candidate?")) return;

    const candidates =
      JSON.parse(localStorage.getItem("candidates")) || [];

    const updated = candidates.filter(
      (c) => String(c.id) !== String(id)
    );

    localStorage.setItem("candidates", JSON.stringify(updated));
    navigate(-1);
  };

  /* ================= UI ================= */
  return (
    <Container fluid className="py-4 mt-4 bg-white">
      {/* BACK */}
      <Button
        size="sm"
        variant="outline-secondary"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> Back to Candidates
      </Button>

      <h2 className="text-center fw-bold my-4">
        Candidate Profile
      </h2>

      {/* ACTION BUTTONS */}
      <div className="d-flex flex-wrap gap-2 justify-content-end mb-4">
        <Button size="sm" variant="success" onClick={() => updateStatus("Shortlisted")}>
          <SiTicktick /> Shortlist
        </Button>
        <Button size="sm" variant="warning" onClick={() => updateStatus("Maybe")}>
          <ImConfused /> Maybe
        </Button>
        <Button size="sm" variant="danger" onClick={() => updateStatus("Rejected")}>
          <MdOutlineBlock /> Reject
        </Button>
        <Button size="sm" variant="primary" onClick={sendEmail}>
          <HiOutlineMail /> Email
        </Button>
        <Button size="sm" variant="secondary">
          <RiShareForwardLine /> Forward
        </Button>
        <Button size="sm" variant="outline-secondary" onClick={downloadPDF}>
          <RiDownloadFill /> Download
        </Button>
        <Button size="sm" variant="outline-danger" onClick={handleDelete}>
          <MdOutlineDeleteOutline /> Delete
        </Button>
      </div>

      {/* PERSONAL */}
      <ProfileCard title="Personal Information">
        <Field label="First Name" value={candidate.firstName} />
        <Field label="Last Name" value={candidate.lastName} />
        <Field label="Email" value={candidate.email} />
        <Field label="Phone" value={candidate.phone} />
        <Field label="Gender" value={candidate.gender} />
        <Field label="Location" value={candidate.location} />
      </ProfileCard>

      {/* JOB */}
      <ProfileCard title="Job Details">
        <Field label="Job Title" value={candidate.jobTitle} />
        <Field label="Preferred Mode" value={candidate.preferredMode} />
        <Field label="Key Skills" value={candidate.keySkills} />
        <Field label="Expected Salary" value={candidate.expectedSalary} />
        <Field label="Status" value={candidate.status} />
      </ProfileCard>

      {/* EXPERIENCE */}
      <ProfileCard title="Experience Details">
        <Field label="Experience Level" value={candidate.experienceLevel} />

        {candidate.experienceLevel === "Experienced" &&
          candidate.experience?.map((exp, index) => (
            <Col md={12} key={index} className="border rounded p-2 mb-2">
              <Row>
                <Field label="Company Name" value={exp.companyName} />
                <Field label="Role" value={exp.role} />
                <Field label="Joining Date" value={exp.joiningDate} />
                <Field label="Relieving Date" value={exp.relievingDate} />
              </Row>
            </Col>
          ))}

        {candidate.experienceLevel !== "Experienced" && (
          <Col md={12}>
            <strong>Fresher Candidate</strong>
          </Col>
        )}
      </ProfileCard>

      {/* WHY HIRE */}
      <Card className="mb-3">
        <Card.Header className="bg-primary text-white">
          Why Hire Me
        </Card.Header>
        <Card.Body>
          {candidate.whyHireMe || "N/A"}
        </Card.Body>
      </Card>
    </Container>
  );
}

/* ================= REUSABLE ================= */

const ProfileCard = ({ title, children }) => (
  <Card className="mb-3">
    <Card.Header className="bg-primary text-white fw-semibold">
      {title}
    </Card.Header>
    <Card.Body>
      <Row>{children}</Row>
    </Card.Body>
  </Card>
);

const Field = ({ label, value }) => (
  <Col md={6} className="mb-2">
    <strong>{label}:</strong> {value || "N/A"}
  </Col>
);

export default CandidateProfile;
