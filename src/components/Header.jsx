import { Link } from "react-router-dom";
import { LogoutIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-500 py-3 px-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">
            Todo List
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white mr-4"
          >
            About
          </Link>
        </div>
        <div>
          <Link
            to="/login"
            className="flex font-semibold items-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-red-500 mt-4 lg:mt-0"
          >
            <LogoutIcon className="w-5 h-5 text-white mr-1" />
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
