"use client";
import { useState } from "react";
import Container from "./components/Container/page";
import Message from "./components/Messages/page";
import MessageInput from "./components/Input/page";
import ChatHeader from "./components/chatHeader/page";

export default function Home() {
    const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);

    const sendMessage = async (text: string) => {
        const newMessages = [...messages, { role: "user", text }];
        setMessages(newMessages);

    const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            messages: newMessages.map((m) => ({ role: m.role, content: m.text })),
        }),
    });

    const data = await res.json();
    const reply = data.reply;

    setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    };

    return (
        <Container>
        <ChatHeader title="AI Chat" />
        <Message messages={messages} />
        <MessageInput onSend={sendMessage} />
        </Container>
    );
}
