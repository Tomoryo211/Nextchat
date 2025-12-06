import styles from "./MessageBubble.module.scss";

export default function MessageBubble({ text, isUser }) {
  return (
    <div className={`${styles.row} ${isUser ? styles.right : styles.left}`}>
      <div className={`${styles.bubble} ${isUser ? styles.user : styles.ai}`}>
        {text}
      </div>
    </div>
  );
}
