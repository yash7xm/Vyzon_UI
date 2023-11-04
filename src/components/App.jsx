import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'
import Playground from './Playground'
import Result from './Result'
import Doc from './Doc'
import Btns from './Btns'
import { useState } from 'react'

function App() {
  const [code, setCode] = useState('');

  const executeCode = async () => {
    try {
      const response = await fetch('http://localhost:8080/execute-code', {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log(await response.json());
      } else {
        console.error('Error executing code:', await response.text());
      }
    } catch (error) {
      console.error('Error executing code:', error);
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
        <Result />
        <Label heading={'Documentation'} />
        <Doc />
      </div>
    </div>
  )
}

export default App
