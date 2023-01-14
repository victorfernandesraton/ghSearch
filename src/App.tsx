import SearchInput from './components/SearchInput'
import "./theme.scss"
import styles from "./App.module.scss"
function App() {

  return (
    <div className="App">
      <main>
       <div className={styles.container}>
        <SearchInput />
       </div>
      </main>
    </div>
  )
}

export default App
