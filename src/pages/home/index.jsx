import { useState } from "react";
import { Link } from "react-router-dom";
import { TrashIcon, PencilIcon, LogoutIcon } from "@heroicons/react/solid";

export default function Home() {
  const [todos, setTodos] = useState([
    "Todo1",
    "Todo2",
    "Todo3",
    "Todo4",
    "Todo5",
    "Todo6",
    "Todo7",
    "Todo8",
    "Todo9",
    "Todo10",
  ]);

  return (
    <div className="flex justify-center h-full ">
      <div className="container w-1/3 p-8">
        <div className="flex items-center justify-between mt-10 mb-14">
          <p className="text-3xl text-gray-700 font-bold">ToDo List</p>
          <Link to="/login">
            <LogoutIcon className="w-8 h-8 text-gray-700 hover:text-red-500 cursor-pointer" />
          </Link>
        </div>
        <form>
          <input
            type="text"
            className="form-input w-full rounded-md"
            placeholder="Add todo here..."
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
            <div className="flex justify-between items-center gap-x-2.5 py-1.5 px-3 border-2 border-grey-500 rounded mb-2">
              <p className="text-gray-500 text-lg">{todo}</p>
              <div className="flex gap-x-1.5">
                <button className="rounded text-white bg-teal-500 p-1.5">
                  <PencilIcon className="h-4 w-4 text-white" />
                </button>
                <button className="rounded text-white bg-red-500 p-1.5">
                  <TrashIcon className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          ))}
          {/* End Card content */}
        </div>
      </div>
    </div>
  );
}
