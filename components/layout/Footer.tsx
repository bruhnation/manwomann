export function Footer() {
  return (
    <footer className="border-t border-border px-5 pb-16 pt-12 md:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-xl font-bold">Man + Woman</p>
          <p className="mt-1 text-xs text-muted">Home</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted md:items-end">
          <a
            href="https://instagram.com"
            className="underline underline-offset-2 transition-colors hover:text-fg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Man + Woman Home
          </p>
        </div>
      </div>
    </footer>
  );
}
