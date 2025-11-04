export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Abdullah Tech Zone. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <a href="#reviews" className="hover:text-slate-900">Reviews</a>
          <a href="#news" className="hover:text-slate-900">News</a>
          <a href="#tutorials" className="hover:text-slate-900">Tutorials</a>
          <a href="#subscribe" className="hover:text-slate-900">Subscribe</a>
        </nav>
      </div>
    </footer>
  );
}
