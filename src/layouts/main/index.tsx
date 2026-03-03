import type { ReactNode } from 'react'
import { Footer } from '../../widgets/footer'
import { Header } from '../../widgets/header'
import styles from './index.module.scss'

interface IMainLayout {
  children: ReactNode
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  )
}