import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const state = body?.state || {};
  const summary = [
    state?.destination?.city,
    state?.destination?.country,
    state?.dates ? `${state.dates.start} to ${state.dates.end}` : undefined,
  ].filter(Boolean).join(" | ");
  return NextResponse.json({ ok: true, summary });
}