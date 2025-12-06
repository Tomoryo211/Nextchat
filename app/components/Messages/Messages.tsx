import MessageBubble from "../MessageBubble/MessaagesBubble";
import styles from "./Messages.module.scss";

export default function Messages({ messages }) {
  return (
    <div className={styles.messages}>
      {messages.map(msg => (
        <MessageBubble key={msg.id} text={msg.text} isUser={msg.isUser} />
      ))}
    </div>
  );
}
