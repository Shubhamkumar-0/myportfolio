function Navbar() {
  return (
    <nav className="fixed w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-blue-400">
          Shubham.dev
        </h1>

        <ul className="flex gap-6 text-sm">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar