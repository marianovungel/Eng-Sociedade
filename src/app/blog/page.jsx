import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Mariano from '../../../public/mariano.jpg'

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {

  const data = await getData()
  console.log(data)

  return (
    <div className={styles.mainContainer}>
      {data.map((item)=>(
        <Link href={`/blog/${item.id}`} key={item.id} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src={Mariano} alt='' className={styles.image} width={400} height={250} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
