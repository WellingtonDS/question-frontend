import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/base/footer/Footer';
import Header from './components/base/header/Header';
import Home from './components/home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <main className="AppBody">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
