import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Navbar from "../navbar";
import Home from "~/views/home";
import Search from "~/views/search";
import Collection from "~/views/collection";

export default function Content() {
  return (
    <div className="flex-auto">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </Router>
    </div>
  );
}
