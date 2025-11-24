"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

type Destination = { city: string; country: string; region: string };
type Dates = { start?: string; end?: string };
type Budget = { min: number; max: number; currency: string };
type Party = { type: "solo" | "couple" | "family" | "group"; count: number };
type Style = { preferences: ("luxury" | "budget" | "adventure" | "cultural")[] };
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
  const luxury = prefs.includes("luxury");
  const adventure = prefs.includes("adventure");
  const cultural = prefs.includes("cultural");
  const budgetPref = prefs.includes("budget");
  const scores = {
    BASIC: 0,
    STANDARD: 0,
    PREMIUM: 0,
    CUSTOM: 0,
  } as Record<string, number>;
  scores.BASIC += budgetPref ? 3 : 1;
  scores.STANDARD += cultural ? 2 : 1;
  scores.PREMIUM += luxury ? 4 : 1;
  scores.CUSTOM += adventure ? 3 : 1;
  if (budgetUSD > 3000) scores.PREMIUM += 3; else if (budgetUSD > 1500) scores.STANDARD += 2; else scores.BASIC += 2;
  return Object.entries(scores).sort((a, b) => b[1] - a[1]).map(([title, value]) => ({ title, value }));
}

function summarize(state: ConversationState) {
  const d = state.destination ? `${state.destination.city}, ${state.destination.country}` : "";
  const ds = state.dates ? `${state.dates.start} to ${state.dates.end}` : "";
  const b = state.budget ? `${state.budget.min}-${state.budget.max} ${state.budget.currency}` : "";
  const p = state.party ? `${state.party.type} x${state.party.count}` : "";
  const s = state.style?.preferences.join(", ") || "";
  return `Destination: ${d}; Dates: ${ds}; Budget: ${b}; Party: ${p}; Style: ${s}`.trim();
}

