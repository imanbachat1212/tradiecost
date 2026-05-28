"use client";

import { useState } from "react";

interface Fields {
  name: string;
  suburb: string;
  phone: string;
  jobDescription: string;
}

const EMPTY: Fields = { name: "", suburb: "", phone: "", jobDescription: "" };

function isValidPhone(p: string) {
  return /^(\+?61|0)[2-9]\d{8}$/.test(p.replace(/\s/g, ""));
}

export default function QuoteForm({ defaultJob = "" }: { defaultJob?: string }) {
  const [fields, setFields] = useState<Fields>({ ...EMPTY, jobDescription: defaultJob });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function set(key: keyof Fields, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<Fields> = {};
    if (!fields.name.trim()) e.name = "Name is required";
    if (fields.suburb.trim().length < 2) e.suburb = "Enter your suburb";
    if (!isValidPhone(fields.phone)) e.phone = "Enter a valid Australian phone number";
    if (!fields.jobDescription.trim()) e.jobDescription = "Please describe the job";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    const url = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    if (!url) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Webhook returned non-2xx");
      setStatus("success");
      setFields(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <p className="text-green-800 font-semibold text-lg">Quote request sent!</p>
        <p className="text-green-700 text-sm mt-1">
          A licensed Melbourne electrician will be in touch within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="qf-name">
            Full name
          </label>
          <input
            id="qf-name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => set("name", e.target.value)}
            className={`w-full rounded-lg border px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:ring-2 focus:ring-orange-400 ${
              errors.name ? "border-red-400 bg-red-50" : "border-slate-300 bg-white"
            }`}
            placeholder="Jane Smith"
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="qf-suburb">
            Suburb
          </label>
          <input
            id="qf-suburb"
            type="text"
            value={fields.suburb}
            onChange={(e) => set("suburb", e.target.value)}
            className={`w-full rounded-lg border px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:ring-2 focus:ring-orange-400 ${
              errors.suburb ? "border-red-400 bg-red-50" : "border-slate-300 bg-white"
            }`}
            placeholder="e.g. Richmond"
          />
          {errors.suburb && <p className="text-xs text-red-600 mt-1">{errors.suburb}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="qf-phone">
          Phone number
        </label>
        <input
          id="qf-phone"
          type="tel"
          autoComplete="tel"
          value={fields.phone}
          onChange={(e) => set("phone", e.target.value)}
          className={`w-full rounded-lg border px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:ring-2 focus:ring-orange-400 ${
            errors.phone ? "border-red-400 bg-red-50" : "border-slate-300 bg-white"
          }`}
          placeholder="04XX XXX XXX"
        />
        {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="qf-job">
          Describe the job
        </label>
        <textarea
          id="qf-job"
          rows={3}
          value={fields.jobDescription}
          onChange={(e) => set("jobDescription", e.target.value)}
          className={`w-full rounded-lg border px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:ring-2 focus:ring-orange-400 resize-none ${
            errors.jobDescription ? "border-red-400 bg-red-50" : "border-slate-300 bg-white"
          }`}
          placeholder="e.g. Switchboard upgrade, 3-bedroom house in Essendon, looking to add EV charger"
        />
        {errors.jobDescription && (
          <p className="text-xs text-red-600 mt-1">{errors.jobDescription}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          Something went wrong — please try again or call a local electrician directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm"
      >
        {status === "submitting" ? "Sending…" : "Get a Free Quote"}
      </button>

      <p className="text-xs text-slate-400 text-center">
        No spam. Your details are only shared with local licensed electricians.
      </p>
    </form>
  );
}
