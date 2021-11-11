import React, { useEffect } from 'react'
import buttonStyles from '../../styles/Button.module.css'
import styles from '../../styles/Modal.module.css'

interface Props {
  name: string
  isOpened: boolean
  setIsOpened: Function
  action: any
}

export default function Modal(props: Props) {
  const { name, isOpened, setIsOpened, action } = props

  const openModal = () => {
    const modal = document?.getElementById('modal')
    if (modal) modal.style.display = 'block'
    setIsOpened(true)
  }

  const closeModal = () => {
    const modal = document?.getElementById('modal')
    if (modal) modal.style.display = 'none'
    setIsOpened(false)
  }

  const clickOutsideModal: any = (event: Event) => {
    const modal = document?.getElementById('modal')
    if (event.target == modal) {
      closeModal()
    }
  }

  useEffect(() => {
    if (isOpened) {
      openModal()
    }
  }, [isOpened])

  return (
    <div
      id="modal"
      className={`${styles.modal} modal_${name}`}
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
          <button className={buttonStyles.button} onClick={action}>
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
