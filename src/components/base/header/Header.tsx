/* estilizacao global do header*/

import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header} >
      <nav className={`${styles.nav} container`}>
        <Link className={styles.home} to='/' aria-label='Home'>
        </Link>
        <Link className={`${styles.login} btn`} to='/'>Criar / Login</Link>
      </nav>
    </div>
  )
}

export default Header