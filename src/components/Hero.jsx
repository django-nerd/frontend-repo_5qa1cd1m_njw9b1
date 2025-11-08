import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/95" />
        <div className="h-[520px]">
          <Spline scene="https://prod.spline.design/9k0fK7wLY0R2dC3S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[520px]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-indigo-700 text-xs font-semibold ring-1 ring-inset ring-indigo-200">
              <span>Finansial Journal & Trading</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Kelola jurnal trading Anda dengan rapi, data-driven, dan penuh insight.
            </h1>
            <p className="text-lg text-slate-600">
              Catat setiap entry, kelola risiko, dan temukan pola profit Anda. Semua dalam satu workspace modern yang cepat dan intuitif.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#cta" className="inline-flex justify-center items-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-500 transition">
                Mulai Jurnal Gratis
              </a>
              <a href="#fitur" className="inline-flex justify-center items-center rounded-lg px-5 py-3 font-semibold text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50 transition">
                Lihat Fitur
              </a>
            </div>
            <div className="text-xs text-slate-500">Tidak perlu kartu kredit. Coba dulu, export kapan saja.</div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
