import styles from "./style.module.scss"

function SearchInput() {
  return (
    <div className={styles.container}>
      <input type={"text"} className={styles.inpt} />
      <button className={styles.btn}>Search</button>
    </div>
  )
}

export default SearchInput