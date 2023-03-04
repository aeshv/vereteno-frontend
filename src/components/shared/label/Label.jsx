import React from 'react'
import styles from './label.module.scss'

const Label = ({children, type}) => {
  return (
    <div className={`${styles.label} ${styles[type]}`}>{children}</div>
  )
}

export default Label