import Sidebar from "./components/sidebar";
import BottomBar from "./components/bottombar";
import Content from "./components/content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className=" wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </Router>
  );
}

export default App;
