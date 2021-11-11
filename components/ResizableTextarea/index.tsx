import React, { LegacyRef, useEffect, useState } from 'react'
import inputStyles from '../../styles/Input.module.css'

interface Props {
  refValue: LegacyRef<HTMLTextAreaElement>
  placeholder: string
  defaultValue?: string | undefined
}

export default function ResizableTextarea(props: Props) {
  const { refValue, placeholder, defaultValue } = props

  const [rows, setRows] = useState(5)
  const minRows = 5
  const maxRows = 50

  const handleChange = (event: any) => {
    const textareaLineHeight = 20

    const previousRows = event.target.rows
    event.target.rows = minRows

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight)

    if (currentRows === previousRows) {
      event.target.rows = currentRows
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows
      event.target.scrollTop = event.target.scrollHeight
    }

    setRows(currentRows < maxRows ? currentRows : maxRows)
  }

  const resize = () => {
    const textarea = document?.getElementById('description')

    if (textarea) textarea.style.minHeight = `${textarea.scrollHeight}px`
  }

  useEffect(() => {
    resize()
  }, [])

  return (
    <textarea
      id="description"
      className={`${inputStyles.input} ${inputStyles.description_input}`}
      placeholder={placeholder}
      defaultValue={defaultValue}
      ref={refValue}
      rows={rows}
      onChange={handleChange}
    />
  )
}
