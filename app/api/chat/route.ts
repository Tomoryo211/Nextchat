import { NextResponse } from "next/server";
import { genAI } from "@/lib/genAI";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash", 
    });

    const result = await model.generateContent(message);

    return NextResponse.json({
        reply: result.response.text(),
    });

    } catch (error: any) {
    console.error("API ERROR:", error);
    return NextResponse.json(
        { error: error.message || "エラー発生" },
        { status: 500 }
    );
    }
}
