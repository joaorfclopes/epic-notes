import React, { LegacyRef, useEffect, useState } from 'react'

interface Props {
  classes?: string
  refValue: LegacyRef<HTMLTextAreaElement>
  placeholder: string
  defaultValue?: string | undefined
}

export default function ResizableTextarea(props: Props) {
  const [rows, setRows] = useState(5)
  const minRows = 5
  const maxRows = 30

  const handleChange = (event: any) => {
    const textarea: any = document?.getElementById('resizable_textarea')

    const lineHeight = textarea?.scrollHeight < 330 ? 22 : 21

    const previousRows = event.target.rows
    event.target.rows = minRows

    const currentRows = ~~(event.target.scrollHeight / lineHeight)

    if (currentRows === previousRows) {
      event.target.rows = currentRows
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows
    }

    event.target.scrollTop = event.target.scrollHeight

    setRows(currentRows < maxRows ? currentRows : maxRows)
  }

  const resize = () => {
    const textarea = document?.getElementById('resizable_textarea')

    if (textarea) textarea.style.minHeight = `${textarea.scrollHeight}px`
  }

  useEffect(() => {
    resize()
  }, [])

  return (
    <textarea
      id="resizable_textarea"
      className={props.classes}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      ref={props.refValue}
      rows={rows}
      onChange={handleChange}
    />
  )
}
