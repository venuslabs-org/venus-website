export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-2 text-zinc-600">
        The page you’re looking for doesn’t exist. Return to the home page.
      </p>
      <a
        href="/"
        className="mt-6 inline-flex rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900"
      >
        Go home
      </a>
    </main>
  );
}



