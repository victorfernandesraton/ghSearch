import { UserInfoType } from "../../types";
import MetricsItem from "./metricsItem";
import styles from './style.module.scss'

type Props = UserInfoType

function UserInfo(props: Props) {

	const metrics = [
		{ title: "Repositories", total: props.repositories.totalCount },
		{ title: "Followers", total: props.followers.totalCount },
		{ title: "Following", total: props.following.totalCount },
		{ title: "Starred", total: props.starredRepositories.totalCount }
	]
	return (
		<article className={styles.container}>
			<div className={styles.info}>
				<div className={styles.imgContainter}>

					<img
						alt={`image for ${props.name ?? props.login}`}
						src={props.avatarUrl} />
				</div>
				<div className={styles.description}>
					<h1>{props.login}</h1>
					<p>{props.bio}</p>
					{props.company && (
						<p>Work in: <span>{props.company}</span></p>
					)}
					{props.email && (
						<p>Email <a
							target="_blank"
							href={`mailto:${props.email}`}>{props.email}</a></p>
					)}
					{props.location && (
						<p>Location: <span>{props.location}</span></p>
					)}
				</div>
			</div>
			<ul className={styles.metrics}>
				{metrics.map(item =>
					<MetricsItem key={`${props.id}/${item.title}`} {...{ ...item }} />
				)}
			</ul>
		</article>
	)
}

export default UserInfo;
