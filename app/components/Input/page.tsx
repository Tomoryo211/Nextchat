"use client";
import { useState } from "react";
import style from "./Input.module.scss";

export default function MessageInput({ onSend }: { onSend: (text: string) => void }) {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
            onSend(input);
            setInput("");
    };

    return (
        <div className={style.inputArea}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="メッセージを入力..."
                className={input}
            />
            <button onClick={handleSend} className={}>送信</button>
        </div>
    );
}