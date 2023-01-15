import { TotalCount } from "../../types";
import styles from './style.module.scss'
type Props = {
	loading: boolean
	id: string;
	email: string;
	login: string;
	avatarUrl: string;
	url: string;
	createdAt: Date;
	starredRepositories: TotalCount;
	followers: TotalCount;
	following: TotalCount;
	gistComments: TotalCount;
	bio?: string;
	bioHTML?: string;
	company?: string;
	name?: string;
	websiteUrl?: string;
	twitterUsername?: string;
	location?: string;
};

function UserInfo(props: Props) {
	if (props.loading) {
		return <h1>Loading...</h1>
	}
	return (
		<article className={styles.container}>
			<div className={styles.info}>
				<img src={props.avatarUrl} />
				<div className={styles.description}>
					<h1>{props.login}</h1>
					<p>{props.bio}</p>
					{props.company && (
						<p>Work in: <span>{props.company}</span></p>
					)}
				</div>
			</div>
			<div className={styles.metrics}>
				<p>Stars: <span>{props.starredRepositories.totalCount}</span></p>
				<p>Followers: <span>{props.followers.totalCount}</span></p>
				<p>following: <span>{props.following.totalCount}</span></p>
			</div>
		</article>
	)
}

export default UserInfo;
