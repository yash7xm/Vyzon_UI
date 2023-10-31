import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'
import Playground from './Playground'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="inner-container">
        <Main />
        <Label heading={'Playground'} />
        <Playground />
        <Label heading={'Result'} />
      </div>
    </div>
  )
}

export default App
