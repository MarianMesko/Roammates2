import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-[#026DFE] mb-6">About Us</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#FD890B] mb-2">Our Mission</h2>
          <p className="text-gray-700">
            {/* Add your mission statement here */}
            We believe group travel should be fun to plan — not chaotic. Roammates simplifies group coordination so you can focus on making memories.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#FD890B] mb-2">Our Story</h2>
          <p className="text-gray-700">
            {/* Add your founding story here */}
            Roammates was created by travelers who got tired of using 5 apps to plan one trip. We built a better way — one app to do it all.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#FD890B] mb-2">Our Team</h2>
          <p className="text-gray-700">
            {/* Add team bios or photos here */}
            Meet the passionate people building Roammates — from engineers to designers to travelers.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
