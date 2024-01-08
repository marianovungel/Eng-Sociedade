import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Contacts from '../../../public/cont.png'

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Vamos Manter Contato</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={Contacts} alt='' fill={true} className={styles.Image} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Nome' className={styles.input} />
          <input type="email" placeholder='E-mail' className={styles.input} />
          <textarea className={styles.textArea} placeholder='Mensagem' cols="30" rows="10"></textarea>
          <Button url="#" text="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default Contact
