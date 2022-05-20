import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogoutIcon } from "@heroicons/react/solid";
import Dialog from "../../components/Dialog";
import Card from "../../components/Card";
import api from "../../api";

export default function Home() {
  const [todos, setTodos] = useState([]);
  async function getTodos() {
    const response = await api("/todos", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setTodos(response);
    console.log(response);
  }

  useEffect(() => {
    getTodos();
  }, []);

  const [newTodo, setNewTodo] = useState("");
  function handleAdd(e) {
    e.preventDefault();
    if (newTodo) {
      setTodos([
        ...todos,
        { id: todos[todos.length - 1].id + 1, title: newTodo },
      ]);
      setNewTodo("");
    }
  }

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  function handleCloseDialog(value) {
    setIsDialogOpen(value);
  }

  return (
    <div className="flex justify-center h-full ">
      <div className="container w-1/3 p-8">
        <div className="flex items-center justify-between mt-10 mb-14">
          <p className="text-3xl text-gray-700 font-bold">ToDo List</p>
          <Link to="/login">
            <LogoutIcon className="w-8 h-8 text-gray-700 hover:text-red-500 cursor-pointer" />
          </Link>
        </div>
        <form onSubmit={(e) => handleAdd(e)}>
          <input
            type="text"
            className="form-input w-full rounded-md"
            placeholder="Add todo here..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            type="submit"
            className="rounded text-white bg-sky-500 py-2 px-3 w-full mt-3"
          >
            <p className="font-bold">Save</p>
          </button>
        </form>

        <div className="mt-8 mb-10">
          {/* Start Card content */}
          {todos.map((todo) => (
            <Card
              key={todo.id}
              id={todo.id}
              title={todo.title}
              openDialog={() => setIsDialogOpen(true)}
            />
          ))}
          {/* End Card content */}
        </div>
      </div>
      <Dialog show={isDialogOpen} closeDialog={handleCloseDialog} />
    </div>
  );
}
