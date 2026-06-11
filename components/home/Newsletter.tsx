"use client";

import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="border-t border-border px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-md">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Get 10% off
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Welcome to Man + Woman. Get 10% off when you subscribe to our
            newsletter. Use code Welcome10 at checkout on regular priced
            merchandise.
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex items-end gap-6 border-b border-border pb-2">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="min-w-0 flex-1 bg-transparent text-sm placeholder:text-muted focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-fg px-5 py-2 text-[11px] uppercase tracking-[0.12em] text-inverse transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
              >
                Subscribe
              </button>
            </div>
            {submitted && (
              <p className="mt-3 text-xs text-muted" role="status">
                Thank you — we&apos;ll be in touch.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
