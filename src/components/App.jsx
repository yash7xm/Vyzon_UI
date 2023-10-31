import '../styles/App.css'
import Header from './Header'
import Main from './Main'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="inner-container">
        <Main />
      </div>
    </div>
  )
}

export default App
