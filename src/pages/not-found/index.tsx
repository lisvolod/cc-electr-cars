import { Link } from 'react-router-dom'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

export const NotFound = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Сторінку не знайдено</h1>
          <p className={styles.subtitle}>
            Сторінка, яку ви шукаєте, не існує або була переміщена
          </p>
          <Link to="/" className={styles.btn}>
            На головну
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}