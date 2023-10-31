import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'
import Playground from './Playground'
import Result from './Result'
import Theme from './Theme'

function App() {
  return (
    <div className="container">
      <Header />
      <Theme />
      <div className="inner-container">
        <Main />
        <Label heading={'Playground'} />
        <Playground />
        <Label heading={'Result'} />
        <Result />
        <Label heading={'Documentation'} />
      </div>
    </div>
  )
}

export default App
