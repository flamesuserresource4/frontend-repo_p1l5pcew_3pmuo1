import { Rocket, Smartphone, Newspaper, BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
              <Rocket size={20} />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900 text-lg">Abdullah Tech Zone</p>
              <p className="text-xs text-slate-500 -mt-0.5">Reviews • News • Tutorials</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#reviews" className="hover:text-slate-900 flex items-center gap-2"><Smartphone size={16}/>Reviews</a>
            <a href="#news" className="hover:text-slate-900 flex items-center gap-2"><Newspaper size={16}/>News</a>
            <a href="#tutorials" className="hover:text-slate-900 flex items-center gap-2"><BookOpen size={16}/>Tutorials</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#subscribe"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
