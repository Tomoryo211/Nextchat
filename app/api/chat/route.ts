import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const response = await model.generateContent(messages.map((m: any) => m.text).join("\n"));

    return NextResponse.json({ reply: response.response.text() });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "AI API エラー", details: error.message },
      { status: 500 }
    );
  }
}
