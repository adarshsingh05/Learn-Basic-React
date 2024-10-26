import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleValue from './SingleProp'
import Die from './MutlivalueProp'

function App() {

  return (<>
    <SingleValue person={'Adarsh'} from={'Sameer'}/>
    {/* putting the numerical valur under curly braces */}
    <Die numSide={20}/>
    </>
  )
}

export default App
