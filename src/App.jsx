import { useState } from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import Home from './assets/components/MainPage/Home.jsx'
import Siparis from './assets/components/Siparis/Siparis'
import Onay from './assets/components/Onay/Onay'
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/siparis">Siparis</Link>
      <Link to="/onay">Onay</Link>
    </nav>
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/siparis" component={Siparis}/>
        <Route path="/onay" component={Onay} />
        <Route path="*" component={Error}/>    
    </Switch>
        </>
  )
}

export default App
