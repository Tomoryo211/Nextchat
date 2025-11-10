
import styles from "./chatHeader.module.scss";

export default function Chatheader () {
    return(
        <>
        <header className={styles.header}>
            <h1 className={styles.title}>Nextchat</h1>
        </header>
        </>
    );
}