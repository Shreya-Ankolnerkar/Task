import { useState } from "react";
import api from "../api/api";

export default function AddProject() {
  const [project, setProject] = useState({ name: "", description: "", image: "" });

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function saveProject() {
    api.post("/projects", project).then(() => alert("Project added!"));
  }

  return (
    <div className="card">
      <h3>Add Project</h3>
      <input className="input" name="name" placeholder="Project Name" onChange={handleChange} />
      <input className="input" name="image" placeholder="Project Image URL" onChange={handleChange} />
      <input className="input" name="description" placeholder="Project Description" onChange={handleChange} />
      <button className="btn" onClick={saveProject}>Save</button>
    </div>
  );
}
