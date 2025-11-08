import { Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-extrabold tracking-tight text-slate-800 text-lg">TradeJournal</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#fitur" className="hover:text-slate-900 transition">Fitur</a>
          <a href="#manfaat" className="hover:text-slate-900 transition">Manfaat</a>
          <a href="#kontak" className="hover:text-slate-900 transition">Kontak</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
            Masuk
          </button>
          <a href="#cta" className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 transition">
            Daftar Gratis
          </a>
        </div>
      </div>
    </header>
  )
}
