import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { RiShareForwardLine, RiDownloadFill } from "react-icons/ri";
import { MdOutlineBlock, MdOutlineDeleteOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { saveAs } from "file-saver";
import { FaArrowLeft } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { ImConfused } from "react-icons/im";
import { Document, Packer, Paragraph, TextRun } from "docx";
import "../../Styles/candidateprofile.css";

function CandidateProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [isExperienced, setIsExperienced] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    gender: "Male",
    location: "",
    panNumber: "",
    linkedIn: "",
    qualification: "",
    specialization: "",
    university: "",
    college: "",
    yearOfPassing: "",
    positionApplied: "",
    workMode: "",
    keySkills: "",
    expectedSalary: "",
    whyHireMe: "",
    previousCompany: "",
    previousRole: "",
    joiningDate: "",
    relievingDate: "",
    responsibilities: ""
  });

  const jobTitle = location.state?.jobTitle || "Unknown Position";

  useEffect(() => {
    const storedData = sessionStorage.getItem(`candidate_${id}`);
    if (storedData) {
      const candidateData = JSON.parse(storedData);
      setFormData({
        firstName: candidateData.firstName || "",
        lastName: candidateData.lastName || "",
        phone: candidateData.phone || "",
        email: candidateData.email || "",
        dob: candidateData.dob || "",
        gender: candidateData.gender || "Male",
        location: candidateData.location || "",
        panNumber: candidateData.panNumber || "",
        linkedIn: candidateData.linkedIn || "",
        qualification: candidateData.qualification || "",
        specialization: candidateData.specialization || "",
        university: candidateData.university || "",
        college: candidateData.college || "",
        yearOfPassing: candidateData.yearOfPassing || "",
        positionApplied: candidateData.positionApplied || "",
        workMode: candidateData.workMode || "",
        keySkills: candidateData.keySkills || "",
        expectedSalary: candidateData.expectedSalary || "",
        whyHireMe: candidateData.whyHireMe || "",
        previousCompany: candidateData.previousCompany || "",
        previousRole: candidateData.previousRole || "",
        joiningDate: candidateData.joiningDate || "",
        relievingDate: candidateData.relievingDate || "",
        responsibilities: candidateData.responsibilities || ""
      });
      setIsExperienced(candidateData.isExperienced !== false);
    }
  }, [id]);

  const handleBackToList = () => {
    navigate(-1);
  };

const handleDownloadSelected = async () => {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Candidate Profile",
                bold: true,
                size: 28,
              }),
            ],
          }),

          new Paragraph(""),

          new Paragraph(`Name: ${formData.firstName} ${formData.lastName}`),
          new Paragraph(`Email: ${formData.email}`),
          new Paragraph(`Phone: ${formData.phone}`),
          new Paragraph(`Date of Birth: ${formData.dob}`),
          new Paragraph(`Gender: ${formData.gender}`),
          new Paragraph(`Location: ${formData.location}`),

          new Paragraph(""),
          new Paragraph("Education"),
          new Paragraph(`Qualification: ${formData.qualification}`),
          new Paragraph(`Specialization: ${formData.specialization}`),
          new Paragraph(`University: ${formData.university}`),
          new Paragraph(`College: ${formData.college}`),
          new Paragraph(`Year of Passing: ${formData.yearOfPassing}`),

          new Paragraph(""),
          new Paragraph("Job Details"),
          new Paragraph(`Position Applied: ${formData.positionApplied}`),
          new Paragraph(`Work Mode: ${formData.workMode}`),
          new Paragraph(`Key Skills: ${formData.keySkills}`),
          new Paragraph(`Expected Salary: ${formData.expectedSalary}`),

          new Paragraph(""),
          new Paragraph("Why Hire Me"),
          new Paragraph(formData.whyHireMe || "N/A"),

          ...(isExperienced
            ? [
                new Paragraph(""),
                new Paragraph("Professional Experience"),
                new Paragraph(`Previous Company: ${formData.previousCompany}`),
                new Paragraph(`Previous Role: ${formData.previousRole}`),
                new Paragraph(`Joining Date: ${formData.joiningDate}`),
                new Paragraph(`Relieving Date: ${formData.relievingDate}`),
                new Paragraph(`Responsibilities: ${formData.responsibilities}`),
              ]
            : []),
        ],
      },
    ],
  });

  try {
    const blob = await Packer.toBlob(doc);
    const fileName = `${formData.firstName}_${formData.lastName}_Profile.docx`;
    saveAs(blob, fileName);
  } catch (error) {
    console.error("Download failed:", error);
    alert("Failed to download candidate profile");
  }
};


