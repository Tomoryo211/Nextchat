"use client";

import { useState } from "react";
import ChatHeader from "./components/chatHeader/page.tsx";

export default function Nextchat() {
    const [messeage, setMesseage] = useState([
        {role: "assistant" , text: "こんにちは。なんでも質問してください"},
    ]);
    return (
        <>
        <div className="chatApp">
            <ChatHeader />
            <h1>トーク画面</h1>
        </div>
        </>
    )
}