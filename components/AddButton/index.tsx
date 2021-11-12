import Link from 'next/link'
import React from 'react'
import Add from '../../icons/Add'
import styles from '../../styles/AddButton.module.css'

export default function AddButton() {
  return (
    <Link href="/notes/create" passHref>
      <div className={styles.add}>
        <Add />
      </div>
    </Link>
  )
}
