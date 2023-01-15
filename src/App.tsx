import { useLazyQuery } from '@apollo/client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Helmet } from "react-helmet";

import styles from "./App.module.scss";
import Content from './components/content';
import SearchInput from './components/searchInput';

import { USER_QUERY } from './query/user';

import "./theme.scss";


function App() {

	const [query, setQuery] = useState<string>();

	const onChangeText = useCallback((text: string = "") => {
		setQuery(text);
	}, [])


	const [fetchUserInfoQuery, { data: userInfoData, loading: loadingUserInfo, error, called: calledUserInfo }] = useLazyQuery(USER_QUERY)

	const userInfo = useMemo(() => userInfoData?.search?.nodes?.[0], [userInfoData])
	const repositories = useMemo(() => userInfo?.repositories?.edges ?? [], [userInfo])
	const called = useMemo(() => {
		if (query && query.length == 0) {
			return false;
		}
		return calledUserInfo
	}, [query, calledUserInfo])

	const onSubmitQuery = useCallback((query?: string) => {
		if (!loadingUserInfo && (query?.length && query?.length > 2)) {
			fetchUserInfoQuery({
				variables: {
					username: query
				}
			})
		}
	}, [loadingUserInfo])

	useEffect(() => {
		setTimeout(() => {
			onSubmitQuery(query)
		}, 1000);
	}, [query])

	return (
		<div className="App">
			<Helmet>
				<title>ghSerch</title>
				<meta charSet="UTF-8" />
				<link rel="icon" type="image/svg+xml" href="/icon.svg" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Search about github users and repositories" />
			</Helmet>
			<main>
				<div className={styles.container}>
					<SearchInput
						onSubmit={() => {
							console.log("teste")
							onSubmitQuery(query)
						}}
						onChange={onChangeText}
					/>
					<Content
						called={called}
						loading={loadingUserInfo}
						error={error} repositories={repositories}
						user={userInfo}
					/>
				</div>
			</main>
		</div>
	)
}

export default App
