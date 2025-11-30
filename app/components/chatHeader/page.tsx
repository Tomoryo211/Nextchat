import styles from './ChatHeader.module.scss';

export default function ChatHeader() {
    return (
        <header className={styles.header}>
        <div className={styles.backButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className={styles.userInfo}>
            <div className={styles.avatar}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#4CAF50"/>
                <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">AI</text>
            </svg>
            </div>
            <div className={styles.userName}>OpenAI Assistant</div>
        </div>
        <div className={styles.menuButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6" r="1.5" fill="white"/>
            <circle cx="12" cy="12" r="1.5" fill="white"/>
            <circle cx="12" cy="18" r="1.5" fill="white"/>
            </svg>
        </div>
        </header>
    );
}