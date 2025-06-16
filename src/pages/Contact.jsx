import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-[#026DFE] mb-6">Contact Us</h1>

        {/* Contact Info */}
        <section className="mb-10">
          <p className="text-gray-700 mb-2">Have a question, idea, or just want to connect?</p>
          <ul className="text-gray-800 space-y-1">
            <li><strong>Email:</strong> your@email.com</li>
            <li><strong>Instagram:</strong> @roammatesapp</li>
            <li><strong>LinkedIn:</strong> Roammates</li>
          </ul>
        </section>

        {/* Form (non-functional placeholder) */}
        <section>
          <h2 className="text-xl font-semibold text-[#FD890B] mb-3">Send us a message</h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 px-4 py-2 rounded"
              disabled
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 px-4 py-2 rounded"
              disabled
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border border-gray-300 px-4 py-2 rounded resize-none"
              disabled
            />
            <button
              type="submit"
              className="bg-[#FD890B] text-white px-6 py-2 rounded font-medium cursor-not-allowed"
              disabled
            >
              Submit (disabled)
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
