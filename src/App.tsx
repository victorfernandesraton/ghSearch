import SearchInput from './components/searchInput'
import "./theme.scss"
import styles from "./App.module.scss"
import UserInfo from './components/userInfo'
import data from "./mock.json"
function App() {

  return (
    <div className="App">
      <main>
       <div className={styles.container}>
        <SearchInput />
        <UserInfo {...{...data.data.search.nodes[0]}}/>
       </div>
      </main>
    </div>
  )
}

export default App
