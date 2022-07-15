import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterWithCustomeHook } from './01-useState/CounterWithCustomeHook'
import { FormWithCustomeHook } from './02-useEffect/FormWithCustomeHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomeHooks } from './03-examples/MultipleCustomeHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { CallbackHook } from './06-memo/CallbackHook'
import { MemoHook } from './06-memo/MemoHook'
import { Memorize } from './06-memo/Memorize'
import { Padre } from './07-tarea-memo/Padre'
import { CounterApp } from './01-useState/CounterApp'
import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomeHook/>
    <FormWithCustomeHook />
    <MultipleCustomeHooks/>
    <FocusScreen/>
    <SimpleForm/>
    <Layout/>
    <CallbackHook />
    <MemoHook/>
    <Memorize/>
    <CounterApp/>
    <Padre/>
    <HooksApp/>
  </React.StrictMode>
)
