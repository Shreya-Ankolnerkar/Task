import { useEffect, useState } from "react";
import api from "../api/api";

export default function ContactsTable() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/contact").then(res => setList(res.data));
  }, []);

  return (
    <div className="card">
      <h3>Contact Submissions</h3>

      {list.map((c, i) => (
        <div key={i} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
          <b>{c.fullName}</b> — {c.email} — {c.mobile} — {c.city}
        </div>
      ))}
    </div>
  );
}

