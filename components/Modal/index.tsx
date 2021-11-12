import React, { useCallback, useEffect } from 'react'
import buttonStyles from '../../styles/Button.module.css'
import styles from '../../styles/Modal.module.css'

interface Props {
  name: string
  isOpened: boolean
  setIsOpened: Function
  action: any
}

export default function Modal(props: Props) {
  const openModal = useCallback(() => {
    const modal = document?.getElementById('modal')
    if (modal) modal.style.display = 'block'
    props.setIsOpened(true)
  }, [props])

  const closeModal = () => {
    const modal = document?.getElementById('modal')
    if (modal) modal.style.display = 'none'
    props.setIsOpened(false)
  }

  const clickOutsideModal: any = (event: Event) => {
    const modal = document?.getElementById('modal')
    if (event.target == modal) {
      closeModal()
    }
  }

  useEffect(() => {
    if (props.isOpened) {
      openModal()
    }
  }, [openModal, props.isOpened])

  return (
    <div
      id="modal"
      className={`${styles.modal} modal_${props.name}`}
      onClick={clickOutsideModal}
    >
      <div className={styles.modal_content}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
        <div className={styles.content}>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this item? This process cannot be
            undone.
          </p>
          <br />
          <button className={buttonStyles.button} onClick={props.action}>
            Yes
          </button>
          <button className={buttonStyles.button} onClick={closeModal}>
            No
          </button>
        </div>
      </div>
    </div>
  )
}
