import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.email || !body.message) {
      return NextResponse.json({ ok: false, message: "Missing fields" }, { status: 400 });
    }

    console.info("Contact message", body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact error", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
