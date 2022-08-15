import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SimpleModal1 } from './components/SimpleModal1';
import { SimpleModal2 } from './components/SimpleModal2';
import { SimpleModal3 } from './components/SimpleModal3';
import { SimpleModal4 } from './components/SimpleModal4';


const SomeFunction = () => {

  const [value, setValue] = useState(1);
  
  return <div>
    {value}

    <button onClick = {() => setValue(value+1)}>Click to increment</button>

  </div>



}

function App() {


  const [value, setValue] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <SimpleModal1 buttonText='Click to open SimpleModal1'>
          I am SimpleModal1's content
        </SimpleModal1>

        <SimpleModal2 buttonText='Click to open SimpleModal1'
          renderButton={(onClick) => {
            return <button onClick={onClick} style={{
              border: "solid 1px red",
              width: 100,
              height: 100
            }}
            >Click to open SimpleModal2</button>
          }}

        >
          I am SimpleModal2's content
        </SimpleModal2>


        <SimpleModal3 buttonText='Click to open SimpleModal3' renderContent={(closeModalFn) => {
          return <div>

            I am SimpleModal3's content. 

            <button onClick={closeModalFn}> click me to close</button>
          </div>
        }} />

        <SimpleModal3 buttonText='Click to open SimpleModal3 problem example (apparently not a problem!)' renderContent={(closeModalFn) => {
          return <div>

            I am SimpleModal3's content. 
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={closeModalFn}> click me to close</button>
          </div>
        }} />

        <SimpleModal4 buttonText='Click to open SimpleModal4 problem example (this is a problem!)' ModalContent={({closeModalFn}) => {
          return <div>

            I am SimpleModal4's content. 
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={closeModalFn}> click me to close</button>
          </div>
        }} />


        <SimpleModal3 buttonText='Simple Modal 3 - but my content has a hook (I will error)' renderContent={SomeFunction} />
      </header>
    </div>
  );
}

export default App;
