import React, { FC, useState, useCallback, MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';

// optimisation: use React.memo
const Comp1: FC<{ onClick: (event: MouseEvent) => void }> = ({ onClick }) => {
  console.log('RENDERING <Comp1>', new Date());
  return <div onClick={onClick}>THIS IS COMP1</div>;
};

let oldHandler: any = null;

const App: React.FC = () => {
  console.log('RENDERING <App>', new Date());

  const [x, setX] = useState(111);

  let handler = () => {
    setX((v: number) => v + 1);
    console.log('CLICKED!');
  };

  // optimisation: wrap in useCallback
  //handler = useCallback(handler, []);

  console.log('New handler instance used:', oldHandler !== handler);
  oldHandler = handler;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>x = {x}</div>
        <div>
          <Comp1 onClick={handler} />
        </div>
      </header>
    </div>
  );
};

export default App;

if (0) console.log(oldHandler, useCallback);
