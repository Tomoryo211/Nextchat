"use client";
import { useState } from "react";
import Container from "./components/Container/page";
import MessageBubble from "./components/MessageBubble/page";
import MessageInput from "./components/Input/page";
import ChatHeader from "./components/chatHeader/page";

export default function Page() {
    const [messages, setMessages] = useState([
        { role: "assistant", text: "こんにちは！何を話す？😄" }
    ]);

async function sendMessage(text: string) {
    const newMessages = [...messages, { role: "user", text }];
    setMessages(newMessages);

    const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            messages: newMessages.map((m) => ({
            role: m.role === "assistant" ? "assistant" : "user",
            content: m.text,
            })),
        }),
    });

    const data = await res.json();
    console.log("Backend response:", data);

    if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    }
}

return (
        <Container>
            <ChatHeader title="Next Chat"/>
                <div className="flex-1 overflow-y-auto space-y-4 p-4">
                    {messages.map((msg, i) => (
                    <MessageBubble key={i} role={msg.role} text={msg.text} />
                    ))}
                </div>
        <MessageInput onSend={sendMessage} />
        </Container>
    );
}
