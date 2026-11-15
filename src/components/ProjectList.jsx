import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects, onDelete }) {
  return (
    <section className="rounded-xl bg-[#1e212b] p-6">
      <h2 className="mb-2 text-xl font-bold">Projects</h2>
      <ul className="divide-y divide-slate-700">
        {projects.length === 0 ? (
          <li className="py-6 text-center text-slate-400">No projects found.</li>
        ) : (
          projects.map((p) => <ProjectItem key={p.id} project={p} onDelete={onDelete} />)
        )}
      </ul>
    </section>
  );
}