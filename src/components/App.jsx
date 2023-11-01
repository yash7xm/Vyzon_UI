import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'
import Playground from './Playground'
import Result from './Result'
import Theme from './Theme'
import Doc from './Doc'
import Btns from './Btns'

function App() {
  return (
    <div className="container">
      <Header />
      <Theme />
      <div className="inner-container">
        <Main />
        <div className='btn-sec'>
          <Label heading={'Playground'} />
          <Btns />
        </div>
        <Playground />
        <Label heading={'Result'} />
        <Result />
        <Label heading={'Documentation'} />
        <Doc />
      </div>
    </div>
  )
}

export default App
