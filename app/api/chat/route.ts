import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "エラーが発生しました。";

    return NextResponse.json({ reply });

  } catch (error) {
    return NextResponse.json({ reply: "⚠️ サーバーエラー：返信できません。" });
  }
}
