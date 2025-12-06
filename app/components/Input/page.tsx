"use client";
import { useState } from "react";
import styles from "./Input.module.scss";

export default function Input({ onSend }: any) {
  const [text, setText] = useState("");

  return (
    <div className={styles.inputAre}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="メッセージを入力..."
      />
      <button
        onClick={() => {
          onSend(text);
          setText("");
        }}
      >
        送信
      </button>
    </div>
  );
}
