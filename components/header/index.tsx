'use client'

import React from 'react'
import { Heart, Logo, LogoDark, Navbar1, Navbar2, Navbar3, Navbar4 } from '../svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ButtonPrimary } from '../buttons'

export const Header = ({ light }: any) => {
  const pathname = usePathname()

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <Link href={'/'} className='cursor-pointer'>{light ? <Logo /> : <LogoDark/>}</Link>
          <div className='nav'>
            <Link href={'/new-buildings'} className={`nav_bar hover:text-[#E6902A] ${pathname?.toString()?.slice(0, 14) === '/new-buildings' ? 'active' : ''}`}>
              <Navbar1 /> Новостройки
            </Link>
            <Link href={'/map'} className={`nav_bar hover:text-[#E6902A] ${pathname === '/map' ? 'active' : ''}`}>
              <Navbar2 /> Карта
            </Link>
            <Link href={'/builder-company'} className={`nav_bar hover:text-[#E6902A] ${pathname === '/builder-company' ? 'active' : ''}`}>
              <Navbar3 /> Застройщики
            </Link>
            <div className={`nav_bar hover:text-[#E6902A] ${pathname === '' ? 'active' : ''}`}>
              <Navbar4 /> Поиск
            </div>
          </div>
          <ButtonPrimary title='Мой Tifi'/>
        </div>
      </div>
    </header>
  )
}
