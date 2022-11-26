// interface do exame antes de abrir a prova.
// import { useContext } from 'react';
// import { QuestionContext } from '../../context/question';
import styles from './bannerExam.module.css';

// interface BannerExamProps {
//   title: string;
//   description: string;
//   asset: string;
// }

export function BannerExam(props: BannerExamProps) {

  // const [questionState, dispatch] = useContext(QuestionContext);
  return (
    <div className={styles.banner}>
      <a href="">
        <img className={styles.loader} src={props.asset} alt="Node" />
        <div>
          <strong className={styles.title}> {props.title}</strong>
          <span className={styles.description}> {props.description} </span>
        </div>
      </a>
    </div>
  )
}