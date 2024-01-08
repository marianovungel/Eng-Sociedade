import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Use from '../../../public/optica.jpg'
import Card from '@/components/Card/page'

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image fill={true} alt='' className={styles.img} src={Use}  />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyllers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Quem Somos Nós?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Error molestiae iusto et veritatis voluptatibus, qui quibusdam
          voluptates aperiam quidem ex facere eligendi sit nulla autem 
          voluptates aperiam quidem ex facere eligendi sit nulla autem 
          voluptas repellendus, laudantium ipsa deleniti.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Error molestiae iusto et veritatis voluptatibus, qui quibusdam
          voluptates aperiam quidem ex facere eligendi sit nulla autem 
          voluptas repellendus, laudantium ipsa deleniti.
          </p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>O que fazemos?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor necessitatibus,
           ducimus atque hic voluptatibus quo recusandae enim a eu
           ducimus atque hic voluptatibus quo recusandae enim a eu
           <br/>
           <br/>
          -commodi quam neque quis quae, ad, 
          <br/>
           <br/>
          -amet aspernatur eaque tenetur nemo.
          <br/>
           <br/>
          -amet aspernatur eaque tenetur nemo.
        </p>
        <Button url="/contact" text="Contate-nos" />
      </div>
    </div>
    <div className={styles.CardContent}>
      <div className={styles.cardtitleCoord}>Coordenadores do Projeto</div>
      <div className={styles.ContainerCard}>
        <Card name="Sabi Bandiri" cargo="Coordenador" desc="Docente do curso de Engenharia da Computação (UNILAB)" img={Use} />
        <Card name="Sabi Bandiri" cargo="Coordenador" desc="Docente do curso de Engenharia da Computação (UNILAB)" img={Use} />
      </div>
    </div>
    <div className={styles.CardContent}>
      <div className={styles.cardtitleCoord}>Discentes Participantes</div>
      <div className={styles.ContainerCard}>
        <Card name="Sabi Bandiri" cargo="Coordenador" desc="Docente do curso de Engenharia da Computação (UNILAB)" img={Use} />
        <Card name="Sabi Bandiri" cargo="Coordenador" desc="Docente do curso de Engenharia da Computação (UNILAB)" img={Use} />
        <Card name="Sabi Bandiri" cargo="Coordenador" desc="Docente do curso de Engenharia da Computação (UNILAB)" img={Use} />
        </div>
    </div>
    </div>
  )
}

export default About
