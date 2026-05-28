"use client";

import { useState } from "react";
import { getCalculatorConfig, formatPrice } from "@/lib/calculator";
import type { CalculatorType, InputField } from "@/lib/calculator";

export default function Calculator({ type }: { type: CalculatorType }) {
  const config = getCalculatorConfig(type);
  const [inputs, setInputs] = useState<Record<string, string | boolean>>(
    config.defaults
  );

  const result = config.calculate(inputs);

  function set(id: string, value: string | boolean) {
    setInputs((prev) => ({ ...prev, [id]: value }));
  }

  if (config.fields.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
      <div className="space-y-6">
        {config.fields.map((field) => (
          <Field key={field.id} field={field} value={inputs[field.id]} set={set} />
        ))}
      </div>

      <div className="mt-8 bg-white border-2 border-orange-200 rounded-xl p-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
          Estimated cost
        </p>
        <p className="text-3xl font-bold text-orange-500">
          {formatPrice(result.low)} – {formatPrice(result.high)}
        </p>
        <p className="text-xs text-slate-400 mt-3 leading-relaxed">
          This is an estimate based on typical Melbourne jobs. Your exact price
          depends on a site inspection by a licensed electrician.
        </p>
        <a
          href="#quote"
          className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Get a real quote →
        </a>
      </div>
    </div>
  );
}

function Field({
  field,
  value,
  set,
}: {
  field: InputField;
  value: string | boolean;
  set: (id: string, v: string | boolean) => void;
}) {
  if (field.kind === "radio" || field.kind === "select3") {
    return (
      <div>
        <p className="text-sm font-semibold text-slate-700 mb-2.5">
          {field.label}
        </p>
        <div className="flex flex-wrap gap-2">
          {field.options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => set(field.id, opt.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                value === opt.value
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-slate-700 border-slate-300 hover:border-orange-400"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (field.kind === "toggle") {
    return (
      <div className="flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row">
        <p className="text-sm font-semibold text-slate-700">{field.label}</p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => set(field.id, false)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              value === false
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-slate-700 border-slate-300 hover:border-orange-400"
            }`}
          >
            {field.falseLabel}
          </button>
          <button
            type="button"
            onClick={() => set(field.id, true)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              value === true
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-slate-700 border-slate-300 hover:border-orange-400"
            }`}
          >
            {field.trueLabel}
          </button>
        </div>
      </div>
    );
  }

  return null;
}
