import React from 'react'
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.element}>Left</div>
        <div className={styles.element}>Right</div>
      </div>
    </div>
  )
}
