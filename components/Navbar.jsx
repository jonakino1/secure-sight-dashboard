export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#122b3a]">
      <div className="text-xl font-bold tracking-wide">🔒 SecureSight</div>
      <div className="flex gap-6 text-sm text-gray-300">
        <span className="hover:text-white cursor-pointer">Dashboard</span>
        <span className="hover:text-white cursor-pointer">Cameras</span>
        <span className="hover:text-white cursor-pointer">Scenes</span>
        <span className="hover:text-white cursor-pointer">Incidents</span>
        <span className="hover:text-white cursor-pointer">Users</span>
      </div>
      <div className="flex items-center gap-2">
        <img src="/user.jpg" alt="user" className="w-8 h-8 rounded-full" />
        <div className="text-sm">Soujanyo Bose</div>
      </div>
    </nav>
  )
}


