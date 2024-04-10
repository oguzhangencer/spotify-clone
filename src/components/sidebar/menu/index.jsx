import { Icon } from "~/Icons";

export default function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <a
            href="#home"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-white rounded hover:text-white px-4 bg-active"
          >
            <span>
              <Icon name="home" />
            </span>
            Anasayfa
          </a>
        </li>
        <li>
          <a
            href="#search"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4 "
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </a>
        </li>
        <li>
          <a
            href="#collection"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4 "
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığım
          </a>
        </li>
      </ul>
    </nav>
  );
}
