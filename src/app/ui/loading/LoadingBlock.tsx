import styles from "./loading.module.css"
const LoadingBlock = () => {
  return (
    <div className={styles.loadingBlock}>
      <svg
        className={styles.loadingIcon}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" />
      </svg>
      <div className={styles.loadingText}>Loading...</div>
    </div>
  )
}

export default LoadingBlock
