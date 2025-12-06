"use client";

import { useState } from "react";
import Container from "./components/Container/page";
import Messages from "./components/Messages/Messages";
import Input from "./components/Input/Input";

export default function Home() {
  const [messages, setMessages] = useState<
    { id: string; text: string; isUser: boolean }[]
  >([]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg = {
      id: crypto.randomUUID(),
      text,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            text: data.reply,
            isUser: false,
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          text: "⚠️ エラー：返信取得に失敗しました。",
          isUser: false,
        },
      ]);
    }
  };

  return (
    <Container>
      <Messages messages={messages} />
      <Input onSend={handleSendMessage} />
    </Container>
  );
}
