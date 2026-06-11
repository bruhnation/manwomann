export function Footer() {
  return (
    <footer className="border-t border-border px-6 pb-20 pt-12 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium tracking-[0.08em]">MAN + WOMAN</p>
          <p className="mt-1 text-xs tracking-[0.2em] text-muted">HOME</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted md:items-end">
          <a
            href="https://instagram.com"
            className="transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
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
