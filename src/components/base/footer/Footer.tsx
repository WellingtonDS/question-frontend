/* estilizacao global do Footer*/

import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>&copy; Todos os direitos reservados { new Date().getFullYear() }</span>
    </footer>
  )
}

export default Footer