import { Icon } from "Icons"
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="px-2">
      <ul className='flex flex-col'>
        <li>
          <NavLink  to="/" style={({ isActive }) => ({ background: isActive ? 'active' : 'normal', text: isActive ? 'white' : ' normal'})} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
            <span>
              <Icon name="home"/>
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => ({ background: isActive ? 'active' : 'normal', text: isActive ? 'white' : ' normal'})} to="/search" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
            <span>
              <Icon name="search"/>
            </span>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => ({ background: isActive ? 'active' : 'normal', text: isActive ? 'white' : ' normal'})} to="/collection" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
            <span>
              <Icon name="collection"/>
            </span>
            Your Library
          </NavLink>
        </li>
      </ul>
      
    </nav>
  )
}
