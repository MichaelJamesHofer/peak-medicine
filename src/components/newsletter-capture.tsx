'use client';

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type NewsletterCaptureProps = {
  variant?: "hero" | "inline" | "footer";
  heading?: string;
  description?: string;
  className?: string;
};

export function NewsletterCapture({
  variant = "inline",
  heading = "Get the protocols",
  description = "Weekly insights on functional medicine, sports performance, and actionable health strategies. No spam, unsubscribe anytime.",
  className = "",
}: NewsletterCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to subscribe");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (variant === "hero") {
    return (
      <div className={`w-full max-w-xl ${className}`}>
        <div className="text-center mb-6">
          <h3 className="text-heading-lg font-semibold text-foreground mb-2">
            {heading}
          </h3>
          <p className="text-body text-foreground-muted">
            {description}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 rounded-xl border border-border bg-surface px-5 py-4 text-body text-foreground placeholder:text-foreground-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60 transition-all duration-200"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="rounded-xl bg-primary px-8 py-4 text-body font-semibold text-background hover:bg-primary-hover disabled:opacity-60 transition-all duration-200 shadow-glow-sm hover:shadow-glow"
          >
            {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-3 text-sm text-error text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={className}>
        <h4 className="text-body font-semibold text-foreground mb-2">
          {heading}
        </h4>
        <p className="text-body-sm text-foreground-muted mb-4">
          {description}
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-body-sm text-foreground placeholder:text-foreground-subtle focus:border-primary focus:outline-none disabled:opacity-60 transition-all duration-200"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="rounded-lg bg-primary px-5 py-2.5 text-body-sm font-semibold text-background hover:bg-primary-hover disabled:opacity-60 transition-all duration-200"
          >
            {status === "success" ? "✓" : "→"}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-2 text-caption text-error">Try again</p>
        )}
      </div>
    );
  }

  // Default inline variant
  return (
    <div className={`rounded-2xl border border-border bg-surface p-6 ${className}`}>
      <h4 className="text-heading font-semibold text-foreground mb-2">
        {heading}
      </h4>
      <p className="text-body-sm text-foreground-muted mb-4">
        {description}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === "loading" || status === "success"}
          className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-body-sm text-foreground placeholder:text-foreground-subtle focus:border-primary focus:outline-none disabled:opacity-60 transition-all duration-200"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="rounded-lg bg-primary px-6 py-3 text-body-sm font-semibold text-background hover:bg-primary-hover disabled:opacity-60 transition-all duration-200"
        >
          {status === "loading" ? "..." : status === "success" ? "Subscribed ✓" : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-caption text-error">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}

