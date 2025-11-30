import MessageBubble from "../MessageBubble/page";
import styles from "./Messages.module.scss";

export default function MessageList({ messages }: { messages: { role: string; text: string }[] }) {
    return (
        <div className={styles.list}>
            {messages.map((m, i) => (
                <MessageBubble key={i} role={m.role} text={m.text} />
            ))}
        </div>
    );
}
