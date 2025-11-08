export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 sm:px-12 sm:py-16 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(99,102,241,0.35),transparent)]" />
          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Siap mulai jurnal trading yang rapi?</h3>
              <p className="mt-2 text-white/80">Coba gratis. Buat akun dalam 30 detik dan rasakan perubahan pada proses trading Anda.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="Email Anda" className="w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder-white/60 ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-indigo-400 outline-none" />
              <button className="inline-flex justify-center items-center rounded-lg bg-indigo-500 px-5 py-3 font-semibold text-white shadow hover:bg-indigo-400 transition">
                Dapatkan Akses
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
