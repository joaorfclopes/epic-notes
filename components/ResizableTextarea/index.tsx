import React, { LegacyRef, useState } from 'react'
import inputStyles from '../../styles/Input.module.css'

interface Props {
  refValue: LegacyRef<HTMLTextAreaElement>
  placeholder: string
  defaultValue?: string | undefined
}

export default function ResizableTextarea(props: Props) {
  const { refValue, placeholder, defaultValue } = props

  const [rows, setRows] = useState(5)
  const minRows = 10
  const maxRows = 50

  const handleChange = (event: any) => {
    const textareaLineHeight = 24

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
