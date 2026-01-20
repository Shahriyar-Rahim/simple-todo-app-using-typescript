import { useState } from "react";
import "./App.css";
import type { TodoTye } from "./type/todoType";
import { useTodos } from "./hook/useTodos";
import { TodoIems } from "./components/TodoIems";

function App() {
  const [newTodo, setNewTodo] = useState<string>("");
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();
  // console.log(todos)

  const handleSubmit = (e: TodoTye) => {
    e.preventDefault();
    if (newTodo.trim()) {
      //new todo
      addTodo(newTodo.trim());
      setNewTodo("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="max-w-md mx-auto p-6 bg-gray-100">
        <h1 className=" text-3xl font-bold mb-6 text-center">Todo App</h1>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-2 ">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Add a new todo..."
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>

        {/* display todo */}
        <div className="space-y-2">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoIems
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            ))
          ) : (
            <p className="text-gray-600 text-center mt-4">No todos yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
