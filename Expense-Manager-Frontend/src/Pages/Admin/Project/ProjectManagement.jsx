import React, { useState } from "react";
import "./ProjectManagement.css";

export default function ProjectManagement() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Website Redesign", department: "IT", budget: 50000, spent: 35000 },
    { id: 2, name: "Marketing Campaign", department: "Marketing", budget: 30000, spent: 25000 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", department: "", budget: "" });

  const handleAddProject = (e) => {
    e.preventDefault();
    if (formData.name && formData.department && formData.budget) {
      setProjects([
        ...projects,
        {
          id: projects.length + 1,
          name: formData.name,
          department: formData.department,
          budget: parseInt(formData.budget),
          spent: 0,
        },
      ]);
      setFormData({ name: "", department: "", budget: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="project-management">
      <div className="section-header">
        <h1>Project Management</h1>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Project"}
        </button>
      </div>

      {showForm && (
        <form className="project-form" onSubmit={handleAddProject}>
          <div className="form-group">
            <label>Project Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter project name"
              required
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              placeholder="Enter department"
              required
            />
          </div>

          <div className="form-group">
            <label>Budget</label>
            <input
              type="number"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              placeholder="Enter budget"
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Save Project
          </button>
        </form>
      )}

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p className="department">{project.department}</p>
            <div className="budget-info">
              <span>Budget: ₹{project.budget}</span>
              <span>Spent: ₹{project.spent}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(project.spent / project.budget) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
