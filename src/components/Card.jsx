import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import api from "../api";

export default function Card(props) {
  async function handleDelete(id) {
    await api(`/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    props.refresh();
  }

  return (
    <div
      key={props.id}
      className="flex justify-between items-center gap-x-2.5 py-1.5 px-3 border-2 border-grey-500 rounded mb-2"
    >
      <p className="text-gray-500 text-lg">{props.title}</p>
      <div className="flex gap-x-1.5">
        <button
          onClick={props.openDialog}
          className="rounded text-white bg-teal-500 p-1.5"
        >
          <PencilIcon className="h-4 w-4 text-white" />
        </button>
        <button
          onClick={() => handleDelete(props.id)}
          className="rounded text-white bg-red-500 p-1.5"
        >
          <TrashIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
}
