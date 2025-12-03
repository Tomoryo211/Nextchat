// ヘッダー：画面上部の緑のバー（戻るボタン、AIアバター、名前を表示）
import styles from './ChatHeader.module.scss';

export default function ChatHeader() {
  return (
    <header className={styles.header}>
      {/* 戻るボタン（装飾用） */}
      <div className={styles.backButton}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* AIの情報表示エリア */}
      <div className={styles.userInfo}>
        {/* AIアバター */}
        <div className={styles.avatar}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#4CAF50"/>
            <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">🎯</text>
          </svg>
        </div>
        {/* AI名前 */}
        <div className={styles.userName}>クイズマスター</div>
      </div>
      
      {/* メニューボタン（装飾用） */}
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