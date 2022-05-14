import Image from 'next/image'
import React from 'react'
import l from '../assets/icons/Logo.svg'

export default function Logo() {
  return (
    <Image src={l} alt='logo' />
  )
}
