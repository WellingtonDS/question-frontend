import { Exam, QuestionTask } from './services/api/tarefas/TarefasService';
import { ApiException } from './services/api/ApiException';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/base/footer/Footer';
import Header from './components/base/header/Header';
import { BannerExam } from './components/bannerExam/BannerExam';

function App() {
  //busca a  prova no json-serve e mostra na tela atraves de interface
  const [exams, setQuestion] = useState<Exam[]>([]);  
  useEffect(() => {
    QuestionTask.getExam()
    .then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setQuestion(result);
      }
    });
}, []);

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
