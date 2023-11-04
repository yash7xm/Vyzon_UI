import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'
import Playground from './Playground'
import Result from './Result'
import Doc from './Doc'
import Btns from './Btns'
import { useState } from 'react'
import fs from 'fs'

function App() {
  const [code, setCode] = useState('');

  const executeCode = () => {
    // const filePath = 'src/language/file.vy';
    // fs.writeFileSync(filePath, code);
    // console.log('Code written to file.vy');
    fetch('http://localhost:8080/execute-code', {
      method: 'POST',
      body: JSON.stringify({ code }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Code execution result:', result);
      })
      .catch((error) => {
        console.error('Error executing code:', error);
      });
  }

  return (
    <div className="container">
      <Header />
      {/* <InnerContainer $innerminwidth={removeMinWidth} ref={innerContainerRef}> */}
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
        {/* </InnerContainer> */}
      </div>
    </div>
  )
}

export default App
