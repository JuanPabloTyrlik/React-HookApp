import React from 'react';
import ReactDOM from 'react-dom';
// import CounterApp from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import SimpleForm from './components/02-useEffect/SimpleForm';
// import FormWithCustomHooks from './components/02-useEffect/FormWithCustomHooks';
// import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
// import FocusScreen from './components/04-useRef/FocusScreen';
// import HooksApp from './HooksApp';
import './components/02-useEffect/effects.css';
// import Memorize from './components/06-Memo/Memorize';
import MemoHook from './components/06-Memo/MemoHook';
// import RealExampleRef from './components/04-useRef/RealExampleRef';
// import Layout from './components/05-useLayoutEffect/Layout';

ReactDOM.render(<MemoHook />, document.getElementById('root'));
