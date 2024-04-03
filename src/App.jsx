import Sidebar from "./components/sidebar";
import BottomBar from "./components/bottombar";
import Content from "./components/content";

function App() {
  return (
    <>
      <div>
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </>
  );
}

export default App;
