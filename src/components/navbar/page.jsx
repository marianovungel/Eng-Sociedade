"use client"
import Link from 'next/link'
import React from 'react'
import style from './page.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const links = [
  {
    id:1,
    title:"Iniciar",
    url:"/"
  },
  {
    id:2,
    title:"Portfolio",
    url:"/portfolio"
  },
  {
    id:3,
    title:"Atualidade",
    url:"/blog"
  },
  {
    id:4,
    title:"Sobre",
    url:"/about"
  },
  {
    id:5,
    title:"Contato",
    url:"/contact"
  },
  // {
  //   id:6,
  //   title:"dashboard",
  //   url:"/dashboard"
  // }
]

function Navbar() {
  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>Engenharia Na Sociedade</Link>
      <div className={style.links}>
        <DarkModeToggle />
        {links?.map((l)=>(
          <Link key={l.id} href={l.url} className={style.link}>{l.title}</Link>
        ))}
        <button className={style.logout} onClick={()=>{console.log("logged out")}}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
