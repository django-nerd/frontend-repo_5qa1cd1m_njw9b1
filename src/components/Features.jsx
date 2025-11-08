import { BarChart3, NotebookPen, ShieldCheck, Zap } from 'lucide-react'

const features = [
  {
    icon: NotebookPen,
    title: 'Pencatatan Cepat',
    desc: 'Input order, alasan entry, risk/reward, dan hasil dalam hitungan detik.'
  },
  {
    icon: BarChart3,
    title: 'Analitik Mendalam',
    desc: 'Lihat win rate, expectancy, drawdown, dan performa per strategi secara otomatis.'
  },
  {
    icon: ShieldCheck,
    title: 'Manajemen Risiko',
    desc: 'Tetapkan risiko per trade, position sizing, dan otomatis kalkulasi lot.'
  },
  {
    icon: Zap,
    title: 'Cepat & Aman',
    desc: 'UI responsif, autosave, dan penyimpanan terenkripsi untuk ketenangan pikiran.'
  }
]

export default function Features() {
  return (
    <section id="fitur" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Semua alat untuk jurnal trading profesional</h2>
          <p className="mt-3 text-slate-600">Dirancang untuk trader saham, forex, hingga crypto. Fokus ke proses, bukan spreadsheet.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
