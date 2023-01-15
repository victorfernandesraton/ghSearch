import styles from "./style.module.scss"

type Props = {
	onChange: (value: string) => void
}

function SearchInput({
	onChange,
}: Props) {
	return (
		<div className={styles.container}>
			<input type={"text"} className={styles.inpt}
				onChange={(e) => {
					onChange(e.target.value)
				}}
			/>
			<button type="submit"className={styles.btn}>Search</button>
		</div>
	)
}

export default SearchInput