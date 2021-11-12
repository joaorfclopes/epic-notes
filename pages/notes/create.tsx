import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEventHandler, useRef } from 'react'
import ResizableTextarea from '../../components/ResizableTextarea'
import buttonStyles from '../../styles/Button.module.css'
import inputStyles from '../../styles/Input.module.css'
import { Note } from '../../utils/types'

interface Props {
  url: string
}

function CreateNote(props: Props) {
  const router = useRouter()

  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLTextAreaElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    let note: Note = { title: '', description: '' }
    if (null !== title.current || null !== description.current) {
      note = {
        title: title.current?.value as string,
        description: description.current?.value as string
      }
    }

    await fetch(props.url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })

    router.push('/')
  }

  return (
    <div className="page">
      <Head>
        <title>Epic Notes | Create</title>
      </Head>
      <h1>Create a New Note</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          id="title"
          className={`${inputStyles.input} ${inputStyles.title_input}`}
          type="text"
          ref={title}
          placeholder="Title"
        ></input>
        <ResizableTextarea
          classes={`${inputStyles.input} ${inputStyles.description_input}`}
          refValue={description}
          placeholder="Take a note..."
        />
        <button className={buttonStyles.button} type="submit">
          Create
        </button>
        <button
          className={buttonStyles.button}
          type="button"
          onClick={() => {
            router.push('/')
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export async function getStaticProps(context: any) {
  return {
    props: {
      url: process.env.API_URL
    }
  }
}

export default CreateNote
