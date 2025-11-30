"use client";

import { useState } from "react";
import Messages from "../Messages/page";
import Input from "../Input/page";
import ChatHeader from "../chatHeader/page";
import styles from "./container.module.scss";

export default function Container() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "こんにちは！😊 なんでも聞いてね。" }
  ]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newUserMessage = { role: "user", content: text };

    setMessages(prev => [...prev, newUserMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, newUserMessage] }),
      });

      const data = await res.json();

      const newAiMessage = {
        role: "assistant",
        content: data.reply,
      };

      setMessages(prev => [...prev, newAiMessage]);

    } catch {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "⚠️ 返信できませんでした。" },
      ]);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <ChatHeader />
      <Messages messages={messages} />
      <Input onSend={sendMessage} />
    </div>
  );
}
