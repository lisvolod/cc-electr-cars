import { ExternalLink, BookOpen } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

const PRACTICES = [
  { title: 'Слюсарно-механічна', url: 'https://eguru1.tk.te.ua/course/view.php?id=748' },
  { title: 'Електромонтажна практика', url: 'https://eguru1.tk.te.ua/course/view.php?id=750' },
  { title: 'Практика на засобах вимірювальної техніки', url: 'https://eguru1.tk.te.ua/course/view.php?id=751' },
  { title: 'Практика з використанням комп\'ютерної та мікропроцесорної техніки', url: 'https://eguru1.tk.te.ua/course/view.php?id=752' },
  { title: 'Практика для отримання робітничої професії', url: 'https://eguru1.tk.te.ua/course/view.php?id=754' },
  { title: 'Технологічна практика', url: 'https://eguru1.tk.te.ua/course/view.php?id=755' },
  { title: 'Переддипломна практика', url: 'https://eguru1.tk.te.ua/course/view.php?id=756' },
]

export const Practices = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Практики</h1>
            <p className={styles.page_subtitle}>
              Навчальні та виробничі практики освітньо-професійної програми
              «Обслуговування і ремонт електричних та електронних систем автомобілів»
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
            {PRACTICES.map((item, i) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.card_left}>
                  <span className={styles.card_num}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.card_title}>{item.title}</span>
                </div>
                <ExternalLink size={16} className={styles.card_icon} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </MainLayout>
  )
}