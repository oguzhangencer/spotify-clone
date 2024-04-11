import logo from "../../img/logo.svg";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <div className="w-60 py-6 flex flex-col">
      <a href="home" className="mb-7 px-6">
        <img src={logo} alt="spotify" className="h-10" />
      </a>
      <Menu />
    </div>
  );
}
