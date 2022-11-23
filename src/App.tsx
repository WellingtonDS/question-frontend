import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/base/footer/Footer';
import Header from './components/base/header/Header';
import { BannerExam } from './components/bannerExam/BannerExam';

interface Exam {
  id: string;
  title: string;
  asset: string;
  description: string;

}


function App() {

  // esse fetch busca a questao da prova em um arquivo json-serve
  const [exams, setGames] = useState<Exam[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/exams')
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      
      setGames(data)
      
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <main className="AppBody">
      <Routes>
        <Route path='/' element={exams.map( exam => {
          return (
            <BannerExam
            key={exam.id} 
            asset={exam.asset} 
            title={exam.title} 
            description={exam.description}/>
          )
        })}/>

      </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
