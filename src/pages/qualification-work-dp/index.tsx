import { ExternalLink, BookOpen } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

const ITEMS = [
  {
    title: 'Кваліфікаційна робота',
    url: 'https://eguru1.tk.te.ua/course/view.php?id=999',
  },
]

export const QualificationWorkDp = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Виконання кваліфікаційної роботи</h1>
            <p className={styles.page_subtitle}>
              Матеріали для виконання кваліфікаційної роботи на платформі eGuru
            </p>
          </div>

          <div className={styles.note}>
            <BookOpen size={16} />
            <span>
              Матеріали розміщені на платформі дистанційного навчання{' '}
              <a href="https://eguru1.tk.te.ua" target="_blank" rel="noopener noreferrer" className={styles.note_link}>
                eGuru
              </a>
              {' '}Тернопільського фахового коледжу
            </span>
          </div>

          <div className={styles.list}>
            {ITEMS.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <span className={styles.card_title}>{item.title}</span>
                <ExternalLink size={16} className={styles.card_icon} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </MainLayout>
  )
}