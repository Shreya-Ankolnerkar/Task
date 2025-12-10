import AddProject from "../admin/AddProject";
import AddClient from "../admin/AddClient";
import ContactsTable from "../admin/ContactsTable";
import SubsTable from "../admin/SubsTable";
import { useState } from "react";

export default function AdminPanel() {
  const [active, setActive] = useState("dashboard");

  const layout = {
    page: {
      display: "flex",
      height: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "#f5f7fa",
    },

    sidebar: {
      width: "260px",
      background: "#1f2937",
      color: "white",
      padding: "30px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
    },

    sideItem: (isActive) => ({
      padding: "14px 20px",
      borderRadius: "10px",
      cursor: "pointer",
      background: isActive ? "#2563eb" : "transparent",
      color: isActive ? "#fff" : "#cbd5e1",
      fontSize: "16px",
      fontWeight: isActive ? "600" : "500",
      transition: "all 0.3s ease",
    }),

    content: {
      flex: 1,
      padding: "35px",
      overflowY: "auto",
    },

    header: {
      fontSize: "34px",
      fontWeight: "700",
      marginBottom: "30px",
      color: "#111827",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
      gap: "28px",
    },

    card: {
      background: "linear-gradient(145deg, #ffffff, #f1f3f6)",
      padding: "28px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      minHeight: "320px",
      cursor: "default",
    },

    cardHover: {
      transform: "translateY(-6px)",
      boxShadow: "0 14px 40px rgba(0,0,0,0.15)",
    },

    cardTitle: {
      fontSize: "21px",
      fontWeight: "600",
      marginBottom: "20px",
      color: "#1f2937",
    },

    formWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "16px", // spacing between input fields
    },
  };

  return (
    <div style={layout.page}>
      {/* LEFT SIDEBAR */}
      <aside style={layout.sidebar}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: 15 }}>
          Admin Panel
        </h2>

        <div
          style={layout.sideItem(active === "dashboard")}
          onClick={() => setActive("dashboard")}
        >
          Dashboard
        </div>

        <div
          style={layout.sideItem(active === "projects")}
          onClick={() => setActive("projects")}
        >
          Projects
        </div>

        <div
          style={layout.sideItem(active === "clients")}
          onClick={() => setActive("clients")}
        >
          Clients
        </div>

        <div
          style={layout.sideItem(active === "contacts")}
          onClick={() => setActive("contacts")}
        >
          Contact Messages
        </div>

        <div
          style={layout.sideItem(active === "subs")}
          onClick={() => setActive("subs")}
        >
          Newsletter Subs
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main style={layout.content}>
        <h1 style={layout.header}>Welcome, Admin!</h1>

        <div style={layout.grid}>
          {/* Add Project */}
          {(active === "projects" || active === "dashboard") && (
            <div
              style={layout.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
            >
              <h2 style={layout.cardTitle}>Add New Project</h2>
              <div style={layout.formWrapper}>
                <AddProject />
              </div>
            </div>
          )}

          {/* Add Client */}
          {(active === "clients" || active === "dashboard") && (
            <div
              style={layout.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
            >
              <h2 style={layout.cardTitle}>Add New Client</h2>
              <div style={layout.formWrapper}>
                <AddClient />
              </div>
            </div>
          )}

          {/* Contacts Table */}
          {(active === "contacts" || active === "dashboard") && (
            <div
              style={layout.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
            >
              <h2 style={layout.cardTitle}>Contact Form Submissions</h2>
              <ContactsTable />
            </div>
          )}

          {/* Newsletter Table */}
          {(active === "subs" || active === "dashboard") && (
            <div
              style={layout.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
            >
              <h2 style={layout.cardTitle}>Newsletter Subscriptions</h2>
              <SubsTable />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
