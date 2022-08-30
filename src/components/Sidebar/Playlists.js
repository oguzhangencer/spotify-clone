export default function Playlists() {
  return (
    <nav className=" mx-6 mt-2 py-2 flex-auto  overflow-auto">
      <ul>
        {new Array(30).fill(
          <li>
            <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
              Pop Mix
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}
