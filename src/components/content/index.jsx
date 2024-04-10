import { Outlet, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../navbar";
import Home from "~/views/home";

export default function Content() {
  return (
    <>
      <div className="flex-auto">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}
