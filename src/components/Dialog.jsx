import { PencilIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Dialog(props) {
  const [editTodo, setEditTodo] = useState();

  if (!props.show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
      id="edit-modal"
    >
      <div className="container w-1/3 p-8">
        <div className="flex flex-col p-5 rounded-lg shadow bg-white">
          <div className="flex">
            <div className="w-full">
              <div className="flex items-center gap-x-1.5">
                <PencilIcon className="h-4 w-4 text-black" />
                <h2 className="font-bold text-gray-800">Edit ToDo</h2>
              </div>
              <input
                type="text"
                className="form-input rounded-md w-full mt-3"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end items-center mt-3">
            <button
              onClick={() => props.closeDialog(false)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
            >
              Cancel
            </button>

            <button className="px-4 py-2 ml-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-md">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
