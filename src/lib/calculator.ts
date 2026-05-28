// ---------------------------------------------------------------------------
// Generic calculator engine
// Add a new trade/job by defining a CalculatorConfig — no new components needed.
// ---------------------------------------------------------------------------

export interface PriceRange {
  low: number;
  high: number;
}

export type CalculatorType = "switchboard" | "generic";

// --- Input field descriptors (used by the UI renderer) ---

export type InputField =
  | {
      kind: "radio";
      id: string;
      label: string;
      options: { value: string; label: string }[];
    }
  | {
      kind: "toggle";
      id: string;
      label: string;
      trueLabel: string;
      falseLabel: string;
    }
  | {
      kind: "select3";
      id: string;
      label: string;
      options: { value: string; label: string }[];
    };

export interface CalculatorConfig {
  id: CalculatorType;
  title: string;
  fields: InputField[];
  defaults: Record<string, string | boolean>;
  calculate: (inputs: Record<string, string | boolean>) => PriceRange;
}

// ---------------------------------------------------------------------------
// Switchboard config — Melbourne 2026 pricing
// ---------------------------------------------------------------------------

const SW_BASE: Record<string, PriceRange> = {
  small: { low: 1000, high: 1400 },
  standard: { low: 1400, high: 2000 },
  large: { low: 1800, high: 2600 },
};

const SW_THREE_PHASE: PriceRange = { low: 2500, high: 4000 };

const SW_ADDONS: Record<string, PriceRange> = {
  builtBefore1987: { low: 300, high: 800 },   // asbestos handling
  meterBox: { low: 400, high: 900 },
  newCircuits: { low: 600, high: 1500 },       // EV/aircon/solar
  urgent: { low: 150, high: 300 },
};

export const switchboardConfig: CalculatorConfig = {
  id: "switchboard",
  title: "Switchboard Upgrade Cost Estimator",
  fields: [
    {
      kind: "radio",
      id: "boardSize",
      label: "Board size",
      options: [
        { value: "small", label: "Small (6–8 circuits)" },
        { value: "standard", label: "Standard (10–14 circuits)" },
        { value: "large", label: "Large (16–20 circuits)" },
      ],
    },
    {
      kind: "radio",
      id: "powerType",
      label: "Power supply",
      options: [
        { value: "single", label: "Single-phase" },
        { value: "three", label: "Three-phase" },
      ],
    },
    {
      kind: "toggle",
      id: "builtBefore1987",
      label: "Home built before 1987?",
      trueLabel: "Yes (possible asbestos)",
      falseLabel: "No",
    },
    {
      kind: "select3",
      id: "meterBox",
      label: "Meter box replacement needed?",
      options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
        { value: "unsure", label: "Not sure" },
      ],
    },
    {
      kind: "toggle",
      id: "newCircuits",
      label: "Adding new circuits? (EV charger, aircon, solar)",
      trueLabel: "Yes",
      falseLabel: "No",
    },
    {
      kind: "radio",
      id: "timing",
      label: "Timing",
      options: [
        { value: "standard", label: "Standard" },
        { value: "urgent", label: "Urgent / weekend" },
      ],
    },
  ],
  defaults: {
    boardSize: "standard",
    powerType: "single",
    builtBefore1987: false,
    meterBox: "no",
    newCircuits: false,
    timing: "standard",
  },
  calculate(inputs) {
    const powerType = inputs["powerType"] as string;
    const boardSize = (inputs["boardSize"] as string) || "standard";

    let low: number;
    let high: number;

    if (powerType === "three") {
      ({ low, high } = SW_THREE_PHASE);
    } else {
      ({ low, high } = SW_BASE[boardSize] ?? SW_BASE.standard);
    }

    if (inputs["builtBefore1987"] === true || inputs["builtBefore1987"] === "true") {
      low += SW_ADDONS.builtBefore1987.low;
      high += SW_ADDONS.builtBefore1987.high;
    }

    const meterBox = inputs["meterBox"] as string;
    if (meterBox === "yes") {
      low += SW_ADDONS.meterBox.low;
      high += SW_ADDONS.meterBox.high;
    } else if (meterBox === "unsure") {
      // Possible cost — only widens the high end
      high += SW_ADDONS.meterBox.high;
    }

    if (inputs["newCircuits"] === true || inputs["newCircuits"] === "true") {
      low += SW_ADDONS.newCircuits.low;
      high += SW_ADDONS.newCircuits.high;
    }

    if (inputs["timing"] === "urgent") {
      low += SW_ADDONS.urgent.low;
      high += SW_ADDONS.urgent.high;
    }

    return { low, high };
  },
};

// ---------------------------------------------------------------------------
// Generic config — placeholder for jobs without a custom calculator
// ---------------------------------------------------------------------------

export const genericConfig: CalculatorConfig = {
  id: "generic",
  title: "Cost Estimator",
  fields: [],
  defaults: {},
  calculate: () => ({ low: 0, high: 0 }),
};

// ---------------------------------------------------------------------------
// Registry — add new configs here as new trades/jobs are added
// ---------------------------------------------------------------------------

export const CALCULATOR_CONFIGS: Record<CalculatorType, CalculatorConfig> = {
  switchboard: switchboardConfig,
  generic: genericConfig,
};

export function getCalculatorConfig(type: CalculatorType): CalculatorConfig {
  return CALCULATOR_CONFIGS[type];
}

export function formatPrice(n: number): string {
  return "$" + n.toLocaleString("en-AU");
}
