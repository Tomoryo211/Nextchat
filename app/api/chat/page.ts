import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { messages } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "API KEY missing" }, { status: 500 });
        }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
    body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
    }),
});

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "返答エラー";

    return NextResponse.json({ reply });
}
