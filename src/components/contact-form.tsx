'use client';

import { FormEvent, useState } from "react";

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formData.get('consent')) {
      setStatus('error');
      setMessage('Please confirm you understand the boundaries.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) throw new Error('Unable to send message');

      setStatus('success');
      setMessage('Thanks! We received your note.');
      form.reset();
    } catch {
      setStatus('error');
      setMessage('We could not send your message. Please try again later.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-body-sm font-medium text-foreground mb-2 block">
            Name
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-body text-foreground placeholder:text-foreground-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-body-sm font-medium text-foreground mb-2 block">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-body text-foreground placeholder:text-foreground-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label className="text-body-sm font-medium text-foreground mb-2 block">
          Subject
        </label>
        <select
          name="subject"
          defaultValue="podcast"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-body text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
        >
          <option value="podcast">Podcast feedback</option>
          <option value="business">Business / speaking</option>
          <option value="press">Press / media</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="text-body-sm font-medium text-foreground mb-2 block">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-body text-foreground placeholder:text-foreground-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
          placeholder="What can we help with?"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 h-5 w-5 rounded border-border text-primary focus:ring-primary/30"
        />
        <span className="text-body-sm text-foreground-muted">
          I understand this form is not for medical advice, diagnosis, or emergencies.
        </span>
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-xl bg-primary px-8 py-3 text-body font-semibold text-background hover:bg-primary-hover disabled:opacity-60 transition-all duration-200 shadow-glow-sm hover:shadow-glow"
        >
          {status === 'loading' ? 'Sending...' : 'Send message'}
        </button>
        {message && (
          <p className={`text-body-sm ${status === 'error' ? 'text-error' : 'text-success'}`}>
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
