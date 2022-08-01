import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CounterWithCustomeHook } from './01-useState/CounterWithCustomeHook'
import { CounterApp } from './01-useState/CounterApp'
import { FormWithCustomeHook } from './02-useEffect/FormWithCustomeHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomeHooks } from './03-examples/MultipleCustomeHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { CallbackHook } from './06-memo/CallbackHook'
import { MemoHook } from './06-memo/MemoHook'
import { Memorize } from './06-memo/Memorize'
import { Padre } from './07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'
//import './08-useReducer/intro-reducer'
//import { TodoApp } from './08-useReducer/TodoApp'

import './index.css'
import { MainApp } from './09-useContext/MainApp'

 ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <React.StrictMode>
    <MainApp/> 
    </React.StrictMode>
    </BrowserRouter> 
  
)