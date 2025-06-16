import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const itinerary = [
  {
    day: 'Day 1 — Arrival',
    activities: [
      { time: '10:00', activity: 'Group meets at train station' },
      { time: '12:00', activity: 'Lunch at Bistro Central' },
      { time: '15:00', activity: 'Check-in at Airbnb' }
    ]
  },
  {
    day: 'Day 2 — Exploring',
    activities: [
      { time: '09:00', activity: 'Hiking in national park' },
      { time: '14:00', activity: 'Picnic by the lake' },
      { time: '20:00', activity: 'Dinner reservation at La Vita' }
    ]
  }
]

export default function Itinerary() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-[#026DFE] mb-6">Trip Itinerary</h1>
        <div className="space-y-6">
          {itinerary.map((day, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 border border-gray-100">
              <h2 className="text-xl font-semibold mb-3 text-[#FD890B]">{day.day}</h2>
              <ul className="space-y-2">
                {day.activities.map((item, j) => (
                  <li key={j} className="flex justify-between text-gray-700">
                    <span className="font-medium">{item.time}</span>
                    <span>{item.activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
