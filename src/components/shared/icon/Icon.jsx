import React from 'react'
import styles from './Icon.module.scss'

const Icon = ({icon, width, height, fill, backgroundColor}) => {
  return (
    <div className={styles.icon}>
        {icon}
    </div>
  )
}

export default Icon