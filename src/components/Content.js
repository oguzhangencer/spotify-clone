import Navbar from "components/Navbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "views/Home"
import Search from "views/Search";
import Collection from "views/Collection";

export default function Content() {
  return (
    <main className="flex-auto">
      <Navbar />
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route exect path="/search" element={<Search />} />
          <Route exect path="/collection" element={<Collection />} />
        </Routes>
      
    </main>
  )
}
