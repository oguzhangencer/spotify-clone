import Auth from "./auth";
import Navigation from "./navigation";
import Search from "./search";
import { useSearchParams } from "react-router-dom";

export default function Navbar() {
  const searchRoute = useSearchParams("/search");
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
      <Navigation />
      {searchRoute && <Search />}
      <Auth />
    </nav>
  );
}
