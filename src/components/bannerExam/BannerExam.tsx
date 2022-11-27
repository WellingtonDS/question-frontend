import styles from './bannerExam.module.css';
import { Exam } from '../../services/api/tarefas/TarefasService';
import { QuizContext  } from '../../context/question';
import { useContext } from 'react';

export const BannerExam = (props: Exam) => {

  const [quizState, dispatch] = useContext(QuizContext);
  

  return (
    <div className={styles.banner}>
      <button className={styles.btnStart} onClick={() => dispatch({type: "CHANGE_STATE"})}>
        <img className={styles.loader} src={props.asset} alt="Node" />
        <div>
          <strong className={styles.title}> {props.title}</strong>
          <span className={styles.description}> {props.description} </span>
        </div>
      </button>
    </div>
  )
}