import styles from "./Messages.module.scss";

export default function MessageBubble({
  message,
  isUser,
}: {
  message: string;
  isUser: boolean;
}) {
  return (
    <div className={`${styles.bubble} ${isUser ? styles.user : styles.bot}`}>
      {message}
    </div>
  );
}
