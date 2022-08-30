import logo from '../img/logo.svg'
import Menu from "components/Sidebar/Menu"

export default function Sidebar() {
  return (
    <aside className="w-60 py-7 flex flex-col">
      <a href="#" className="mb-5 px-6">
        <img src={logo} alt="" className='h-10' />
      </a>

      <Menu />
      
    </aside>
  )
}
