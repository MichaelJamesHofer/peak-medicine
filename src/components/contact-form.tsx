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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        throw new Error('Unable to send message');
      }

      setStatus('success');
      setMessage('Thanks! We received your note.');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('We could not send your message. Please try again later.');
    }
  }

  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-[color:var(--color-foreground)]">
            Name
            <input
              name="name"
              type="text"
              className="mt-1 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-3 text-base text-[color:var(--color-foreground)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </label>
          <label className="text-sm font-medium text-[color:var(--color-foreground)]">
            Email
            <input
              name="email"
              type="email"
              className="mt-1 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-3 text-base text-[color:var(--color-foreground)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </label>
        </div>
        <label className="text-sm font-medium text-[color:var(--color-foreground)]">
          Subject
          <select
            name="subject"
            className="mt-1 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-3 text-base text-[color:var(--color-foreground)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            defaultValue="podcast"
          >
            <option value="podcast">Podcast feedback</option>
            <option value="business">Business / speaking</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label className="text-sm font-medium text-[color:var(--color-foreground)]">
          Message
          <textarea
            name="message"
            rows={5}
            className="mt-1 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-3 text-base text-[color:var(--color-foreground)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="What can we help with?"
            required
          />
        </label>
        <label className="flex items-start gap-3 text-sm text-[color:var(--color-foreground-muted)]">
          <input type="checkbox" name="consent" className="mt-1 h-5 w-5 rounded border-[color:var(--color-border)] text-primary focus:ring-primary/30" />
          <span>I understand this form is not for medical advice, diagnosis, or emergencies.</span>
        </label>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-primary-dark disabled:opacity-60 sm:w-auto"
        >
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </button>
      </form>
      {message && (
        <p className={`text-sm ${status === 'error' ? 'text-rose-500' : 'text-emerald-500'}`}>{message}</p>
      )}
    </div>
  );
}
