import Image from 'next/image'
import styles from './page.module.css'
import Hero from '/public/gg.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Juntos para uma sociedade melhor.</h1>
        <p className={styles.desc}>Promovendo atividades que visam a beneficiar as comunidades em geral.</p>
        <Button url="/portfolio" text="Nos Projetos" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt="African-coder"  />
      </div>
    </div>
  )
}
