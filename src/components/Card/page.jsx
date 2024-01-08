import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin  } from "react-icons/fa";

export default function Card({name, cargo, desc, img}) {
  return (
    <div className={styles.card}>
          <Image src={img} className={styles.imgCard} width={120} height={120} alt='' />
          <h1 className={styles.Name}>{name}</h1>
          <p className={styles.cargo}>{cargo}</p>
          <p className={styles.descCard}>{desc}</p>
          <div className={styles.footer}>
            <FaFacebook size={15} />
            <FaInstagram size={15} />
            <FaLinkedin size={15} />
            <FaGithub  size={15} />
          </div>
    </div>
  )
}
