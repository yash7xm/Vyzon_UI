import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'
import Playground from './Playground'
import Result from './Result'
import Theme from './Theme'
import Doc from './Doc'
import Btns from './Btns'
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: ${props => (props.$innerminwidth ? '100%' : '750px')};
  margin-top: 3rem;
  min-width: ${props => (props.$innerminwidth ? 'auto' : '750px')};
`;

function App() {
  const [removeMinWidth, setRemoveMinWidth] = useState(false);
  const innerContainerRef = useRef();

  useEffect(() => {
    function handleResize() {
      const containerWidth = window.innerWidth;
      const innerContainerWidth = innerContainerRef.current.clientWidth;

      if (containerWidth === innerContainerWidth) {
        setRemoveMinWidth(true);
      } else {
        setRemoveMinWidth(false);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      <Header />
      <Theme />
      <InnerContainer $innerminwidth={removeMinWidth} ref={innerContainerRef}>
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
      </InnerContainer>
    </div>
  )
}

export default App
