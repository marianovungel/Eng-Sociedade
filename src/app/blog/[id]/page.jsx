import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Logo from "../../../../public/logo.jpeg"

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    cache: "no-store"
  })
 
  if (!res.ok) {
    // throw new Error('Failed to fetch data')
    return notFound()
  }
 
  return res.json()
}

const Post = async ({ params })=> {
  const data = await getData(params.id)
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.TextContent}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.justText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae laudantium ea corrupti ipsa ipsum! Hic qui, vel reprehenderit ipsam nihil expedita quis esse similique explicabo quaerat necessitatibus aspernatur animi!</p>
          <div className={styles.user}>
            <Image className={styles.img} width={40} height={40}  src={Logo} alt=''/>
            <span className={styles.name}>Adm - Plataform</span>
          </div>
        </div>
        <div className={styles.imgContent}>
          <Image src="https://wallpapersmug.com/download/1024x768/38d8ee/dubai-buildings-cityscape-night-8k.jpg" alt='' className={styles.image} fill={true} />
        </div>
      </div>
      <div className={styles.textFullContent}>
        <p className={styles.justText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est error recusandae deleniti sint quaerat nesciunt cum porro! Blanditiis optio dignissimos quidem fugiat, eligendi saepe delectus tenetur corrupti porro consequatur!
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam distinctio eius asperiores voluptatem hic, natus cupiditate repellendus incidunt earum, doloremque quis. Qui voluptatum iste harum eaque assumenda laudantium corrupti?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae placeat ab odit obcaecati repellat reprehenderit officiis numquam assumenda, nihil est ipsa dolorem sunt illum modi, impedit voluptatum in laborum id?
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus culpa earum quo temporibus eligendi excepturi ducimus accusantium! Possimus temporibus et accusamus. Quae temporibus ut possimus maiores quam dolorum minus doloremque!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quaerat ullam dignissimos repellendus voluptate officia mollitia, asperiores dolorum assumenda voluptatum adipisci amet molestia
        </p>
      </div>
    </div>
  )
}

export default Post
