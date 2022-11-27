import { ApiException } from "../ApiException";
import { Api } from "../ApiConfig";

// Aqui é criada as interfaces de acordo com o arquivo json
export interface Exam {
  id: number;
  title: string;
  asset: string;
  description: string;
}

export interface Questions {
  id: number;
  examId: number;
  description: string;
  orderNumber: number;
}

export interface Alternatives {
  id: number;
  questionId: number;
  description: string;
  isCorrect: boolean;
}

/* Aqui são definidos as rotas que buscarão os dados do json-serve, caso dê erro na busca a aplicação
 retorna erro 404 se a rota tiver errada ou uma promisse de mensagem de erro quando não acha o objeto. 

*/
const getExam = async (): Promise<Exam[] | ApiException> => {
  try {
    const { data } = await Api().get('/exams');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar a questão.');
  }
};

const getQuestion = async (): Promise<Questions[] | ApiException> => {
  try {
    const { data } = await Api().get('/questions');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar pergunta.');
  }
};

const getAlternatives = async (): Promise<Alternatives[] | ApiException> => {
  try {
    const { data } = await Api().get('/alternatives');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar alternativas.');
  }
};

// Aqui é exportada as funcions das rotas.
export const QuestionTask = {
  getExam,
  getQuestion,
  getAlternatives,
 
};
