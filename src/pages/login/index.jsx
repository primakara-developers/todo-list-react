import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    if (email && password) {
      navigate("/");
    } else {
      alert("Isi kolom terlebih dahulu!");
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="container w-1/3 p-8">
          <p className="text-3xl text-gray-700 font-bold mb-5">ToDo Login</p>

          <form className="flex flex-col" onSubmit={(e) => handleLogin(e)}>
            <label className="block">
              <span className="block font-medium text-slate-700 mt-3 mb-2">
                Email
              </span>
            </label>
            <input
              type="email"
              className="form-input rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="block">
              <span className="block font-medium text-slate-700 mt-3 mb-2">
                Password
              </span>
            </label>
            <input
              type="password"
              className="form-input rounded-md leading-normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center mt-5 gap-x-1">
              <button
                type="submit"
                className="rounded text-white bg-sky-500 py-1 px-5"
              >
                Login
              </button>
              <p className="ml-1 text-sm text-gray-600 ">
                Dont have account register&nbsp;
                <Link
                  to="/register"
                  className="underline text-blue-600 hover:text-sky-600"
                >
                  here
                </Link>
              </p>
            </div>
          </form>

          <p className="text-gray-400 mt-8 text-left">Primdev 2022</p>
        </div>
      </div>
    </div>
  );
}
