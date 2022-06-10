import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "@heroicons/react/solid";
import Dialog from "../../components/Dialog";
import Card from "../../components/Card";
import api from "../../api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AuthContext from "../../AuthProvider";

export default function Home() {
  const { onLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [todos, setTodos] = useState([]);
  async function getTodos() {
    MySwal.showLoading();
    const response = await api("/todos", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setTodos(response);
    MySwal.close();
  }

  useEffect(() => {
    getTodos();
  }, []);

  const [newTodo, setNewTodo] = useState("");
  async function handleAdd(e) {
    e.preventDefault();

    if (newTodo) {
      try {
        MySwal.showLoading();
        await api("/todos", {
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          body: {
            title: newTodo,
          },
        });
        getTodos();
        MySwal.close();
        setNewTodo("");
      } catch {
        MySwal.fire({
          title: "Ada error",
        });
      }
    }
  }

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [todoData, setTodoData] = useState({ id: "", title: "" });
  function handleOpenDialog(value, data) {
    setIsDialogOpen(value);
    setTodoData({ id: data.id, title: data.title });
  }

  function handleCloseDialog(value) {
    setIsDialogOpen(value);
  }

  return (
    <div className="flex justify-center h-full ">
      <div className="container w-1/3 p-8">
        <div className="flex items-center justify-between mt-10 mb-14">
          <p className="text-3xl text-gray-700 font-bold">ToDo List</p>
          <LogoutIcon
            className="w-8 h-8 text-gray-700 hover:text-red-500 cursor-pointer"
            onClick={onLogout}
          />
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
              openDialog={() =>
                handleOpenDialog(true, { id: todo.id, title: todo.title })
              }
              refresh={getTodos}
            />
          ))}
          {/* End Card content */}
        </div>
      </div>
      <Dialog
        show={isDialogOpen}
        closeDialog={handleCloseDialog}
        todo={todoData}
        refresh={getTodos}
      />
    </div>
  );
}
