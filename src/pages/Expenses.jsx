import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const mockExpenses = [
  { who: 'Alice', what: 'Train tickets', amount: 45 },
  { who: 'Bob', what: 'Dinner', amount: 60 },
  { who: 'You', what: 'Museum passes', amount: 30 },
  { who: 'Charlie', what: 'Snacks', amount: 15 }
]

export default function Expenses() {
  const totals = mockExpenses.reduce((acc, e) => {
    acc[e.who] = (acc[e.who] || 0) + e.amount
    return acc
  }, {})

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-[#026DFE] mb-6">Shared Expenses</h1>

        {/* List of expenses */}
        <section className="bg-white rounded-lg shadow p-4 mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Payments</h2>
          <ul className="divide-y">
            {mockExpenses.map((e, i) => (
              <li key={i} className="py-2 flex justify-between text-gray-700">
                <span>{e.who} paid for {e.what}</span>
                <span className="font-medium">${e.amount}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Totals per person */}
        <section className="bg-gray-50 rounded-lg border p-4">
          <h2 className="text-xl font-semibold mb-4">Totals</h2>
          <ul className="space-y-2">
            {Object.entries(totals).map(([name, amt]) => (
              <li key={name} className="flex justify-between">
                <span>{name}</span>
                <span className="font-bold">${amt}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
