import MessageBubble from "../MessageBubble/page";
import styles from "./Messages.module.scss";

export default function Messages({ messages }) {
  return (
    <div className={styles.messages}>
      {messages.map((msg, index) => (
        <MessageBubble 
          key={index}
          content={msg.content}
          isUser={msg.role === "user"}
        />
      ))}
    </div>
  );
}
