/* estilizacao da tela de home*/
import { useContext } from 'react';
import styles from './Home.module.css';

const Home = () => {
  // destruturando para obter nome do state a ser consumido atraves do reducer.
  

  return (
    <div className={styles.home}>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para iniciar o teste:</p>
      <button className='btn' >Iniciar teste</button>
    </div>
  )
}

export default Home