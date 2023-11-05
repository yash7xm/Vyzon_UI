import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'
import Playground from './Playground'
import Result from './Result'
import Doc from './Doc'
import Btns from './Btns'
import { useState } from 'react'
import { execute } from '../language/run.js'

function App() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const executeCode = async () => {
    try {
      const result = execute(code);
      setResult(result);
      console.log(result);
    } catch (error) {
      // Handle the error here, you can log it or display an error message.
      console.error("An error occurred:", error);
      setResult(error);
    }
  };
  

  return (
    <div className="container">
      <Header />
      <div className="inner-container">
        <Main />
        <div className='btn-sec'>
          <Label heading={'Playground'} />
          <Btns onRunClick={executeCode} />
        </div>
        <Playground onCodeChange={setCode} />
        <Label heading={'Result'} />
        <Result res= {result}/>
        <Label heading={'Documentation'} />
        <Doc />
      </div>
    </div>
  )
}

export default App
