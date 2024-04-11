import { Icon } from "~/Icons";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(+1); // Navigate one step back in history
  };

  const handleForwardClick = () => {
    navigate(-1); // Navigate one step forward in history
  };

  return (
    <nav className="flex items-center gap-x-4">
      <button
        onClick={handleBackClick}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon name="prev" size={22} />
      </button>
      <button
        onClick={handleForwardClick}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon name="next" size={22} />
      </button>
    </nav>
  );
}
