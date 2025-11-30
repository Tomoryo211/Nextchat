"use client";
import { useState } from "react";
import styles from "./MessageInput.module.scss";

export default function MessageInput({ onSend }: { onSend: (text: string) => void }) {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        onSend(input);
        setInput("");
    };

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="メッセージを入力..."
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
        <button className={styles.button} onClick={handleSend}>送信</button>
        </div>
    );
}
