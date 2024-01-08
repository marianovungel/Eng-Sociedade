import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

function Category({params}) {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.contact}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div> 
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="https://wallpapersmug.com/download/1024x768/38d8ee/dubai-buildings-cityscape-night-8k.jpg" alt='' fill={true} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.contact}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div> 
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="https://wallpapersmug.com/download/1024x768/38d8ee/dubai-buildings-cityscape-night-8k.jpg" alt='' fill={true} />
        </div>
      </div>
    </div>
  )
}

export default Category
