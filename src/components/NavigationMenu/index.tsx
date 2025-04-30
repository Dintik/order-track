'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavigationMenu = () => {
  const pathname = usePathname()

  const links = [
    { href: '/products', label: 'Products' },
    { href: '/orders', label: 'Orders' }
  ]

  return (
    <nav className='d-flex gap-3 flex-column align-items-center justify-content-center col-2 bg-white vh-100 position-fixed top-0 left-0 shadow'>
      <i
        className='bi bi-person-circle lh-1 mb-3'
        style={{ fontSize: '76px' }}
      />
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-decoration-none text-center px-1 border-bottom  border-2 ${
            pathname === href ? 'border-success' : 'border-white'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
