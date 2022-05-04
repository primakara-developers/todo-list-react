import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="container w-1/3 p-8">
          <p className="text-3xl text-gray-700 font-bold mb-5">ToDo Register</p>

          <form className="flex flex-col">
            <label className="block">
              <span class="block font-medium text-slate-700 mt-3 mb-2">
                Email
              </span>
            </label>
            <input type="email" className="form-input rounded-md" />
            <label className="block">
              <span class="block font-medium text-slate-700 mt-3 mb-2">
                Password
              </span>
            </label>
            <input
              type="password"
              className="form-input rounded-md leading-normal"
            />
            <label className="block">
              <span class="block font-medium text-slate-700 mt-3 mb-2">
                Confirmation Password
              </span>
            </label>
            <input
              type="password"
              className="form-input rounded-md leading-normal"
            />
          </form>

          <div className="flex items-center mt-5 gap-x-1">
            <button className="rounded text-white bg-sky-500 py-1 px-5">
              Register
            </button>
            <p className="ml-1 text-sm text-gray-600 ">
              Have account? login&nbsp;
              <Link
                to="/login"
                className="underline text-blue-600 hover:text-sky-600"
              >
                here
              </Link>
            </p>
          </div>
          <p className="text-gray-400 mt-8 text-left">Primdev 2022</p>
        </div>
      </div>
    </div>
  );
}
