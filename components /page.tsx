'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const path = usePathname()
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      {links.map(({ href, label }) => (
        <Link key={href} href={href}
          style={{ fontWeight: path === href ? 600 : 400 }}
        >{label}</Link>
      ))}
    </nav>
  )
}
