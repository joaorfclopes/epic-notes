import * as React from 'react'
import styles from '../../styles/Icons.module.css'

function Toggle(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 461.61 461.84"
      {...props}
    >
      <g data-name="Layer 2">
        <path
          className={styles.icon}
          data-name="Layer 1"
          d="M244.25 461.84h-27.06c-7.72-1-15.49-1.67-23.17-2.95-48.22-8.06-90.24-28.81-124.83-63.37-51.87-51.85-74.7-114.86-68.07-187.83 4.45-49 23.62-92.27 56.37-129.06C101 29.79 155.71 3.47 221 .29c45.55-2.22 88.37 8.4 127.35 32.18C408.3 69 445.08 122 458 191.17c1.62 8.66 2.42 17.47 3.59 26.21v27.06c-.36 3.25-.74 6.49-1.1 9.74-5.53 49.69-24.5 93.53-58 130.7-35.56 39.46-79.61 64.09-132 73.37-8.68 1.54-17.49 2.41-26.24 3.59zm-13.8-22.41v-417C153.92 25.44 93.14 57.19 53.62 122.65c-43.2 71.58-43 145.89.51 217.31 39.62 65.04 100.2 96.45 176.32 99.47z"
        />
      </g>
    </svg>
  )
}

export default Toggle