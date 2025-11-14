import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.email) {
      return NextResponse.json({ ok: false, message: "Email required" }, { status: 400 });
    }

    // In production you would forward this to ConvertKit, Beehiiv, etc.
    console.info("New subscriber", body);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
