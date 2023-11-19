'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavbarItems = [
  {route: "/", title: "Home" },
  {route: "/films", title: "Films" },
  {route: "/series", title: "Series" },
]

const Navbar = () => {
  const currentPath = usePathname()
  console.log(currentPath);

  return (
    <nav className='cm-navbar'>
      <Link className='cm-navbar-logo' href="/" >Cine<span>Movie</span></Link>
      <ul className='cm-navbar-item-list'>
        {
          NavbarItems.map(item => (
            <Link className={`cm-navbar-item ${currentPath === item.route ? "active" : ""}`} key={item.route} href={item.route} >{item.title}</Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar