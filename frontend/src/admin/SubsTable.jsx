import { useEffect, useState } from "react";
import api from "../api/api";

export default function SubsTable() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    api.get("/subscribe").then(res => setSubs(res.data));
  }, []);

  return (
    <div className="card">
      <h3>Subscribed Emails</h3>

      {subs.map((s, i) => (
        <div key={i} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
          {s.email}
        </div>
      ))}
    </div>
  );
}

