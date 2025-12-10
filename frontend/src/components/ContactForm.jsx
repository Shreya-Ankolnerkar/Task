// ContactForm.jsx
import { useState } from "react";
import api from "../api/api";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    if (!form.fullName || !form.email || !form.mobile || !form.city) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setSuccess("");

    try {
      await api.post("/contact", form);
      setSuccess("Your message has been submitted successfully!");
      setForm({ fullName: "", email: "", mobile: "", city: "" });
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={styles.container}>
      <h2 style={styles.heading}>Get a free Consultation</h2>
      <p style={styles.subheading}>
        Have questions or want to work with us? Fill out the form below.
      </p>
      <div style={styles.form}>
        <input
          style={styles.input}
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="email"
          placeholder="Email Address"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="mobile"
          placeholder="Mobile Number"
          type="tel"
          value={form.mobile}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />
        <button
          style={styles.button}
          onClick={submitForm}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {success && <p style={styles.success}>{success}</p>}
      </div>
    </section>
  );
}

// Inline CSS
const styles = {
  container: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#f5f5f7",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2.2rem",
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
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    maxWidth: "450px",
    margin: "0 auto",
  },
  input: {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    transition: "0.3s",
  },
  button: {
    width: "100%",
    padding: "14px",
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
