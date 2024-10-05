import './App.css'
import { List } from './components/List'
//import { Button } from './components/Button'
import { WapperList } from './components/WrapperList'

function App() {

  //const buttonText = "Count : ";
  //<h1>LABORATORIO 4</h1>
  //<Button text={buttonText}/>

  return (
    <>
      <WapperList>
        <ul>
          <li> Pan </li>
          <li> Queso </li>
          <li> Mantequilla </li>
        </ul>  
      </WapperList>
    </>
  )
}

export default App
