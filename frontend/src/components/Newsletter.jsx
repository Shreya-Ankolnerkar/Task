// Newsletter.jsx
import { useState } from "react";
import api from "../api/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const subscribe = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    setLoading(true);
    setSuccess("");

    try {
      await api.post("/subscribe", { email });
      setSuccess("Subscribed successfully!");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Subscription failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" style={styles.container}>
      <h2 style={styles.heading}>Subscribe to Our Newsletter</h2>
      <p style={styles.subheading}>
        Stay updated with the latest news and offers.
      </p>
      <div style={styles.form}>
        <input
          style={styles.input}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          style={styles.button}
          onClick={subscribe}
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {success && <p style={styles.success}>{success}</p>}
    </section>
  );
}

// Inline CSS
const styles = {
  container: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#eef2f7",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#222",
  },
  subheading: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    maxWidth: "500px",
    margin: "0 auto",
  },
  input: {
    flex: "1 1 250px",
    padding: "14px 18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
  },
  button: {
    padding: "14px 25px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  success: {
    marginTop: "15px",
    color: "green",
    fontWeight: "bold",
  },
};
