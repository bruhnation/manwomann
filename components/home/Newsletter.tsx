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
    <section className="border-t border-border px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-2xl font-bold tracking-tight">Get 10% off.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Subscribe and use code WELCOME10 at checkout on regular priced
          merchandise.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="min-w-0 flex-1 border border-border bg-bg px-4 py-3 text-sm placeholder:text-muted focus:border-fg focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 bg-fg px-7 py-3 text-[13px] font-medium text-inverse transition-opacity hover:opacity-90"
          >
            Subscribe +
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-xs text-muted" role="status">
            Thank you — we&apos;ll be in touch.
          </p>
        )}
      </div>
    </section>
  );
}
