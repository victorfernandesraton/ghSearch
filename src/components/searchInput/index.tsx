import styles from "./style.module.scss"

type Props = {
	onChange: (value: string) => void
	onSubmit: () => void
}

function SearchInput({
	onChange,
	onSubmit
}: Props) {
	return (
		<div className={styles.container}>
			<input type={"text"} className={styles.inpt}
				onChange={(e) => {
					onChange(e.target.value)
				}}
				placeholder="Please type text to select"
			/>
			<button
				onClick={() => { onSubmit() }}
				type="submit" className={styles.btn}>Search</button>
		</div>
	)
}

export default SearchInput