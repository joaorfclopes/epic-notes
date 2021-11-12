import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Notes.module.css'
import { Note } from '../../utils/types'

interface Props {
  notes: Array<Note>
}

export default function Notes(props: Props) {
  return (
    <div className={`${styles.grid} page`}>
      {props.notes?.map((note) => (
        <Link key={note._id} href={`/notes/${note._id}`} passHref>
          <div className={styles.element}>
            <h2 className={styles.element_title}>{note.title}</h2>
            <br />
            <div className={styles.element_description}>{note.description}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
