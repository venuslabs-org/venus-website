export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold">Venus</div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#features" className="hover:text-black">Features</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="py-24 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Build, create, and share with Venus Labs
              </h1>
              <p className="mt-4 max-w-prose text-lg text-zinc-600">
                We craft modern experiences for creators and communities. This
                site is the starting point—fast, secure, and ready to scale.
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
                  className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="h-64 rounded-xl border border-zinc-200 bg-white shadow-sm md:h-80" />
          </div>
        </section>

        <section id="features" className="border-t border-zinc-200 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <Feature title="Fast by default" desc="Deployed on a global edge network for instant loads." />
            <Feature title="Accessible & responsive" desc="Works beautifully on every device and input." />
            <Feature title="Built to scale" desc="Modern architecture ready for growth and new products." />
          </div>
        </section>

        <section id="about" className="border-t border-zinc-200 py-16">
          <h2 className="text-2xl font-semibold">About Venus Technologies</h2>
          <p className="mt-3 max-w-prose text-zinc-600">
            Venus Technologies, Inc is building the next generation of creative
            tooling and social experiences. Follow along as we launch.
          </p>
        </section>

        <section id="contact" className="border-t border-zinc-200 py-16">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-zinc-600">Email us at <a className="underline" href="mailto:admin@venuslabs.net">admin@venuslabs.net</a></p>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
            <span>© {new Date().getFullYear()} Venus Technologies, Inc</span>
            <div className="flex items-center gap-4">
              <a className="hover:underline" href="https://jackie-qin.github.io/venus-legal-docs/privacy.html" target="_blank" rel="noopener noreferrer">Privacy</a>
              <a className="hover:underline" href="https://jackie-qin.github.io/venus-legal-docs/terms.html" target="_blank" rel="noopener noreferrer">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}
