import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const features = [
    { emoji: '💬', title: 'Group Chat', desc: 'Stay connected with your group.', link: '/chat' },
    { emoji: '📊', title: 'Polls', desc: 'Vote on group activities.', link: '/polls' },
    { emoji: '💰', title: 'Expenses', desc: 'Split costs fairly.', link: '/expenses' },
    { emoji: '🗓️', title: 'Itinerary', desc: 'Organize your plans.', link: '/itinerary' },
    { emoji: '📸', title: 'Gallery', desc: 'Share your memories.', link: '/gallery' }
  ]

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <section className="text-center py-20 px-6 bg-[#F8FAFC]">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Roammates Logo" className="w-16 h-16 object-contain" />
          </div>
          <h1 className="text-5xl font-bold text-[#026DFE] mb-4">Group Travel, Perfectly Coordinated</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            Plan, vote, chat, and share memories in one place. Roammates is your all-in-one group trip assistant.
          </p>
          <button
            onClick={() => navigate('/chat')}
            className="bg-[#FD890B] hover:bg-orange-500 text-white text-lg px-8 py-3 rounded-full transition shadow-md"
          >
            Launch Demo Chat →
          </button>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                onClick={() => navigate(f.link)}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border border-gray-100"
              >
                <div className="text-4xl mb-4">{f.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
