"use client";
import { useState } from "react";
import styles from "./Input.module.scss";

export default function Input({ onSend }) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className={styles.inputWrap}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="メッセージ入力..." />
      <button onClick={send}>送信</button>
    </div>
  );
}
