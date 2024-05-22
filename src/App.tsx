import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, LoginPage, UserAccount } from './views'
import { DataProvider } from './context/context'
import './App.css'


function App() {


  return (
    <DataProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/profile" element={<UserAccount />} />
        </Routes>

      </BrowserRouter>
    </DataProvider>
  )
}

export default App
