import SearchInput from './components/searchInput'
import "./theme.scss"
import styles from "./App.module.scss"
import UserInfo from './components/userInfo'
import RepositoryItem from './components/repositoryItem'
import { useLazyQuery } from '@apollo/client'
import { USER_QUERY } from './query/user'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDebounce } from './hooks/debounce'
function App() {

	const [query, setQuery] = useState<string>();

	const onChangeText = useCallback((text: string = "") => {
		setQuery(text);
	}, [])

	const debounceText = useDebounce(query, 500)

	const [fetchUserInfoQuery, { data: userInfoData, loading: loadingUserInfo, error, called }] = useLazyQuery(USER_QUERY)

	const userInfo = useMemo(() => userInfoData?.search?.nodes?.[0], [userInfoData])
	const repositories = useMemo(() => userInfo?.repositories?.edges ?? [] , [userInfo])
	useEffect(() => {
		if (query?.length > 2 && !loadingUserInfo && debounceText)
			fetchUserInfoQuery({
				variables: {
					username: query
				}
			})
	}, [query])

	console.log(userInfo?.repositories?.edges)

	return (
		<div className="App">
			<main>
				<div className={styles.container}>
					<SearchInput
						onChange={onChangeText}
					/>
					{called && userInfo && (
						<UserInfo
							loading={loadingUserInfo}
							{...{ ...userInfo }}
						/>
					)}
					{repositories.map(item =>
						<RepositoryItem key={item.node.id} {...{ ...item.node }} />
					)}
				</div>
			</main>
		</div>
	)
}

export default App
