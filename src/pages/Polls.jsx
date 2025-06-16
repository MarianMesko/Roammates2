import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Polls() {
  const [votes, setVotes] = useState({})

  const polls = [
    {
      id: 'poll1',
      question: 'Where should we eat on Day 1?',
      options: ['Italian', 'Sushi', 'Street Food']
    },
    {
      id: 'poll2',
      question: 'What should we do on Saturday?',
      options: ['Hiking', 'Museum', 'Beach']
    }
  ]

  const vote = (pollId, option) => {
    setVotes({ ...votes, [pollId]: option })
  }

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-[#026DFE] mb-6">Activity Polls</h1>
        {polls.map((poll) => (
          <div key={poll.id} className="mb-8 p-4 border rounded-lg bg-white shadow">
            <h2 className="text-xl font-semibold mb-4">{poll.question}</h2>
            <div className="grid gap-3">
              {poll.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => vote(poll.id, opt)}
                  className={`w-full text-left px-4 py-2 border rounded transition ${
                    votes[poll.id] === opt
                      ? 'bg-[#FD890B] text-white'
                      : 'bg-gray-100 hover:bg-[#026DFE] hover:text-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  )
}
