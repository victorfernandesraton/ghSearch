import { useMemo } from 'react'
import { RepositoryType, UserInfoType } from '../../types'
import Feedback from '../feedback'
import RepositoryItem from '../repositoryItem'
import UserInfo from '../userInfo'
import { switchContent } from './utils'
import styles from './style.module.scss'
type Props = {
	called?: boolean
	loading: boolean
	user?: UserInfoType
	repositories: {
		node: RepositoryType
	}[],
	error?: Error
}

function Content({
	loading,
	error,
	user,
	called = false,
	repositories = []
}: Props) {
	const { title, message, } = useMemo(() => {
		const data = switchContent({
			isCalled: called,
			isLoading: loading,
			NotFound: !user?.id,
			error: error,
		})
		if (data) {
			return { ...data }
		}
		return { title: undefined, message: undefined, error: undefined }

	}, [called, loading, error, user])


	if (title && message) {
		return <Feedback title={title} message={message} />
	}

	return (
		<div className={styles.container}>
			{called && user && (
				<UserInfo
					{...{ ...user }}
				/>
			)}
			{repositories.map((item: { node: RepositoryType }) =>
				<RepositoryItem key={item.node.id} {...{ ...item.node }} />
			)}
		</div>
	)
}

export default Content