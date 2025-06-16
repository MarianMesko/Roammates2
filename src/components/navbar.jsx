import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const navStyle = 'hover:text-[#FD890B] text-white px-3 py-2 rounded-md'

  return (
    <nav className="bg-[#026DFE] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-2xl font-bold text-white">Roammates</div>
        <div className="space-x-4">
          <NavLink to="/" className={navStyle}>Home</NavLink>
          <NavLink to="/chat" className={navStyle}>Chat</NavLink>
          <NavLink to="/polls" className={navStyle}>Polls</NavLink>
          <NavLink to="/expenses" className={navStyle}>Expenses</NavLink>
          <NavLink to="/itinerary" className={navStyle}>Itinerary</NavLink>
          <NavLink to="/gallery" className={navStyle}>Gallery</NavLink>
          <NavLink to="/about" className={navStyle}>About</NavLink>
          <NavLink to="/contact" className={navStyle}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
