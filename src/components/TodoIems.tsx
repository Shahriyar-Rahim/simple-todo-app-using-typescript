import type { TodoItemProps } from "../type/todoType"


export const TodoIems = ({todo, toggleTodo, removeTodo}: TodoItemProps) => {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-200 rounded shadow hover:bg-gray-300 cursor-pointer mb-2">
        <div>
            <input type="checkbox" checked={todo.completed} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
            onChange={() => toggleTodo(todo.id)}
            />
            <span className={`ml-2 ${todo.completed ? "line-through text-gray-400" : "text-gray-600"}`}>{todo.title}</span>
        </div>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer" onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  )
}
