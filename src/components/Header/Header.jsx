import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderData from './HeaderData'
import './header.scss'

export default function Header() {
  return (
    <main className='header'>
        <HeaderTop />
        <HeaderData />
    </main>
  )
}
