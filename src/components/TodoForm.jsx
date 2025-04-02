import { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [task, SetTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: task, completed: false },
    ]);
    SetTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        placeholder="Görev ekleyin.."
        value={task}
        className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none"
        onChange={(e) => SetTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
      >
        Ekle
      </button>
    </form>
  );
}
