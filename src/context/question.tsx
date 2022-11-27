import {createContext, useReducer } from 'react';

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
            console.log("teste");
            return {
                ...state,
            }; 

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let finished = false;

            if ([nextQuestion]) {
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
