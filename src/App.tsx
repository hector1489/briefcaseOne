import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components'
import { Home, LoginPage, UserAccount } from './views'
import './App.css'


function App() {


  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="/profile" element={<UserAccount />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
