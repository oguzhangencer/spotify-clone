import Auth from "./auth";
import Navigation from "./navigation";

export default function Navbar() {
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
      <Navigation />
      <Auth />
    </nav>
  );
}
