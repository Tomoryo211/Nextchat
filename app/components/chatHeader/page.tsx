import styles from "./ChatHeader.module.scss";

export default function ChatHeader({ title }: { title: string }) {
    return <div className={styles.header}>{title}</div>;
}
