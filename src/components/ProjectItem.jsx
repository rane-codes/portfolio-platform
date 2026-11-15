export default function ProjectItem({ project, onDelete }) {
  const { id, title, description } = project;
  return (
    <li className="flex items-center gap-4 py-3">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-slate-600 text-xl font-bold">
        {title[0]?.toUpperCase()}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold">{title}</h3>
        <p className="truncate text-sm text-slate-400">{description}</p>
      </div>
      <button onClick={() => onDelete(id)} aria-label={`Delete ${title}`} className="rounded-md px-2 py-1 text-sm text-red-400 hover:bg-red-500/10">
        Delete
      </button>
    </li>
  );
}