import SearchInput from './components/searchInput'
import "./theme.scss"
import styles from "./App.module.scss"
import UserInfo from './components/userInfo'
import data from "./mock.json"
import RepositoryItem from './components/repositoryItem'
function App() {

	return (
		<div className="App">
			<main>
				<div className={styles.container}>
					<SearchInput />
					<UserInfo {...{ ...data.data.search.nodes[0] }} />
					{data.data.search.nodes[0].repositories.edges.map(item =>
						<RepositoryItem key={item.node.id} {...{ ...item.node }} />
					)}
				</div>
			</main>
		</div>
	)
}

export default App
