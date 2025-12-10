import { useState } from "react";
import api from "../api/api";

export default function AddClient() {
  const [client, setClient] = useState({ name: "", designation: "", description: "", image: "" });

  function handleChange(e) {
    setClient({ ...client, [e.target.name]: e.target.value });
  }

  function saveClient() {
    api.post("/clients", client).then(() => alert("Client added!"));
  }

  return (
    <div className="card">
      <h3>Add Client</h3>
      <input className="input" name="name" placeholder="Name" onChange={handleChange} />
      <input className="input" name="designation" placeholder="Designation" onChange={handleChange} />
      <input className="input" name="image" placeholder="Client Image URL" onChange={handleChange} />
      <input className="input" name="description" placeholder="Description" onChange={handleChange} />
      <button className="btn" onClick={saveClient}>Save</button>
    </div>
  );
}
