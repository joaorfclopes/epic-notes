import React from 'react'
import Logo from '../../icons/Logo'
import styles from '../../styles/Navbar.module.css'
import Toggler from '../Toggler'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={(styles.element, styles.logo_container)}>
          <Logo />
        </div>
        <div className={styles.element}>
          <Toggler />
        </div>
      </div>
    </div>
  )
}
