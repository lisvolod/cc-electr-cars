import { BookOpen, ExternalLink } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

interface ISubject {
  title: string
  url: string
}

interface IGroup {
  title: string
  subjects: ISubject[]
}

const GROUPS: IGroup[] = [
  {
    title: 'Профільні дисципліни',
    subjects: [
      { title: 'Вступ до спеціальності', url: 'https://eguru1.tk.te.ua/course/view.php?id=604' },
      { title: 'Електроматеріалознавство', url: 'https://eguru1.tk.te.ua/course/view.php?id=607' },
      { title: 'Теоретичні основи електротехніки', url: 'https://eguru1.tk.te.ua/course/view.php?id=839' },
      { title: 'Основи електроніки та мікроелектроніки', url: 'https://eguru1.tk.te.ua/course/view.php?id=569' },
      { title: 'Метрологія та вимірювальна техніка', url: 'https://eguru1.tk.te.ua/course/view.php?id=66' },
      { title: 'Електричні машини та основи електроприводу', url: 'https://eguru1.tk.te.ua/course/view.php?id=648' },
      { title: 'Будова і експлуатація автомобілів', url: 'https://eguru1.tk.te.ua/course/view.php?id=743' },
      { title: 'Двигуни автомобілів', url: 'https://eguru1.tk.te.ua/course/view.php?id=766' },
      { title: 'Електроустаткування автомобілів', url: 'https://eguru1.tk.te.ua/course/view.php?id=800' },
      { title: 'Технічне обслуговування та ремонт електроустаткування автомобілів', url: 'https://eguru1.tk.te.ua/course/view.php?id=614' },
      { title: 'Електронні та мікропроцесорні системи автотранспортних засобів', url: 'https://eguru1.tk.te.ua/course/view.php?id=650' },
      { title: 'Діагностика електричних та електронних систем автомобілів', url: 'https://eguru1.tk.te.ua/course/view.php?id=652' },
      { title: 'Мехатронні системи автомобілів', url: 'https://eguru1.tk.te.ua/course/view.php?id=652' },
      { title: 'Схемотехніка електронних систем автомобілів', url: 'https://eguru1.tk.te.ua/course/view.php?id=653' },
      { title: 'Основи автоматики', url: 'https://eguru1.tk.te.ua/course/view.php?id=568' },
      { title: 'Мікропроцесорна техніка', url: 'https://eguru1.tk.te.ua/course/view.php?id=420' },
      { title: 'Основи електроенергетики та електропостачання автомобілів', url: 'https://eguru1.tk.te.ua/course/view.php?id=995' },
      { title: 'Основи електроприводу ТЗ', url: 'https://eguru1.tk.te.ua/course/view.php?id=622' },
      { title: 'Електрообладнання гібридних ТЗ', url: 'https://eguru1.tk.te.ua/course/view.php?id=617' },
      { title: 'Діагностика і ремонт електрокарів', url: 'https://eguru1.tk.te.ua/course/view.php?id=689' },
    ],
  },
  {
    title: 'Загальнотехнічні дисципліни',
    subjects: [
      { title: 'Фізика', url: 'https://eguru1.tk.te.ua/course/view.php?id=834' },
      { title: 'Основи вищої математики', url: 'https://eguru1.tk.te.ua/course/view.php?id=472' },
      { title: 'Інженерна графіка', url: 'https://eguru1.tk.te.ua/course/view.php?id=17' },
      { title: 'Основи технічної механіки', url: 'https://eguru1.tk.te.ua/course/view.php?id=1095' },
      { title: 'Інформатика та комп\'ютерна техніка', url: 'https://eguru1.tk.te.ua/course/view.php?id=819' },
      { title: 'Правила і безпека дорожнього руху', url: 'https://eguru1.tk.te.ua/course/view.php?id=1093' },
      { title: 'Охорона праці', url: 'https://eguru1.tk.te.ua/course/view.php?id=508' },
      { title: 'Безпека життєдіяльності', url: 'https://eguru1.tk.te.ua/course/view.php?id=1066' },
      { title: 'Основи екології', url: 'https://eguru1.tk.te.ua/course/view.php?id=595' },
      { title: 'Економіка підприємства', url: 'https://eguru1.tk.te.ua/course/view.php?id=726' },
      { title: 'Економіка підприємства (курсова робота)', url: 'https://eguru1.tk.te.ua/course/view.php?id=980' },
    ],
  },
  {
    title: 'Загальноосвітні дисципліни',
    subjects: [
      { title: 'Українська мова за ПС', url: 'https://eguru1.tk.te.ua/course/view.php?id=49' },
      { title: 'Іноземна мова за ПС', url: 'https://eguru1.tk.te.ua/course/view.php?id=209' },
      { title: 'Історія України', url: 'https://eguru1.tk.te.ua/course/view.php?id=67' },
      { title: 'Основи філософських знань', url: 'https://eguru1.tk.te.ua/course/view.php?id=153' },
      { title: 'Культурологія', url: 'https://eguru1.tk.te.ua/course/view.php?id=795' },
      { title: 'Соціологія', url: 'https://eguru1.tk.te.ua/course/view.php?id=21' },
      { title: 'Економічна теорія', url: 'https://eguru1.tk.te.ua/course/view.php?id=186' },
      { title: 'Основи правознавства', url: 'https://eguru1.tk.te.ua/course/view.php?id=75' },
      { title: 'Фізичне виховання', url: 'https://eguru1.tk.te.ua/course/view.php?id=639' },
    ],
  },
]

export const Subjects = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Дисципліни</h1>
            <p className={styles.page_subtitle}>
              Навчальні курси освітньо-професійної програми «Обслуговування і ремонт
              електричних та електронних систем автомобілів» на платформі eGuru
            </p>
          </div>

          <div className={styles.note}>
            <BookOpen size={16} />
            <span>
              Курси розміщені на платформі дистанційного навчання{' '}
              <a
                href="https://eguru1.tk.te.ua"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.note_link}
              >
                eGuru
              </a>
              {' '}Тернопільського фахового коледжу
            </span>
          </div>

          <div className={styles.groups}>
            {GROUPS.map((group) => (
              <section key={group.title} className={styles.group}>
                <h2 className={styles.group_title}>{group.title}</h2>
                <div className={styles.grid}>
                  {group.subjects.map((subject) => (
                    <a
                      key={subject.url + subject.title}
                      href={subject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.card}
                    >
                      <span className={styles.card_title}>{subject.title}</span>
                      <ExternalLink size={14} className={styles.card_icon} />
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </MainLayout>
  )
}