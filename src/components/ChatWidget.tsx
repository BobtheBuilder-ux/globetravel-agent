"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

type Destination = { city: string; country: string; region: string };
type Dates = { start?: string; end?: string };
type Budget = { min: number; max: number; currency: string };
type Party = { type: "solo" | "couple" | "family" | "group"; count: number };
type StylePref = "luxury" | "budget" | "adventure" | "cultural";
type Style = { preferences: StylePref[] };
type Special = { accessibility: boolean; dietary: boolean; other: string };
type ConversationState = {
  destination?: Destination;
  dates?: Dates;
  budget?: Budget;
  party?: Party;
  style?: Style;
  special?: Special;
};

const suggestions = [
  { city: "Lagos", country: "Nigeria", region: "West Africa" },
  { city: "Abuja", country: "Nigeria", region: "West Africa" },
  { city: "Accra", country: "Ghana", region: "West Africa" },
  { city: "London", country: "United Kingdom", region: "Europe" },
  { city: "Dubai", country: "UAE", region: "Middle East" },
];

const rates: Record<string, number> = { USD: 1, NGN: 1500, EUR: 0.92 };

function scorePackages(state: ConversationState) {
  const prefs = state.style?.preferences || [];
  const budgetUSD = state.budget ? ((state.budget.min + state.budget.max) / 2) / (rates[state.budget.currency] || 1) : 0;
  const scores: Record<string, number> = { BASIC: 0, STANDARD: 0, PREMIUM: 0, CUSTOM: 0 };
  if (prefs.includes("budget")) scores.BASIC += 3; else scores.BASIC += 1;
  if (prefs.includes("cultural")) scores.STANDARD += 2; else scores.STANDARD += 1;
  if (prefs.includes("luxury")) scores.PREMIUM += 4; else scores.PREMIUM += 1;
  if (prefs.includes("adventure")) scores.CUSTOM += 3; else scores.CUSTOM += 1;
  if (budgetUSD > 3000) scores.PREMIUM += 3; else if (budgetUSD > 1500) scores.STANDARD += 2; else scores.BASIC += 2;
  return Object.entries(scores).sort((a, b) => b[1] - a[1]).map(([title, value]) => ({ title, value }));
}