export default function Chatbot() {
  const [state, setState] = useState<ConversationState>({});
  const [step, setStep] = useState(0);
  const [cityQuery, setCityQuery] = useState("");
  const [otherReq, setOtherReq] = useState("");
  const topPackages = useMemo(() => scorePackages(state), [state]);
  const waText = useMemo(() => encodeURIComponent(summarize(state)), [state]);

  const styleOptions = ["luxury", "budget", "adventure", "cultural"] as const;
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="text-gray-900 font-bold">Travel Assistant</div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">Agent hours: 8:00–22:00</span>
            <a
              href={`https://wa.me/2349129520972?text=${waText}`}
              target="_blank"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold"
            >
              Talk to Agent
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-2xl border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan Your Trip</h2>
            {step === 0 && (
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">City</label>
                <input
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg"
                  value={cityQuery}
                  onChange={(e) => setCityQuery(e.target.value)}
                  placeholder="Enter city"
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {suggestions.filter(s => s.city.toLowerCase().includes(cityQuery.toLowerCase())).map((s, i) => (
                    <button
                      key={i}
                      className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 text-left"
                      onClick={() => { setState(prev => ({ ...prev, destination: { city: s.city, country: s.country, region: s.region } })); setStep(1); }}
                    >
                      <div className="font-semibold text-gray-900">{s.city}</div>
                      <div className="text-sm text-gray-700">{s.country} • {s.region}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Start date</label>
                  <input type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, dates: { ...(prev.dates || {}), start: e.target.value } }))} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">End date</label>
                  <input type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, dates: { ...(prev.dates || {}), end: e.target.value } }))} />
                </div>
                <button className="mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold" onClick={() => setStep(2)}>Next</button>
              </div>
            )}

            {step === 2 && (
              <div className="grid sm:grid-cols-3 gap-4 items-end">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Min budget</label>
                  <input type="number" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, budget: { ...(prev.budget || { currency: "USD", min: 0, max: 0 }), min: Number(e.target.value) } }))} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Max budget</label>
                  <input type="number" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, budget: { ...(prev.budget || { currency: "USD", min: 0, max: 0 }), max: Number(e.target.value) } }))} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Currency</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, budget: { ...(prev.budget || { min: 0, max: 0 }), currency: e.target.value } }))}>
                    <option value="USD">USD</option>
                    <option value="NGN">NGN</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
                <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold" onClick={() => setStep(3)}>Next</button>
              </div>
            )}

            {step === 3 && (
              <div className="grid sm:grid-cols-2 gap-4 items-end">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Travel party</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg" onChange={(e) => setState(prev => ({ ...prev, party: { ...(prev.party || { count: 1 }), type: e.target.value as Party["type"] } }))}>
                    <option value="solo">Solo</option>
                    <option value="couple">Couple</option>
                    <option value="family">Family</option>
                    <option value="group">Group</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Number of travelers</label>
                  <input type="number" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg" defaultValue={1} onChange={(e) => setState(prev => ({ ...prev, party: { ...(prev.party || { type: "solo" }), count: Number(e.target.value) } }))} />
                </div>
                <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold" onClick={() => setStep(4)}>Next</button>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-4 gap-4">
                  {styleOptions.map((p) => (
                    <button
                      key={p}
                      className={`p-4 rounded-xl border ${state.style?.preferences.includes(p) ? "bg-gradient-to-br from-blue-600 to-cyan-600 text-white" : "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100 text-gray-900"}`}
                      onClick={() => {
                        const prefs = new Set<"luxury" | "budget" | "adventure" | "cultural">(state.style?.preferences || []);
                        if (prefs.has(p)) prefs.delete(p); else prefs.add(p);
                        setState(prev => ({ ...prev, style: { preferences: Array.from(prefs) } }));
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold" onClick={() => setStep(5)}>Next</button>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" onChange={(e) => setState(prev => ({ ...prev, special: { ...(prev.special || { other: otherReq, dietary: false }), accessibility: e.target.checked } }))} />
                  <span className="text-gray-800">Accessibility needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" onChange={(e) => setState(prev => ({ ...prev, special: { ...(prev.special || { other: otherReq, accessibility: false }), dietary: e.target.checked } }))} />
                  <span className="text-gray-800">Dietary requirements</span>
                </div>
                <input
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg"
                  placeholder="Other requirements"
                  value={otherReq}
                  onChange={(e) => { setOtherReq(e.target.value); setState(prev => ({ ...prev, special: { ...(prev.special || { accessibility: false, dietary: false }), other: e.target.value } })); }}
                />
                <div className="flex items-center gap-3">
                  <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold" onClick={() => setStep(6)}>See recommendations</button>
                  <Link href="/dettu-december" className="px-4 py-3 rounded-lg bg-gray-800 text-white font-semibold">View Detty December</Link>
                </div>
              </div>
            )}

            {step >= 6 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Recommended packages</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {topPackages.slice(0, 2).map((pkg, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl transform group-hover:scale-105 transition-transform duration-300 shadow-2xl"></div>
                      <div className="relative bg-white rounded-3xl p-8 m-1 shadow-xl">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h4>
                        <p className="text-gray-700 mb-4">Score {pkg.value}</p>
                        <Link href="/#contact" className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold">Book {pkg.title}</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Destination FAQs</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { q: "Weather", a: "Tropical, warm and humid. Dry season Nov–Mar." },
                { q: "Culture", a: "Vibrant music, art, festivals and cuisine." },
                { q: "Safety", a: "Use trusted transport and guided movement." },
                { q: "Attractions", a: "Beaches, markets, galleries, nightlife." },
              ].map((f, i) => (
                <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                  <div className="font-semibold text-gray-900">{f.q}</div>
                  <div className="text-gray-700 text-sm">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Packing list</h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Light clothing",
                "Comfortable shoes",
                "Sunscreen",
                "Power adapter",
                "Travel documents",
              ].map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Visa & entry</h3>
            <p className="text-gray-700">Check official sources for latest requirements.</p>
            <Link href="https://immigration.gov.ng/visa/" target="_blank" className="text-blue-600 font-semibold">NIS visa portal</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}