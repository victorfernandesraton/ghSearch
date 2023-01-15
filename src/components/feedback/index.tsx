import styles from './style.module.scss'
type Props = {
	title?: string
	message: string
}

function Feedback({ message, title }: Props) {
	return (
		<div className={styles.container}>
			{title && (
				<h1 className={styles.title}>{title}</h1>
			)}
			<article className={styles.message}>
				{message}
			</article>
		</div>
	)
}

export default Feedback