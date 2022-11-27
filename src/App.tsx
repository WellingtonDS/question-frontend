import { Exam, Questions, QuestionTask } from './services/api/tarefas/TarefasService';
import { ApiException } from './services/api/ApiException';
import { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import './App.css'
import Footer from './components/base/footer/Footer';
import Header from './components/base/header/Header';
import { BannerExam, Question } from './components';
import { QuizContext } from './context/question';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  //busca a  prova no json-serve e mostra na tela atraves de interface
  const [exams, setExam] = useState<Exam[]>([]);  
  useEffect(() => {
    QuestionTask.getExam()
    .then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setExam(result);
      }
    });
}, []);

// BUSCA AS PERGUNTAS

const [questions, setQuestion] = useState<Questions[]>([]);  
  useEffect(() => {
    QuestionTask.getQuestion()
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
      <Switch>
      <Route path='/' element={quizState.startQuestion === "START" && exams.map( exam => {
        return (
          <BannerExam
          key={exam.id} 
          asset={exam.asset} 
          title={exam.title} 
          description={exam.description}/>
        )
      })}/>

      </Switch>
      {quizState.startQuestion === "RESPONDING"  && questions.map( question => {

          return (
            <Question
            key={question.id}
            id={question.id}
            description={question.description}/>
          )
        })}

        {quizState.startQuestion === "FINISHED"  && questions.map( question => {
          return (
            <Question
            key={question.id}
            description={question.description}/>
          )
        })}

      </main>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
