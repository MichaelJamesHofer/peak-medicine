'use client';

import { FormEvent, useState } from "react";

type State = 'idle' | 'loading' | 'success' | 'error';

export function EmailSubscribeForm() {
  const [state, setState] = useState<State>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
    };

    if (!payload.email) {
      setMessage('Please add an email address.');
      setState('error');
      return;
    }

    setState('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Unable to subscribe right now.');
      }

      setState('success');
      setMessage('Thanks! Check your inbox for the guide.');
      form.reset();
    } catch (error) {
      console.error(error);
      setState('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-3 text-base text-[color:var(--color-foreground)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-3 text-base text-[color:var(--color-foreground)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="w-full rounded-xl bg-primary px-4 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-primary-dark disabled:opacity-70 sm:w-auto"
        >
          {state === 'loading' ? 'Sending…' : 'Get the Guide'}
        </button>
      </form>
      {message && (
        <p className={`text-sm ${state === 'error' ? 'text-rose-500' : 'text-emerald-500'}`}>{message}</p>
      )}
    </div>
  );
}
