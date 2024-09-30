import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
          <Link href={"/"}>home</Link>
          <Link href={"/performance"}>performance</Link>
          <Link href={"/scale"}>scale</Link>
          <Link href={"/reliability"}>reliability</Link>
        </div>
  )
}

export default Header