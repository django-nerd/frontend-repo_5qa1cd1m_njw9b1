import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <CTA />
      </main>
      <footer id="kontak" className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} TradeJournal. Semua hak dilindungi.</p>
          <div className="text-sm text-slate-600">Hubungi: hello@tradejournal.app</div>
        </div>
      </footer>
    </div>
  )
}

export default App