function summarize(state: ConversationState) {
  const d = state.destination ? `${state.destination.city}, ${state.destination.country}` : "";
  const ds = state.dates ? `${state.dates.start || ""} to ${state.dates.end || ""}` : "";
  const b = state.budget ? `${state.budget.min}-${state.budget.max} ${state.budget.currency}` : "";
  const p = state.party ? `${state.party.type} x${state.party.count}` : "";
  const s = state.style?.preferences.join(", ") || "";
  return `Destination: ${d}; Dates: ${ds}; Budget: ${b}; Party: ${p}; Style: ${s}`.trim();
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<ConversationState>({});
  const [step, setStep] = useState(0);
  const [cityQuery, setCityQuery] = useState("");
  const [otherReq, setOtherReq] = useState("");
  const styleOptions = ["luxury", "budget", "adventure", "cultural"] as const;
  const topPackages = useMemo(() => scorePackages(state), [state]);
  const waText = useMemo(() => encodeURIComponent(summarize(state)), [state]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-2xl hover:scale-105 transition"
        >
          Chat with us
        </button>
      )}
      {open && (
        <div className="w-[360px] sm:w-[420px] max-h-[70vh] rounded-2xl shadow-2xl border border-blue-100 bg-white overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b border-blue-100 flex items-center justify-between bg-gradient-to-r from-blue-50 to-cyan-50">
            <div className="font-bold text-gray-900">Travel Assistant</div>
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/2349129520972?text=${waText}`}
                target="_blank"
                className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
              >
                Talk to Agent
              </a>
              <button onClick={() => setOpen(false)} className="text-sm px-3 py-1 rounded-full bg-gray-800 text-white">Close</button>
            </div>
          </div>
          <div className="p-4 space-y-4 overflow-y-auto">
            {step === 0 && (
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Destination city</label>
                <input
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg"
                  value={cityQuery}
                  onChange={(e) => setCityQuery(e.target.value)}
                  placeholder="Start typing..."
                />
                <div className="grid grid-cols-2 gap-2">
                  {suggestions.filter(s => s.city.toLowerCase().includes(cityQuery.toLowerCase())).map((s, i) => (
                    <button
                      key={i}
                      className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 text-left"
                      onClick={() => { setState(prev => ({ ...prev, destination: { city: s.city, country: s.country, region: s.region } })); setStep(1); }}
                    >
                      <div className="font-semibold text-gray-900">{s.city}</div>
                      <div className="text-xs text-gray-700">{s.country}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="grid grid-cols-2 gap-2 items-end">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Start</label>
                  <input type="date" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, dates: { ...(prev.dates || {}), start: e.target.value } }))} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">End</label>
                  <input type="date" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, dates: { ...(prev.dates || {}), end: e.target.value } }))} />
                </div>
                <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold" onClick={() => setStep(2)}>Next</button>
              </div>
            )}
            {step === 2 && (
              <div className="grid grid-cols-3 gap-2 items-end">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Min</label>
                  <input type="number" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, budget: { ...(prev.budget || { currency: "USD", min: 0, max: 0 }), min: Number(e.target.value) } }))} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Max</label>
                  <input type="number" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, budget: { ...(prev.budget || { currency: "USD", min: 0, max: 0 }), max: Number(e.target.value) } }))} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Cur</label>
                  <select className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, budget: { ...(prev.budget || { min: 0, max: 0 }), currency: e.target.value } }))}>
                    <option value="USD">USD</option>
                    <option value="NGN">NGN</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
                <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold" onClick={() => setStep(3)}>Next</button>
              </div>
            )}
            {step === 3 && (
              <div className="grid grid-cols-2 gap-2 items-end">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Party</label>
                  <select className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, party: { ...(prev.party || { count: 1 }), type: e.target.value as Party["type"] } }))}>
                    <option value="solo">Solo</option>
                    <option value="couple">Couple</option>
                    <option value="family">Family</option>
                    <option value="group">Group</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Count</label>
                  <input type="number" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg" defaultValue={1} onChange={(e) => setState(prev => ({ ...prev, party: { ...(prev.party || { type: "solo" }), count: Number(e.target.value) } }))} />
                </div>
                <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold" onClick={() => setStep(4)}>Next</button>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-2">
                <div className="grid grid-cols-4 gap-2">
                  {styleOptions.map((p) => (
                    <button
                      key={p}
                      className={`text-sm p-2 rounded-lg border ${state.style?.preferences.includes(p) ? "bg-gradient-to-br from-blue-600 to-cyan-600 text-white" : "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100 text-gray-900"}`}
                      onClick={() => {
                        const prefs = new Set<StylePref>(state.style?.preferences || []);
                        if (prefs.has(p)) prefs.delete(p); else prefs.add(p);
                        setState(prev => ({ ...prev, style: { preferences: Array.from(prefs) } }));
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold" onClick={() => setStep(5)}>Next</button>
              </div>
            )}
            {step === 5 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" onChange={(e) => setState(prev => ({ ...prev, special: { ...(prev.special || { other: otherReq, dietary: false }), accessibility: e.target.checked } }))} />
                  <span className="text-sm text-gray-800">Accessibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" onChange={(e) => setState(prev => ({ ...prev, special: { ...(prev.special || { other: otherReq, accessibility: false }), dietary: e.target.checked } }))} />
                  <span className="text-sm text-gray-800">Dietary</span>
                </div>
                <input
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm"
                  placeholder="Other requirements"
                  value={otherReq}
                  onChange={(e) => { setOtherReq(e.target.value); setState(prev => ({ ...prev, special: { ...(prev.special || { accessibility: false, dietary: false }), other: e.target.value } })); }}
                />
                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold" onClick={() => setStep(6)}>See recommendations</button>
                  <Link href="/chat" className="px-3 py-2 rounded-lg bg-gray-800 text-white font-semibold text-sm">Open full assistant</Link>
                </div>
              </div>
            )}
            {step >= 6 && (
              <div className="space-y-3">
                <div className="text-sm text-gray-700">Top recommendations</div>
                <div className="space-y-2">
                  {topPackages.slice(0, 2).map((pkg, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50">
                      <div className="font-semibold text-gray-900">{pkg.title}</div>
                      <div className="text-xs text-gray-700">Score {pkg.value}</div>
                      <Link href="/#contact" className="mt-2 inline-block text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white">Book {pkg.title}</Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}