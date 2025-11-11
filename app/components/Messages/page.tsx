import styles from "./Messages.module.scss";

interface Messageprops{
    role:string;
    text:string;
}

export default function Nextchat({role, text}: Messageprops){
    const isUser = role === "user";
    return(
        <>
        <div className={`${styles.message} ${isUser ? styles.user : styles.assistant}`}>
            <div className={styles.text}>{text}</div>
            <div className={styles.role}>{isUser ? "あなた" : "AI"}</div>
        </div>
        </>
    );
};