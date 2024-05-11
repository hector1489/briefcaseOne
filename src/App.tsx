import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components'
import { Home } from './views'
import './App.css'


function App() {


  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
