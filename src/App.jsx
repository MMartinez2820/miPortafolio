import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { HashRouter, Route, Routes,  } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
    <Routes>
        
        <Route path="/" element={<Home/>} />
        {/* <Route path="/proyects" element={<Proyects/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/proyectslinda' element={<ProyectsLinda/>} /> */}
      </Routes>
     
    </HashRouter>
    </>
  )
}

export default App;
