"use client";

import { useState } from "react";
import ChatHeader from "./components/chatHeader/page";
import Container from "./components/Messages/page";
import Input from "./components/Input/page";

export default function Nextchat() {
    const [messeage, setMesseage] = useState([
        {role: "assistant" , text: "こんにちは。なんでも質問してください"},
    ]);
    return (
        <>
        <div className="chatApp">
            <ChatHeader />
            <Container />
            <Input />
        </div>
        </>
    )
}