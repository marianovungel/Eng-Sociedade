import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Escolha Uma Galeria</h1>
      <div className={styles.items}>
        <Link href="/portfolio/Pesquisa" className={styles.item}>
          <span className={styles.title}>Pesquisa</span>
        </Link>
        <Link href="/portfolio/Extensão" className={styles.item}>
          <span className={styles.title}>Extensão<ol></ol></span>
        </Link>
        <Link href="/portfolio/Atividades" className={styles.item}>
          <span className={styles.title}>Atividades</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
