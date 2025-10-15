
const Navbar = () => (
  <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
    <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
      <a href="#" className="flex items-center gap-2">
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 48 48">
          <path
            d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
            fill="currentColor"
          />
        </svg>
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">TradeWise Academy</h2>
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {["Courses", "About Us", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      <a
        href="#"
        className="hidden md:inline-flex min-w-[84px] items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
      >
        Enroll Now
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative h-[60vh] min-h-[400px] md:h-[80vh] overflow-hidden">
    <div className="absolute inset-0 bg-background-dark"></div>

    {/* Animated Chart Bars */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-around gap-2 px-4">
        {[
          60, 40, 30, 75, 55, 45, 85, 65, 50, 90, 70, 95,
        ].map((height, i) => (
          <div
            key={i}
            className={`chart-bar w-1/12 ${
              height % 3 === 0 ? "bg-red-500" : "bg-green-500"
            } animate-chart-rise`}
            style={{ height: `${height}%`, animationDelay: `${0.1 * (i + 1)}s` }}
          ></div>
        ))}
      </div>
    </div>

    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/60 to-transparent"></div>

    <div className="relative z-10 flex h-full items-end p-4 md:p-12">
      <div className="container mx-auto">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Unlock Your Trading Potential
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300">
            Master the markets with our expert-led courses. Join Batch 4 now — physical and online classes available.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              🎯 Join Physical Class
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-white bg-transparent px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-white/10"
            >
              💻 Join Online Class
            </a>
          </div>
          <p className="mt-8 text-sm font-medium text-slate-400">
            Learn, Trade, and Grow with TradeWise Academy — Your path to becoming a professional trader.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
    <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
      <p>© 2024 TradeWise Academy. All Rights Reserved.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
