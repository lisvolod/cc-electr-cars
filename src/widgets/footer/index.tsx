import { MapPin, Phone, Globe, Mail, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './index.module.scss'

const NAV_LINKS = [
  { title: 'Історія ЦК',                  path: '/history-cc' },
  { title: 'Склад ЦК',                     path: '/composition-cc' },
  { title: 'Спеціальність',                path: '/specialty' },
  { title: 'Освітньо-професійні програми', path: '/educational-and-professional-programs' },
  { title: 'Наукові роботи',               path: '/scientific-work' },
  { title: 'Наші досягнення',              path: '/our-achievements' },
  { title: 'Студентське дозвілля',         path: '/student-leisure-time' },
  { title: 'Контакти',                     path: '/contacts' },
]

const CONTACTS = [
  {
    icon: MapPin,
    label: 'Адреса',
    value: 'м. Тернопіль, вул. Л. Курбаса, 13',
    href: 'https://maps.google.com/?q=Тернопіль+вул.+Курбаса+13',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '066 923 48 81',
    href: 'tel:+380669234881',
  },
  {
    icon: Globe,
    label: 'Сайт коледжу',
    value: 'tk.te.ua',
    href: 'http://www.tk.te.ua',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'ck141eee@gmail.com',
    href: 'mailto:cs@tk.te.ua',
  },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Верхня частина */}
        <div className={styles.top}>

          {/* Ліва колонка — брендинг */}
          <div className={styles.brand}>
            <div className={styles.brand_logo}>
              <img src={logo} alt="Логотип ЦК" className={styles.brand_logo_img} />
            </div>
            <div className={styles.brand_info}>
              <p className={styles.brand_name}>
                Циклова комісія електричних та електронних систем автомобілів
              </p>
              <p className={styles.brand_college}>
                ВСП «Тернопільський фаховий коледж ТНТУ імені Івана Пулюя»
              </p>
            </div>
          </div>

          {/* Середня колонка — навігація */}
          <div className={styles.nav_col}>
            <p className={styles.col_title}>Навігація</p>
            <nav className={styles.nav_list}>
              {NAV_LINKS.map((link) => (
                <Link key={link.path} to={link.path} className={styles.nav_link}>
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Права колонка — контакти */}
          <div className={styles.contacts_col}>
            <p className={styles.col_title}>Контакти</p>
            <ul className={styles.contacts_list}>
              {CONTACTS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className={styles.contact_item}>
                  <div className={styles.contact_icon}>
                    <Icon size={16} />
                  </div>
                  <div className={styles.contact_info}>
                    <span className={styles.contact_label}>{label}</span>
                    <a
                      href={href}
                      className={styles.contact_value}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {value}
                      {href.startsWith('http') && (
                        <ExternalLink size={11} className={styles.external_icon} />
                      )}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Розділювач */}
        <div className={styles.divider} />

        {/* Нижня частина — копірайт */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} ВСП «ТФК ТНТУ імені Івана Пулюя». Всі права захищено.
          </p>
          <p className={styles.specialty}>
            Спеціальність G3 — Електрична інженерія
          </p>
        </div>

      </div>
    </footer>
  )
}