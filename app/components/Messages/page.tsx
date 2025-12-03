import styles from "./Messages.module.scss";
import MessageBubble from "../MessageBubble/page";

export default function Messages({ messages }: any) {
  return (
    <div className={styles.messages}>
      {messages.map((msg: any) => (
        <MessageBubble key={msg.id} message={msg.text} isUser={msg.isUser} />
      ))}
    </div>
  );
}
