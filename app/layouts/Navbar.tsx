'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavbarItems = [
  { route: "/", title: "Home" },
  { route: "/films", title: "Films" },
  { route: "/series", title: "Series" },
]

const Navbar = () => {
  const currentPath = usePathname()

  return (
    <nav className='cm-navbar'>
      <div className='cm-navbar-container' >
        <Link className='cm-navbar-logo' href="/" >Cine<span>Movie</span></Link>
        <ul className='cm-navbar-item-list'>
          {
            NavbarItems.map(item => (
              <Link className={`cm-navbar-item ${currentPath === item.route ? "active" : ""}`} key={item.route} href={item.route} >{item.title}</Link>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar