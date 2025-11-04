import { Smartphone, Newspaper, BookOpen, ArrowRight } from "lucide-react";

function Card({ title, excerpt, tag, date, href, accent }) {
  return (
    <a
      href={href}
      className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className={`h-10 w-10 rounded-lg ${accent} text-white grid place-items-center mb-4`}>
        <ArrowRight size={18} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{excerpt}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          {tag}
        </span>
        <span>{date}</span>
      </div>
    </a>
  );
}

export default function ContentGrid() {
  const reviews = [
    {
      title: "Galaxy S24 Ultra Review",
      excerpt: "A powerhouse with stunning zoom and all-day battery. Here's the real-world verdict.",
      tag: "Mobile Reviews",
      date: "Nov 2025",
      href: "#",
      accent: "bg-indigo-600",
    },
    {
      title: "iPhone 16 Pro — Is it worth it?",
      excerpt: "We test A18 performance, new camera tricks, and battery life after 2 weeks.",
      tag: "Mobile Reviews",
      date: "Nov 2025",
      href: "#",
      accent: "bg-indigo-600",
    },
    {
      title: "Best mid-range phones under $400",
      excerpt: "Great screens, solid cameras, and long updates without breaking the bank.",
      tag: "Buying Guide",
      date: "Oct 2025",
      href: "#",
      accent: "bg-indigo-600",
    },
  ];

  const news = [
    {
      title: "Nothing Phone 3 leaks show bold design",
      excerpt: "Transparent back returns with brighter LEDs and bigger battery.",
      tag: "Gadget News",
      date: "Nov 2025",
      href: "#",
      accent: "bg-violet-600",
    },
    {
      title: "Qualcomm unveils Snapdragon X2",
      excerpt: "Next‑gen AI enhancements promise cooler, faster performance.",
      tag: "Chipset",
      date: "Nov 2025",
      href: "#",
      accent: "bg-violet-600",
    },
    {
      title: "Pixel Fold 2 rumor roundup",
      excerpt: "Bigger cover screen and lighter hinge expected in early leaks.",
      tag: "Rumors",
      date: "Oct 2025",
      href: "#",
      accent: "bg-violet-600",
    },
  ];

  const tutorials = [
    {
      title: "Master Android battery settings",
      excerpt: "Simple tweaks to extend battery life without hurting performance.",
      tag: "Tutorials",
      date: "Nov 2025",
      href: "#",
      accent: "bg-fuchsia-600",
    },
    {
      title: "How to move data to a new phone",
      excerpt: "Step-by-step guide covering iOS and Android with pitfalls to avoid.",
      tag: "How‑To",
      date: "Nov 2025",
      href: "#",
      accent: "bg-fuchsia-600",
    },
    {
      title: "Shoot better mobile photos",
      excerpt: "Practical tips for composition, HDR, and low‑light without pro gear.",
      tag: "Photography",
      date: "Oct 2025",
      href: "#",
      accent: "bg-fuchsia-600",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div id="reviews" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 grid place-items-center rounded-lg bg-indigo-600 text-white">
            <Smartphone size={18} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Latest Mobile Reviews</h2>
            <p className="text-slate-600">Hands-on impressions and long-term tests</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>

      <div id="news" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 grid place-items-center rounded-lg bg-violet-600 text-white">
            <Newspaper size={18} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">New Gadget News</h2>
            <p className="text-slate-600">Launches, leaks, and industry updates</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>

      <div id="tutorials">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 grid place-items-center rounded-lg bg-fuchsia-600 text-white">
            <BookOpen size={18} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Tech Tutorials</h2>
            <p className="text-slate-600">Clear guides to help you do more with your devices</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>

      <div id="subscribe" className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Get the best of Abdullah Tech Zone in your inbox</h3>
            <p className="text-slate-600 mt-1">Weekly highlights on reviews, news, and tutorials. No spam.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full sm:w-auto flex items-center gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full sm:w-72 rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
