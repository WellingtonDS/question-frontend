import React, { createContext, useReducer } from 'react';

const STAGES = ["START", "RESPONDING", "FINISHED"]

const initialState = {
    startQuestion: STAGES[0],
    currentQuestion: 0
}

const quizReducer = (state: any, action: any) => {
    console.log(state, action);
    switch (action.type) {
        case "CHANGE_STATE":

           return {
            startQuestion:  STAGES[1],
           };
    
        default:
            return state;
    }
    
}

export const QuizContext = createContext<any>({});

interface QuizProviderProps {
    children: React.ReactNode
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children}) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}