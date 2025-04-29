import { useState } from "react";
import { FaEdit, FaCheck, FaTrash } from "react-icons/fa";

const UserList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = { ...updatedTodos[editIndex], text: input };
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, { text: input.trim(), completed: false }]);
      }
      setInput("");
    } else {
      alert("Please enter a valid todo.");
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    setInput(todos[index].text);
    setEditIndex(index);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Todo List</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-sm gap-4"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new todo"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>
      <ul className="mt-6 w-full max-w-sm">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow mb-2 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span>{todo.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleComplete(index)}
                className={`${
                  todo.completed ? "text-green-500" : "text-gray-500"
                } hover:text-green-700`}
              >
                <FaCheck />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
