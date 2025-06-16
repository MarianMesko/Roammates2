import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Alice', text: 'Are we meeting at the station or the airport?' },
    { id: 2, user: 'You', text: 'Station! 10:00 sharp 🚄' },
    { id: 3, user: 'Bob', text: 'I’ll bring snacks for the train 🙌' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    const newMsg = {
      id: Date.now(),
      user: 'You',
      text: input
    }
    setMessages([...messages, newMsg])
    setInput('')
  }

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-2xl flex flex-col flex-grow bg-gray-50 border border-gray-200 rounded shadow-lg overflow-hidden">
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.user === 'You'
                      ? 'bg-[#026DFE] text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                  <div className="text-sm font-semibold mb-1">{msg.user}</div>
                  <div>{msg.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t p-4 gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD890B]"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-[#FD890B] text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
