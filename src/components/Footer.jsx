export default function Footer() {
  return (
    <footer className="bg-[#026DFE] text-white mt-20 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        <p className="text-lg font-semibold">Roammates</p>
        <p className="text-sm text-white/80">
          Built to simplify group travel, one trip at a time.
        </p>
        <div className="text-sm space-x-4 mt-2">
          <a href="#" className="hover:text-[#FD890B]">Instagram</a>
          <a href="#" className="hover:text-[#FD890B]">LinkedIn</a>
          <a href="#" className="hover:text-[#FD890B]">Privacy</a>
        </div>
        <p className="text-xs text-white/50 mt-4">
          © {new Date().getFullYear()} Roammates. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
