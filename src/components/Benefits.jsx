import { CheckCircle2 } from 'lucide-react'

const items = [
  'Bangun konsistensi dengan proses yang terstruktur',
  'Temukan pola profit melalui data historis Anda',
  'Kurangi emosional trading dengan rencana yang jelas',
  'Review mingguan otomatis untuk evaluasi menyeluruh'
]

export default function Benefits() {
  return (
    <section id="manfaat" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Jadikan trading Anda lebih terukur dan berkelanjutan
            </h2>
            <p className="mt-4 text-slate-600">
              Dengan mencatat keputusan dan hasilnya, Anda belajar dari data nyata, bukan sekadar feeling. Platform ini membantu Anda membuat keputusan lebih baik dari waktu ke waktu.
            </p>
            <ul className="mt-6 space-y-3">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-6">
                  <div className="text-3xl font-extrabold text-slate-900">68%</div>
                  <div className="mt-1 text-xs text-slate-600">Peningkatan konsistensi</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-6">
                  <div className="text-3xl font-extrabold text-slate-900">+12%</div>
                  <div className="mt-1 text-xs text-slate-600">Performa strategi</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-white p-6">
                  <div className="text-3xl font-extrabold text-slate-900">-35%</div>
                  <div className="mt-1 text-xs text-slate-600">Drawdown maksimum</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6">
                  <div className="text-3xl font-extrabold text-slate-900">24/7</div>
                  <div className="mt-1 text-xs text-slate-600">Akses multiplatform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
