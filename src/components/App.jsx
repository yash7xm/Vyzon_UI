import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="inner-container">
        <Main />
        <Label heading={'Playground'} />
      </div>
    </div>
  )
}

export default App
