import { useState } from "react";

export default function ProjectForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Please enter both a title and a description.");
      return;
    }
    onAdd(title.trim(), description.trim());
    setTitle("");
    setDescription("");
    setError("");
  };

  const input =
    "w-full rounded-md border border-slate-600 bg-transparent px-3 py-2 outline-none focus:border-[#6c5cff]";

  return (
    <form onSubmit={handleSubmit} className="h-fit rounded-xl bg-[#1e212b] p-6">
      <h2 className="mb-4 text-xl font-bold">Add Project</h2>

      <label htmlFor="title" className="mb-1 block text-sm">Title</label>
      <input id="title" className={input} value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="description" className="mb-1 mt-4 block text-sm">Description</label>
      <textarea id="description" rows={4} className={input} value={description} onChange={(e) => setDescription(e.target.value)} />

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

      <button type="submit" className="mt-4 rounded-md bg-[#6c5cff] px-5 py-2 font-semibold shadow hover:brightness-110">
        Add
      </button>
    </form>
  );
}