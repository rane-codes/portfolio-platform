import Navbar from './components/Navbar'
import Hero from './sections/Hero'
// import Footer from './components/Footer'

import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
// import me from "./assets/me.jpg";

const initialProjects = [
  { id: 1, title: "Portfolio Platform", description: "A React SPA to showcase my work." },
  { id: 2, title: "Finance Investment Monitor", description: "Live forecasts of global stocks and their perfomance. Inbuilt guidance on what to do if one event leads to another." },
  { id: 3, title: "Solarization Project", description: "Solar sizing and installation for a 1.1kW borehole pump. " },
];

export default function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [query, setQuery] = useState("");

  const addProject = (title, description) =>
    setProjects((prev) => [{ id: crypto.randomUUID(), title, description }, ...prev]);

  const deleteProject = (id) =>
    setProjects((prev) => prev.filter((p) => p.id !== id));

  const q = query.trim().toLowerCase();
  const visibleProjects = projects.filter((p) =>
    `${p.title} ${p.description}`.toLowerCase().includes(q)
  );

  return (
    <div className="min-h-screen bg-[#1a1d26] text-slate-100">
      {/* <Navbar query={query} onQueryChange={setQuery} avatar={me} /> */}
      <Hero /> 

      <main id="add-project" className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 lg:grid-cols-[1fr_1.4fr]">
        <ProjectForm onAdd={addProject} />
        <ProjectList projects={visibleProjects} onDelete={deleteProject} />
      </main>
    </div>
  );
}