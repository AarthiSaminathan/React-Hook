import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Function1 from './Function1';
import ClassComponent from './ClassCopmponent';
import State from './State';
import StateChange from './StateChange';
import Props from './Props';
import Form from './Form';
import Form1 from './Form1';
import Form2 from './Form2';
import Event from './Event';
import SetState from './SetState';
import ForceUpdate from './ForceUpdate';
import LifeCycle from './LifeCycle';
import User from './User';
import Hello from './Component/Hello';
import Greet from './Component/Greet';
import Message from './Component/Message';
import ClassCounter from './Hooks/ClassCounter';
import FunctionCounter from './Hooks/FunctionCounter';
import UseEffect from './Hooks/UseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Function1/>
    <ClassComponent/>
    <State/>
    <StateChange/>
    <Props name="React Tutorial"/>
    <Form/>
    <Form1/>
    <Form2/>
    <Event/>
    <SetState/>
    <ForceUpdate/>
    <LifeCycle/>
    <User/>
    <Hello/>
    <Greet name="Aarthi" heroName="Wonder Woman">
      <p>This is children props.</p></Greet>
    <Greet name="Sandhiya" heroName="Wonder Woman">
     <button>Action</button> </Greet>
    <Greet name="Monica" heroName="Wonder Woman"/>
    <Message />
    <ClassCounter/>
<FunctionCounter/>*/}
    <UseEffect/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
