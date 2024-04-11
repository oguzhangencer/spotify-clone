import { Routes, Route } from "react-router-dom";
import Navbar from "../navbar";
import Home from "~/views/home";
import Search from "~/views/search";
import Collection from "~/views/collection";

export default function Content() {
  return (
    <div className="flex-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </div>
  );
}
