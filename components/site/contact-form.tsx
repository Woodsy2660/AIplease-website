"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success";

type FieldErrors = {
  name?: string;
  email?: string;
  goal?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "h-11 w-full rounded-lg border border-border bg-white px-4 text-ink placeholder:text-muted";
const textareaClass =
  "min-h-36 w-full rounded-lg border border-border bg-white px-4 py-3 text-ink placeholder:text-muted";
const labelClass =
  "block font-mono text-xs uppercase tracking-[0.16em] text-muted";
const errorClass = "mt-2 text-sm text-accent";

function RequiredMark() {
  return (
    <span aria-hidden className="text-accent">
      {" "}
      *
    </span>
  );
}

export function ContactForm({
  defaultProduct,
}: {
  defaultProduct?: string;
}) {
  const prefillGoal =
    defaultProduct === "hrplease" ? "I'd like access to HRplease." : "";

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [organisation, setOrganisation] = React.useState("");
  const [goal, setGoal] = React.useState(prefillGoal);
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [status, setStatus] = React.useState<Status>("idle");

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) {
      next.email = "Please enter your work email.";
    } else if (!EMAIL_RE.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!goal.trim())
      next.goal = "Please tell us what you're trying to achieve.";
    return next;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    // No real backend — simulate the round-trip then confirm.
    window.setTimeout(() => setStatus("success"), 700);
  }

  function reset() {
    setName("");
    setEmail("");
    setOrganisation("");
    setGoal(prefillGoal);
    setErrors({});
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-sand p-6 sm:p-7">
        <span
          aria-hidden
          className="inline-flex size-11 items-center justify-center rounded-full bg-accent text-on-accent"
        >
          <Check className="size-5" />
        </span>
        <h2 className="mt-6 text-2xl tracking-tight">Enquiry received</h2>
        <p className="mt-3 text-ink-soft">
          Thanks — we&rsquo;ll be in touch within two business days.
        </p>
        <div className="mt-8">
          <Button variant="secondary" onClick={reset}>
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-white p-6 sm:p-8"
    >
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
            <RequiredMark />
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`mt-2 ${inputClass}`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        {/* Work email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email
            <RequiredMark />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`mt-2 ${inputClass}`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Organisation */}
        <div>
          <label htmlFor="organisation" className={labelClass}>
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            className={`mt-2 ${inputClass}`}
          />
        </div>

        {/* Goal */}
        <div>
          <label htmlFor="goal" className={labelClass}>
            What are you trying to achieve?
            <RequiredMark />
          </label>
          <textarea
            id="goal"
            name="goal"
            required
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            aria-invalid={errors.goal ? true : undefined}
            aria-describedby={errors.goal ? "goal-error" : undefined}
            className={`mt-2 ${textareaClass}`}
          />
          {errors.goal && (
            <p id="goal-error" role="alert" className={errorClass}>
              {errors.goal}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? "Submitting…" : "Submit enquiry"}
          {!submitting && <ArrowRight className="size-4" />}
        </Button>
      </div>
    </form>
  );
}
