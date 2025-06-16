export default function Footer() {
  return (
    <footer className="bg-[#026DFE] text-white mt-16 py-6 text-center text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Roammates. All rights reserved.</p>
        <p className="mt-2">Follow us on Instagram • LinkedIn • TikTok</p>
      </div>
    </footer>
  )
}
