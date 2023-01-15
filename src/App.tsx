import SearchInput from './components/searchInput'
import { Helmet } from "react-helmet";

import "./theme.scss"
import styles from "./App.module.scss"
import UserInfo from './components/userInfo'
import RepositoryItem from './components/repositoryItem'
import { useLazyQuery } from '@apollo/client'
import { USER_QUERY } from './query/user'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDebounce } from './hooks/debounce'
import { RepositoryType } from './types'


function App() {

	const [query, setQuery] = useState<string>("victorfernandesraton");

	const onChangeText = useCallback((text: string = "") => {
		setQuery(text);
	}, [])

	const debounceText = useDebounce(query, 500)

	const [fetchUserInfoQuery, { data: userInfoData, loading: loadingUserInfo, error, called }] = useLazyQuery(USER_QUERY)

	const userInfo = useMemo(() => userInfoData?.search?.nodes?.[0], [userInfoData])
	const repositories = useMemo(() => userInfo?.repositories?.edges ?? [], [userInfo])

	const onSubmitQuery = useCallback((query?: string) => {
		if (!loadingUserInfo && debounceText && (query?.length && query?.length > 2)) {
			fetchUserInfoQuery({
				variables: {
					username: query
				}
			})
		}
	}, [loadingUserInfo, debounceText])



	useEffect(() => {
		onSubmitQuery(query)
	}, [query])

	return (
		<div className="App">
			<Helmet>
				<title>ghSerch</title>
				<meta charSet="UTF-8" />
				<link rel="icon" type="image/svg+xml" href="/icon.svg" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Helmet>
			<main>
				<div className={styles.container}>
					<SearchInput
						onSubmit={() => {
							onSubmitQuery(query)
						}}
						onChange={onChangeText}
					/>
					{called && userInfo && (
						<UserInfo
							{...{ ...userInfo }}
						/>
					)}
					{repositories.map((item: { node: RepositoryType }) =>
						<RepositoryItem key={item.node.id} {...{ ...item.node }} />
					)}
				</div>
			</main>
		</div>
	)
}

export default App
