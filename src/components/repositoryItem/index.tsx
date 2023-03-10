import { RepositoryType, TotalCount } from '../../types'
import MetricsItem from '../userInfo/metricsItem'
import styles from './style.module.scss'




function RepositoryItem({
	id,
	name,
	description,
	stargazers,
	url,
	watchers,
	languages,
	issues
}: RepositoryType) {
	const metrics = [
		{ title: "Stargazers", total: stargazers.totalCount },
		{ title: "Watchers", total: watchers.totalCount },
		{ title: "Issues", total: issues.totalCount }
	]

	const languagesText = languages.edges.map(item => item.node.name)
	return (
		<section id={id} className={styles.container}>
			<a href={url} target="_blank">{name}</a>
			{description && (
				<p>{description}</p>
			)}
			{languages.totalCount > 0 && (
				<div className={styles.languages}>
					<p>Languages:
						<span>
							{" "}{languagesText.join(", ")}
						</span>
						{languages.totalCount > 3 && (
							<span className={styles.more}> and +{languages.totalCount - 3} mre</span>
						)}
					</p>
				</div>
			)}
			<ul className={styles.metrics}>
				{metrics.map(item =>
					<MetricsItem key={`${id}/${item.title}`} {...{ ...item }} />
				)}
			</ul>

		</section>
	)
}

export default RepositoryItem