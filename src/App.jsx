import './App.css'
//import { List } from './components/List'
// { Button } from './components/Button'
//import { WapperList } from './components/WrapperList'
//import { RandomComponent } from './components/RandomComponent';
import { CompWithProps } from './components/CompWithProps'

function App() {

  return (
    <>
      <div className="App">
        <h1>HOLA DESDE VITE</h1>
        <CompWithProps title="Count : 13" />
      </div>
    </>
  )
}

export default App
