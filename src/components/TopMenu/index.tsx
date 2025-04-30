import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/images/logo.webp'
import styles from './TopMenu.module.scss'
import { DateTime } from './DateTime'

export const TopMenu = () => {
  return (
    <div className={styles.topMenu}>
      <div className={styles.topMenu__left}>
        <Link href='/'>
          <Image
            src={Logo}
            alt='Logo'
            width={116}
            height={44}
            className={styles.topMenu__logo}
          />
        </Link>
      </div>
      <div className={styles.topMenu__right}>
        <div className={styles.topMenu__info}>
          <DateTime />
          {/* <SessionCounter /> */}
        </div>
      </div>
    </div>
  )
}
