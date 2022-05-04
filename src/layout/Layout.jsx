import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="grow px-10">
        <Outlet />
      </main>
    </div>
  );
}
