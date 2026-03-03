import { Link } from 'react-router-dom'
import { ArrowLeft, Wrench } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

interface IStub {
  title: string
}

export const Stub = ({ title }: IStub) => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.icon}>
            <Wrench size={32} />
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>
            Сторінка в процесі розробки. Незабаром тут з'явиться контент.
          </p>
          <Link to="/" className={styles.back}>
            <ArrowLeft size={16} />
            На головну
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}