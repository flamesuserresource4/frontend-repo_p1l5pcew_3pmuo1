import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <Star size={14} className="text-amber-500" />
              Trusted tech insights for everyday users and enthusiasts
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Abdullah Tech Zone
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Your hub for honest mobile reviews, the latest gadget news, and step-by-step tech tutorials. Practical, unbiased, and easy to follow.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#reviews" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-indigo-500">
                Explore Reviews
              </a>
              <a href="#news" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow border border-slate-200 hover:bg-slate-50">
                Latest News
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-2xl rounded-3xl" />
            <div className="relative aspect-[4/3] w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid h-full place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest text-white/80">Featured</p>
                  <h3 className="mt-2 text-2xl font-bold">Top Phones of the Month</h3>
                  <p className="mt-2 text-white/90">Curated picks balancing performance, cameras, and battery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
