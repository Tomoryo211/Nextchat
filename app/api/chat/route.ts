import { NextResponse } from "next/server";
import { genAI } from "@/lib/genAI";

// メッセージが送信された時にこの関数が動く
export async function POST(req: Request) {
    try {
        // 「message」に送信されたメッセージを取り出す
        const { message } = await req.json();
        // geminiAIのモデルを探している
    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash", 
    });
    // 「message」をAIに送って「result」にAIからの返信が来る
    const result = await model.generateContent(message);
    // replyにAIから来た返事を入れて「reply」で表示
    return NextResponse.json({
        reply: result.response.text(),
    });

    // APIkeyがない時にこのエラーが起こる
    } catch (error: any) {
    console.error("API ERROR:", error);
    return NextResponse.json(
        { error: error.message || "エラー発生" },
        { status: 500 }
    );
    }
}
