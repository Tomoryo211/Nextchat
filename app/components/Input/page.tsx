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
return(
    <div className={style.inputArea}>
        <input 
            type="text"
            value={input} />
    </div>
)