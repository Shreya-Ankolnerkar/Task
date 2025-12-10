import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h3 style={styles.logo}>ClientConnect</h3>
        <p style={styles.text}>© 2025 ClientConnect. All rights reserved.</p>
      
        <div style={styles.social}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#ffffff", // white background
    color: "#333", // dark text
    padding: "50px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 -4px 15px rgba(0, 0, 0, 0.1)", // subtle shadow on top
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    fontSize: "0.9rem",
    marginBottom: "20px",
    color: "#555",
  },
  links: {
    marginBottom: "25px",
  },
  link: {
    color: "#333",
    margin: "0 15px",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  socialLink: {
    color: "#333",
    fontSize: "1.2rem",
    transition: "color 0.3s",
  },
};
