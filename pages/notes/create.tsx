import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEventHandler, useRef } from 'react'
import buttonStyles from '../../styles/Button.module.css'
import inputStyles from '../../styles/Input.module.css'
import { Note } from '../../utils/types'

interface Props {
  url: string
}

function CreateNote(props: Props) {
  const router = useRouter()

  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLSpanElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    let note: Note = { title: '', description: '' }
    if (null !== title.current || null !== description.current) {
      note = {
        title: title.current?.value as string,
        description: description.current?.innerText as string
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
    <>
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
        <span
          id="description"
          className={`${inputStyles.input} ${inputStyles.description_input}`}
          role="textbox"
          contentEditable
          ref={description}
          placeholder="Description"
        />
        <button className={buttonStyles.button} type="submit">
          Create
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
    </>
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
