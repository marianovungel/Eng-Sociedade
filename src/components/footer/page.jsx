import React from 'react'
import style from './page.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.container}>2024 African-coder. All rights reserved.</div>
      <div className={style.social}>
        <Image  src="/1.png" width={15} height={15} alt='African-coder' className={style.img} />
        <Image src="/2.png" width={15} height={15} alt='African-coder' className={style.img} />
        <Image src='/3.png' width={15} height={15} alt='African-coder' className={style.img} />
        <Image src='/4.png' width={15} height={15} alt='African-coder' className={style.img} />
      </div>
    </div>
  )
}

export default Footer
