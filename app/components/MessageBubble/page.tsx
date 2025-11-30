import styles from "./MessageBubble.module.scss";

export default function MessageBubble({ role, text }: { role: string; text: string }) {
  const isUser = role === "user";

  return (
    <div className={`${styles.row} ${isUser ? styles.right : styles.left}`}>
      <div className={`${styles.bubble} ${isUser ? styles.user : styles.ai}`}>
        <div>{text}</div>
      </div>
    </div>
  );
}
