import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const features = [
    {
      name: 'Group Chat',
      desc: 'Stay connected with your group in a shared chat hub.',
      emoji: '💬',
      link: '/chat'
    },
    {
      name: 'Activity Polls',
      desc: 'Decide together with easy voting tools.',
      emoji: '📊',
      link: '/polls'
    },
    {
      name: 'Expense Sharing',
      desc: 'Split and track costs fairly and transparently.',
      emoji: '💰',
      link: '/expenses'
    },
    {
      name: 'Itinerary Planner',
      desc: 'Collaboratively organize your travel timeline.',
      emoji: '🗓️',
      link: '/itinerary'
    },
    {
      name: 'Photo Gallery',
      desc: 'Upload and browse memories from the trip.',
      emoji: '📸',
      link: '/gallery'
    }
  ]

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-12 pb-20 px-6">
        {/* Hero */}
        <section className="text-center mb-16">
          <img src="/logo.png" alt="Roammates Logo" className="mx-auto w-24 mb-4" />
          <h1 className="text-5xl font-extrabold text-[#026DFE] mb-4">Travel Together, Smarter</h1>
          <p className="text-lg text-gray-600 mb-6">
            Roammates helps groups plan, chat, organize, and share — all in one place.
          </p>
          <button
            onClick={() => navigate('/chat')}
            className="bg-[#FD890B] hover:bg-orange-600 text-white text-lg px-6 py-3 rounded-full transition"
          >
            Try the Chat Demo
          </button>
        </section>

        {/* Feature Cards */}
        <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.name}
              onClick={() => navigate(f.link)}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-md cursor-pointer transition hover:border-[#026DFE]"
            >
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{f.name}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
