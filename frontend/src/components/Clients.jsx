// Clients.jsx
import React, { useState, useEffect } from "react";

// Dummy client data
const dummyClients = [
  {
    name: "Rowhan Smith",
    designation: "CEO, Foreclosure",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Working with this team has been an absolute pleasure. Their expertise and professionalism exceeded all expectations, delivering our project on time and with outstanding quality.",
  },
  {
    name: "Shipra Kayak",
    designation: "Brand Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "The creative solutions and attention to detail were phenomenal. I felt supported and understood throughout the project. Truly a remarkable team to work with!",
  },
  {
    name: "John Lepore",
    designation: "CTO, TechSolutions",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    description:
      "I am impressed by their technical skills and dedication. Every milestone was delivered with precision, making the entire collaboration seamless and productive.",
  },
  {
    name: "Marry Freeman",
    designation: "Marketing Manager, Mixit",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description:
      "Their innovative approach and clear communication made all the difference. The project outcomes were exceptional, and I highly recommend them to anyone seeking excellence.",
  },
];

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Using dummy data for now
    setClients(dummyClients);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Happy Clients</h2>
      <div style={styles.grid}>
        {clients.map((c, i) => (
          <div style={styles.card} key={i}>
            <img
              src={c.image}
              alt={c.name}
              style={styles.clientImage}
            />
            <h3 style={styles.name}>{c.name}</h3>
            <p style={styles.role}>{c.designation}</p>
            <p style={styles.testimonial}>{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS
const styles = {
  container: {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "40px",
    color: "#333",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#fff",
    padding: "25px 20px",
    width: "280px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  clientImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  },
  name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "5px",
  },
  role: {
    fontSize: "0.9rem",
    color: "#555",
    marginBottom: "15px",
    fontStyle: "italic",
  },
  testimonial: {
    fontSize: "0.9rem",
    color: "#666",
    lineHeight: "1.4",
  },
};

export default Clients;
