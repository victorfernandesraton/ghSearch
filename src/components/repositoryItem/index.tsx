
import { TotalCount } from '../../types'

type Props = {
	id: string,
	name: string,
	url: string
	watchers: TotalCount
	stargazers: TotalCount
}

function RepositoryItem({
	id,
	name,
	stargazers,
	url,
	watchers,
}: Props) {
	return (
		<div id={id}>
			<h3>{name}</h3>
			<p>{url}</p>
			<p>Stars <span>{stargazers.totalCount}</span></p>
			<p>Watchers <span>{watchers.totalCount}</span></p>
		</div>
	)
}

export default RepositoryItem