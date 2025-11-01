export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-zinc-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold text-white">Venus</div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#features" className="text-zinc-300 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-zinc-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-zinc-300 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="py-24 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-white">
                Venus — Social platform with real estate listings
              </h1>
              <p className="mt-4 max-w-prose text-lg text-zinc-300">
                Share photos and videos, promote content with sponsored posts, and manage property listings — all with
                creator-first analytics and tools.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors"
                  style={{ backgroundColor: "var(--venus-primary)" }}
                >
                  Get in touch
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="h-64 rounded-xl border border-zinc-700 bg-zinc-900 shadow-sm md:h-80" />
          </div>
        </section>

        <section id="features" className="border-t border-zinc-700 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <Feature title="Social content platform" desc="Create and engage with photo and video posts with modern interactions." />
            <Feature title="Ads & monetization" desc="Run sponsored content and promotions; creators access analytics and payouts." />
            <Feature title="Property listings" desc="Publish and discover real estate content with social engagement built-in." />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Feature title="Messaging & notifications" desc="Stay connected with DMs, follows, and real‑time notifications." />
            <Feature title="Creator tools" desc="Promote management, performance insights, and audience growth tooling." />
            <Feature title="Internationalization" desc="Multi-language foundation for global audiences from day one." />
          </div>
        </section>

        <section id="about" className="border-t border-zinc-700 py-16">
          <h2 className="text-2xl font-semibold text-white">About Venus</h2>
          <p className="mt-3 max-w-prose text-zinc-300">
            Venus is a social media app focused on premium content, creator monetization,
            and performant ad experiences. Our stack spans iOS native with Firebase,
            Algolia search, Stripe payments, and a strong testing culture across unit,
            integration, E2E, and performance.
          </p>
        </section>

        <section id="contact" className="border-t border-zinc-700 py-16">
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <div className="mt-3 space-y-2 text-zinc-300">
            <p>For general inquiries: <a className="underline hover:text-white transition-colors" href="mailto:contact@venuslabs.net">contact@venuslabs.net</a></p>
            <p>For support: <a className="underline hover:text-white transition-colors" href="mailto:support@venuslabs.net">support@venuslabs.net</a></p>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-700 py-10 text-center text-sm text-zinc-300">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
            <span>© {new Date().getFullYear()} Venus Technologies, Inc</span>
            <div className="flex items-center gap-4">
              <a className="text-zinc-300 hover:text-white hover:underline transition-colors" href="/privacy">Privacy</a>
              <a className="text-zinc-300 hover:text-white hover:underline transition-colors" href="/terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-6 shadow-sm">
      <h3 className="font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
    </div>
  );
}
