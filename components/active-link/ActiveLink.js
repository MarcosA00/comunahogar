'use client'

import Link from "next/dist/client/link"
import { usePathname } from "next/navigation"

export const ActiveLink = ({ path, text }) => {
  const pathName = usePathname()

  return (
    <Link 
      href={ path } 
      className={ `hover:underline  mr-2 transition-all ${( pathName == path ) && ' underline' }` }>
          { text }
    </Link>
  )
}