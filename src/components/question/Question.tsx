// interface do exame antes de abrir a prova.

import styles from './Question.module.css';
import { Questions } from '../../services/api/tarefas/TarefasService';

export const Question = (props: Questions) => {

  return (
    <div className={styles.question}>
        <span className={styles.spnGradient}>Pergunta: {props.id} </span>
        <h2>{props.description}</h2>
        <div id='options-container'>
            <p className='options'>opções</p>
        </div>
    </div>
  )
}