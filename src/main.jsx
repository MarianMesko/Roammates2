import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Chat from './pages/Chat'
import Polls from './pages/Polls'
import Expenses from './pages/Expenses'
import Itinerary from './pages/Itinerary'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/polls" element={<Polls />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/itinerary" element={<Itinerary />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
)
