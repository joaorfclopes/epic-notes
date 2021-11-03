import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.element}>
          <Image src="/note.svg" width="40px" height="40px" />
        </div>
        <div className={styles.element}>Right</div>
      </div>
    </div>
  )
}
