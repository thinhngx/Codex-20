import './index.css'
import Hero from './components/Hero'
import Gallery from './components/Gallery'

export default function App() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Hero />
      <Gallery />
    </main>
  )
}
