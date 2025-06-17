import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const baseStyle = 'text-sm font-medium px-3 py-2 rounded-md transition'
  const activeStyle = 'text-[#FD890B]'
  const defaultStyle = 'text-white hover:text-[#FD890B]'

  return (
    <nav className="bg-[#026DFE] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-white">Roammates</div>
        <div className="hidden md:flex space-x-4">
          {[
            ['Home', '/'],
            ['Chat', '/chat'],
            ['Polls', '/polls'],
            ['Expenses', '/expenses'],
            ['Itinerary', '/itinerary'],
            ['Gallery', '/gallery'],
            ['About', '/about'],
            ['Contact', '/contact']
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : defaultStyle}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
