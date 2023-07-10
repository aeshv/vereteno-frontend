import React from 'react'
import styles from './ColorDot.module.scss'

const ColorDot = ({color}) => {
    return (
        <>
            <div className={styles.dot} style={{background: color}}/>
        </>
    )
}

export default ColorDot