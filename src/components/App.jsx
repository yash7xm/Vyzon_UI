import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'
import Playground from './Playground'
import Result from './Result'
import Doc from './Doc'
import Btns from './Btns'

function App() {
  return (
    <div className="container">
      <Header />
      {/* <InnerContainer $innerminwidth={removeMinWidth} ref={innerContainerRef}> */}
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
        {/* </InnerContainer> */}
      </div>
    </div>
  )
}

export default App