const handleDelete = () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this candidate?"
  );

  if (!confirmDelete) return;

  // Remove candidate from sessionStorage
  sessionStorage.removeItem(`candidate_${id}`);

  alert("Candidate deleted successfully");

  // Go back to candidates list
  navigate(-1);
};

  return (
    <Container fluid className="py-4 mt-5" style={{ backgroundColor: "white"}}>
      <Button variant="outline-secondary justify-content-left" size="sm" onClick={handleBackToList}>
        <FaArrowLeft size={18} />{' '}  Back to Candidates List
      </Button>
      <Row className="justify-content-center text-start">
        <Col xs={12} md={10} lg={9}>
          <h2 className="text-center fw-bold mb-3 text-uppercase">
            CANDIDATE PROFILE
          </h2>
          <Row className="mb-3">
            <Col md={6} className="mb-2 mb-md-0">
              <Form.Control
                size="sm"
                type="text"
                readOnly
                value={`${jobTitle} > ${formData.firstName} ${formData.lastName}`}
              />
            </Col>
            <Col md={6} className="d-flex flex-wrap gap-2 justify-content-md-end mt-2 mt-md-0">

              <Button variant="success" size="sm">
                <SiTicktick /> Shortlist
              </Button>
              <Button variant="warning" size="sm" className="me-2 border rounded-3">
                <ImConfused /> May be
              </Button>
              <Button variant="danger" size="sm">
                <MdOutlineBlock /> Reject
              </Button>
              <Button variant="primary" size="sm">
                <HiOutlineMail /> Email
              </Button>
              <Button variant="secondary" size="sm">
                <RiShareForwardLine /> Forward
              </Button>
              <Button variant="outline-secondary" onClick={handleDownloadSelected} size="sm">
                <RiDownloadFill /> Download
              </Button>
              <Button variant="outline-danger" size="sm" onClick={handleDelete}>
                <MdOutlineDeleteOutline /> Delete
              </Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="d-flex justify-content-end">
              <Form.Check
                type="switch"
                id="experienced-switch"
                label="Experienced Candidate"
                checked={isExperienced}
                onChange={(e) => setIsExperienced(e.target.checked)}
              />
            </Col>
          </Row>

          <Card className="mb-3">
            <Card.Header className=" text-white fw-semibold" style={{ backgroundColor: "#295FB3" }}>
              Personal & Contact Information
            </Card.Header>
            <Card.Body>
              <Row className="mb-2">
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control size="sm" value={formData.firstName} readOnly />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control size="sm" value={formData.lastName} readOnly />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-2">
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control size="sm" value={formData.phone} readOnly />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control size="sm" value={formData.email} readOnly />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-2">
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control size="sm" type="date" value={formData.dob} readOnly />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Label>Gender</Form.Label>
                  <div className="d-flex gap-2">
                    <Form.Select size="sm" value={formData.gender} disabled>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Form.Select>
                  </div>
                </Col>
              </Row>

              <Row className="mb-2">
                <Col md={12}>
                  <Form.Group className="mb-2">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      size="sm"
                      value={formData.location}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-2">
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Pan Number</Form.Label>
                    <div className="d-flex gap-2">
                      <Form.Control size="sm" value={formData.panNumber} readOnly />
                      <Button size="sm" variant="secondary">
                        Upload PAN
                      </Button>
                      <Button size="sm" variant="outline-secondary">
                        View
                      </Button>
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Upload Resume</Form.Label>
                    <div className="d-flex gap-2">
                      <Button size="sm" variant="secondary">
                        Upload Resume
                      </Button>
                      <Button size="sm" variant="outline-secondary">
                        View
                      </Button>
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group className="mb-2">
                    <Form.Label>LinkedIn/Portfolio URL</Form.Label>
                    <Form.Control
                      size="sm"
                      value={formData.linkedIn}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Header className=" text-white fw-semibold" style={{ backgroundColor: "#295FB3" }}>
              Educational Information
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-2">
                <Form.Label>Highest Qualification</Form.Label>
                <Form.Control
                  size="sm"
                  value={formData.qualification}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Specialization</Form.Label>
                <Form.Control
                  size="sm"
                  value={formData.specialization}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>University</Form.Label>
                <Form.Control
                  size="sm"
                  value={formData.university}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>College</Form.Label>
                <Form.Control
                  size="sm"
                  value={formData.college}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-0">
                <Form.Label>Year of Passing</Form.Label>
                <Form.Control size="sm" value={formData.yearOfPassing} readOnly />
              </Form.Group>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Header className=" text-white fw-semibold" style={{ backgroundColor: "#295FB3" }}>
              Job Details
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-2">
                <Form.Label>Position Applied For</Form.Label>
                <Form.Control size="sm" value={formData.positionApplied} readOnly />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Preferred Work Mode</Form.Label>
                <Form.Control size="sm" value={formData.workMode} readOnly />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Keyskills</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  size="sm"
                  value={formData.keySkills}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Expected Salary</Form.Label>
                <Form.Control size="sm" value={formData.expectedSalary} readOnly />
              </Form.Group>
              <Form.Group className="mb-0">
                <Form.Label>Why Hire Me</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  size="sm"
                  value={formData.whyHireMe}
                  readOnly
                />
              </Form.Group>
            </Card.Body>
          </Card>

          {isExperienced && (
            <Card className="mb-3">
              <Card.Header className=" text-white fw-semibold" style={{ backgroundColor: "#295FB3" }} >
                Professional Experience
              </Card.Header>
              <Card.Body>
                <Row className="mb-2">
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Previous Company</Form.Label>
                      <Form.Control
                        size="sm"
                        value={formData.previousCompany}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Previous Role</Form.Label>
                      <Form.Control
                        size="sm"
                        value={formData.previousRole}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Date of Joining</Form.Label>
                      <Form.Control size="sm" type="date" value={formData.joiningDate} readOnly />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Relieving Date</Form.Label>
                      <Form.Control size="sm" type="date" value={formData.relievingDate} readOnly />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-0">
                  <Form.Label>Responsibilities / Achievements</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    size="sm"
                    value={formData.responsibilities}
                    readOnly
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default CandidateProfile;