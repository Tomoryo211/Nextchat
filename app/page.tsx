"use client";

import { useState } from "react";
import ChatHeader from "./components/chatHeader/ChatHeader";
import Messages from "./components/Messages/Messages";
import ChatInput from "./components/Input/Input";
import styles from "./page.module.scss";

export default function Home() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text: string) => {
    const updated = [...messages, { id: Date.now(), text, isUser: true }];
    setMessages(updated);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }), // ←ここ修正！！！！
    });

    const data = await res.json();

    if (data.reply) {
      setMessages(prev => [...prev, { id: Date.now(), text: data.reply, isUser: false }]);
    }
  };

  return (
    <div className={styles.container}>
      <ChatHeader />
      <Messages messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
}
