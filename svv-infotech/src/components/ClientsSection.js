import React from "react";
import "../Styles/ClientsSection.css"; 
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

const ClientsSection = () => {
  const clients = [
    {
      id: 1,
      name: "John Doe",
      company: "CEO, Alpha Co.",
      feedback:
        "Working with this company was an incredible experience. Their attention to detail and customer focus is unmatched.",
      image: client1,
      position: "left",
    },
    {
      id: 2,
      name: "Sarah Williams",
      company: "Marketing Head, Beta Ltd.",
      feedback:
        "Their professionalism, creativity, and timely delivery make them stand out. Highly recommend their services!",
      image: client2,
      position: "center",
    },
    {
      id: 3,
      name: "Michael Johnson",
      company: "Founder, Gamma Tech",
      feedback:
        "One of the most reliable partners we’ve worked with — consistent quality and fantastic support.",
      image: client3,
      position: "right",
    },
  ];

  return (
    <section className="clients-section py-5">
      <div className="container text-center">
        <h2 className="clients-title mb-2">What Our Clients Say</h2>
        <p className="clients-subtitle mb-5">
          We value our clients' feedback and always strive for excellence.
        </p>

        <div className="clients-wrapper">
          {clients.map((client) => (
            <div key={client.id} className={`client-box ${client.position}`}>
              <div className="client-img">
                <img src={client.image} alt={client.name} />
              </div>

              <div className="client-card">
                <div
                  className={`arrow-up ${
                    client.position === "center" ? "center-arrow" : ""
                  }`}
                ></div>

                <div className="client-card-content">
                  <p className="client-name">{client.name}</p>
                  <p className="client-company">{client.company}</p>
                  <p className="client-text">{client.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
