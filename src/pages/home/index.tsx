import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Briefcase,
  BookOpen,
  FlaskConical,
  CheckCircle2,
} from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

// Посади які може займати фахівець
const POSITIONS = [
  'Автоелектрик',
  'Майстер електротехнічної дільниці',
  'Завідувач зони ТО та ремонту',
  'Технік з ремонту автотранспортних засобів',
  'Майстер - приймальник автомобілів',
  'Продавець- консультант автомобілів та запасних частин',
  'Технік з обслуговування автотранспортних засобів',
  'Менеджер сервісного обслуговування',
  'Діагност електричних, електронних та мехатронних систем автомобілів',
]

// Дисципліни
const SUBJECTS = [
  'Будова і експлуатація автомобілів',
  'Двигуни автомобілів',
  'Електроустаткування та мікропроцесорне керування',
  'Технічне обслуговування та ремонт електроустаткування',
  'Основи керування автомобілем',
  'Основи автоматики та робототехніки',
  'Схемотехніка електронних систем',
  'Мікропроцесорна техніка',
  'Основи електроенергетики',
  'Основи електроніки та мікроелектроніки',
]

// Практики
const PRACTICES = [
  'Електромонтажна практика',
  'Практика на засобах вимірювальної техніки',
  'Практика з використанням комп\'ютерної техніки',
  'Технологічна практика',
  'Переддипломна практика',
]

const PROSPECTS_CARDS = [
  {
    icon: Briefcase,
    title: 'Посади фахівця',
    items: POSITIONS,
    accent: 'teal' as const,
  },
  {
    icon: BookOpen,
    title: 'Дисципліни',
    items: SUBJECTS,
    accent: 'blue' as const,
  },
  {
    icon: FlaskConical,
    title: 'Практична підготовка',
    items: PRACTICES,
    accent: 'teal' as const,
  },
]

// Швидкі посилання
// const QUICK_LINKS = [
//   { title: 'Про спеціальність',   path: '/specialty' },
//   { title: 'Склад ЦК',            path: '/composition-cc' },
//   { title: 'Силабуси',            path: '/syllabuses' },
//   { title: 'Наші досягнення',     path: '/our-achievements' },
//   { title: 'Контакти',            path: '/contacts' },
// ]

export const Home = () => {
  return (
    <MainLayout>
      <div className={styles.page}>

        {/* ── HERO ───────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.hero_inner}>
            <div className={styles.hero_content}>
              <div className={styles.hero_badge}>
                Спеціальність G3 — Електрична інженерія
              </div>
              <h1 className={styles.hero_title}>
                Циклова комісія{' '}
                <span className={styles.hero_title_accent}>
                  електричних та електронних систем автомобілів
                </span>
              </h1>
              <p className={styles.hero_description}>
                Підготовка фахівців у галузі експлуатації, обслуговування,
                ремонту та діагностики електричних і електронних систем
                автомобілів — на перетині механіки, електротехніки,
                електроніки та мехатроніки.
              </p>
              <div className={styles.hero_actions}>
                <Link to="/specialty" className={styles.btn_primary}>
                  Про спеціальність
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contacts" className={styles.btn_outline}>
                  Контакти
                </Link>
              </div>
            </div>

            {/* Декоративна картка з інфо */}
            <div className={styles.hero_card}>
              <div className={styles.hero_card_header}>
                <span className={styles.hero_card_label}>Освітній ступінь</span>
                <span className={styles.hero_card_value}>Фаховий молодший бакалавр</span>
              </div>
              <div className={styles.hero_card_divider} />
              <div className={styles.hero_card_row}>
                <span className={styles.hero_card_label}>Галузь знань</span>
                <span className={styles.hero_card_value}>G — Інженерія, виробництво та будівництво</span>
              </div>
              <div className={styles.hero_card_divider} />
              <div className={styles.hero_card_row}>
                <span className={styles.hero_card_label}>Спеціальність</span>
                <span className={styles.hero_card_value}>G3 — Електрична інженерія</span>
              </div>
              <div className={styles.hero_card_divider} />
              <div className={styles.hero_card_row}>
                <span className={styles.hero_card_label}>Освітня програма</span>
                <span className={styles.hero_card_value}>Обслуговування і ремонт електричних та електронних систем автомобілів</span>
              </div>
              <div className={styles.hero_card_divider} />
              <div className={styles.hero_card_row}>
                <span className={styles.hero_card_label}>Заклад</span>
                <span className={styles.hero_card_value}>ТФК ТНТУ імені Івана Пулюя</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── ШВИДКІ ПОСИЛАННЯ ──────────────────────────────── */}
        {/* <section className={styles.quicklinks}>
          <div className={styles.section_inner}>
            {QUICK_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className={styles.quicklink_item}>
                {link.title}
                <ArrowRight size={14} className={styles.quicklink_arrow} />
              </Link>
            ))}
          </div>
        </section> */}

        {/* ── ПЕРСПЕКТИВИ ───────────────────────────────────── */}
        <section className={styles.prospects}>
          <div className={styles.section_inner}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>
                Чому варто навчатися за нашою спеціальністю
              </h2>
              <p className={styles.section_subtitle}>
                Освітньо-професійна програма «Обслуговування і ремонт електричних
                та електронних систем автомобілів» — широкі перспективи
                працевлаштування в автомобільній галузі
              </p>
            </div>

            <div className={styles.prospects_grid}>
              {PROSPECTS_CARDS.map(({ icon: Icon, title, items, accent }) => (
                <div key={title} className={`${styles.prospect_card} ${styles[`prospect_card_${accent}`]}`}>
                  <div className={styles.prospect_card_header}>
                    <div className={`${styles.prospect_icon} ${styles[`prospect_icon_${accent}`]}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className={styles.prospect_card_title}>{title}</h3>
                  </div>
                  <ul className={styles.prospect_list}>
                    {items.map((item) => (
                      <li key={item} className={styles.prospect_item}>
                        <CheckCircle2 size={14} className={styles.prospect_check} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </MainLayout>
  )
}