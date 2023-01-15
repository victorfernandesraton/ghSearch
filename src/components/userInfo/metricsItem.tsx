import styles from "./style.module.scss"

type Props = {
	title: string
	total: number
}

function MetricsItem({
	title, total
}: Props) {
	return (
		<li className={styles.metricsItem}>
			<p>{title} <span>{total}</span></p>
		</li>
	)
}

export default MetricsItem