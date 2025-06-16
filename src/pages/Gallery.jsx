import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const images = [
  'https://source.unsplash.com/random/400x300?travel',
  'https://source.unsplash.com/random/401x300?trip',
  'https://source.unsplash.com/random/402x300?friends',
  'https://source.unsplash.com/random/403x300?adventure',
  'https://source.unsplash.com/random/404x300?beach',
  'https://source.unsplash.com/random/405x300?mountains'
]

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-[#026DFE] mb-6">Trip Photo Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((url, i) => (
            <div key={i} className="rounded overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={url} alt={`Trip photo ${i + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
