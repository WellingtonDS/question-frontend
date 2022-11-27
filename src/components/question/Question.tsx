// interface do exame antes de abrir a prova.

import styles from './Question.module.css';



interface QuestionExamProps {
    description: string;
}

export function QuestionProps(props: QuestionExamProps) {

  return (
    <div className={styles.question}>
        <p>Pergunta</p>
        <h2>{props.description}</h2>
        <div id='options-container'>
            <p className='options'>opções</p>
        </div>
    </div>
  )
}