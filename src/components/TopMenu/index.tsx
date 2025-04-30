import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/images/logo.webp'
import styles from './TopMenu.module.scss'
import { DateTime } from './DateTime'
import { ActiveUsers } from './ActiveUsers'

export const TopMenu = () => {
  return (
    <div className={styles.topMenu}>
      <Link href='/'>
        <Image src={Logo} alt='Logo' width={116} height={44} />
      </Link>
      <div className={styles.topMenu__info}>
        <DateTime />
        <ActiveUsers />
      </div>
    </div>
  )
}
