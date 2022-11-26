import {createContext, useReducer, useEffect, useState } from 'react';
import { question } from '../API';
// import questions from '../data/question';

// estagio de interacao com as questoes.
const STAGES = ["Start", "Responding", "End"];

//Uma enumeração com todos os tipos de ações para usar em nosso redutor
enum CountActionKind {
    START = 'CHANGE_STATE',
    RESPONDING = 'REORDER_QUESTION',
  }

// define estado inicial da aplicacao
const initialState = {
    testStart: STAGES[0],
    currentQuestion: 0
}

interface Exam {
    id: string;
    title: string;
    asset: string;
    description: string;

}

const [questions, setQuestion] = useState<Exam[]>([]);  
  useEffect(() => {
    fetch(question)
    .then(response => response.json())
    .then(data =>{
        console.log(data, "data");
        
      setQuestion(data)
    })
  }, [])

// para alterar o estado da aplicacao
const questionReducer = (state: any, action: any) =>  {
    console.log(state, action);
    switch (action.type) {
        case CountActionKind.START:
            return {
                ...state,
                testStart: STAGES[1],
            };

        case CountActionKind.RESPONDING:
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: reorderedQuestions,
            }; 

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let finished = false;

            if (!questions[nextQuestion]) {
                finished = true;
            }
            return {
                ...state,
                currentQuestion: nextQuestion,
                testStart: finished ? STAGES[2] : state.testStart,
             }   
    
        default:
            return state;
    }
};

export const QuestionContext = createContext<any>(null);

/* usando provider para prover o contexto da aplicação */
export const QuestionProvider = ({children}: any) => {    //usando o children para usar componentes dentro de outros components de forma emcapsulada.
    const value = useReducer(questionReducer, initialState);
    return <QuestionContext.Provider value={value} >{children}</QuestionContext.Provider>
};
