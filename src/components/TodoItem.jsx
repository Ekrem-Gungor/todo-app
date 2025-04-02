export default function TodoItem({ todo, setTodos }) {
  const toggleComplete = () => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((item) => item.id !== todo.id));
  };

  return (
    <li className="flex justify-between items-center bg-gray-200 rounded-lg px-4 py-2 my-2">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button
        onClick={toggleComplete}
        className={`px-2 py-1 rounded-lg transition ${
          todo.completed
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-green-500 text-white hover:bg-green-600"
        } text-white`}
      >
        {todo.completed ? "Geri Al" : "Tamamla"}
      </button>
      <button
        onClick={deleteTodo}
        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
      >
        Sil
      </button>
    </li>
  );
}
