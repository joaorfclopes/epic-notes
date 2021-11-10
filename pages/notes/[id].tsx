import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEventHandler, useRef, useState } from 'react'
import Modal from '../../components/Modal'
import buttonStyles from '../../styles/Button.module.css'
import inputStyles from '../../styles/Input.module.css'
import { Note } from '../../utils/types'

interface Props {
  note: Note
  url: string
}

function Note(props: Props) {
  const router = useRouter()

  const [note, setNote] = useState<Note>(props.note)
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLSpanElement>(null)

  const handleEdit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const newNote: Note = {
      title: title.current?.value as string,
      description: description.current?.innerText as string
    }
    await fetch(props.url + '/' + note._id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    })
    setNote(newNote)
    router.push('/')
  }

  const handleDelete = async () => {
    await fetch(props.url + '/' + note._id, {
      method: 'delete'
    })
    router.push('/')
  }

  return (
    <div className="page">
      <Head>
        <title>Epic Notes | {note.title}</title>
      </Head>
      <form onSubmit={handleEdit}>
        <input
          id="title"
          className={`${inputStyles.input} ${inputStyles.title_input}`}
          type="text"
          ref={title}
          placeholder="Title"
          defaultValue={note.title}
        ></input>
        <span
          id="description"
          className={`${inputStyles.input} ${inputStyles.description_input}`}
          role="textbox"
          contentEditable
          ref={description}
          placeholder="Description"
          suppressContentEditableWarning={true}
        >
          {note.description}
        </span>
        <button className={buttonStyles.button} type="submit">
          Edit
        </button>
        <button
          className={buttonStyles.button}
          type="button"
          onClick={() => {
            setIsOpened(true)
          }}
        >
          Delete
        </button>
        <button
          className={buttonStyles.button}
          onClick={() => {
            router.push('/')
          }}
        >
          Go Back
        </button>
      </form>
      <Modal
        name="delete"
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        action={handleDelete}
      />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const res = await fetch(
    (process.env.API_URL + '/' + context.query.id) as string
  )
  const note = await res.json()

  return { props: { note, url: process.env.API_URL } }
}

export default Note
