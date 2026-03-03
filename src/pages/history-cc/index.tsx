import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Award, Users } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

const TIMELINE = [
  {
    year: '2020',
    title: 'Початок підготовки',
    text: 'У ВСП ТФК ТНТУ ім. І. Пулюя впроваджено підготовку студентів за освітньо-професійною програмою «Обслуговування і ремонт електричних та електронних систем автомобілів» освітньо-професійного ступеня фахового молодшого бакалавра.',
  },
  {
    year: '2021',
    title: 'Створення циклової комісії',
    text: 'Наказом директора створено циклову комісію електричних та електронних систем автомобілів. Головою призначено Заверуху Руслана Романовича, спеціаліста вищої категорії, викладача-методиста.',
  },
  {
    year: '2023',
    title: 'Розширення складу',
    text: 'До циклової комісії прийнято викладачем електротехнічних дисциплін Котик Марію Іванівну.',
  },
  {
    year: '2024',
    title: 'Акредитація програми',
    text: 'Освітньо-професійну програму визнано акредитованою за рівнем фахової передвищої освіти відповідно до рішення Акредитаційної комісії ДСЯО України. Отримано сертифікат про акредитацію ОПП «Обслуговування і ремонт електричних та електронних систем автомобілів».',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Перший випуск',
    text: 'Відбувся перший випуск фахових молодших бакалаврів за спеціальністю 141 «Електроенергетика, електротехніка та електромеханіка», галузі знань 14 «Електрична інженерія». До комісії прийнято викладачем електромеханічних дисциплін Чаплія Дмитра Володимировича.',
    highlight: true,
  },
  {
    year: '2025',
    title: 'Другий випуск. Новий член комісії',
    text: 'Відбувся другий випуск фахівців. До циклової комісії прийнято викладачем електромеханічних дисциплін Воробця Володимира Юрійовича.',
  },
]

const FIRST_MEMBERS = [
  'Заверуха Руслан Романович — спеціаліст вищої категорії, викладач-методист',
  'Королюк Ростислав Ігорович — викладач вищої категорії, викладач-методист',
  'Недошитко Людмила Миколаївна — викладач вищої категорії, викладач-методист',
  'Іващук Андрій Дмитрович — викладач вищої категорії, викладач-методист',
  'Хіта Юрій Іванович — викладач, спеціаліст',
]

const CURRENT_MEMBERS = [
  'Заверуха Руслан Романович — доктор філософії, спеціаліст вищої категорії, викладач-методист',
  'Котик Марія Іванівна — спеціаліст ІІ категорії, викладач електротехнічних дисциплін',
  'Чаплій Дмитро Володимирович — спеціаліст, викладач електромеханічних дисциплін',
  'Воробець Володимир Юрійович — спеціаліст, викладач електромеханічних дисциплін',
  'Хіта Юрій Іванович — викладач, спеціаліст',
]

export const HistoryCC = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          {/* Заголовок */}
          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Історія ЦК</h1>
            <p className={styles.page_subtitle}>
              Циклова комісія електричних та електронних систем автомобілів — від заснування до сьогодні
            </p>
          </div>

          {/* Таймлайн */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <Calendar size={20} />
              Хронологія
            </h2>
            <div className={styles.timeline}>
              {TIMELINE.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.timeline_item} ${item.highlight ? styles.timeline_item_highlight : ''}`}
                >
                  <div className={styles.timeline_year}>{item.year}</div>
                  <div className={styles.timeline_dot} />
                  <div className={styles.timeline_content}>
                    <h3 className={styles.timeline_title}>{item.title}</h3>
                    <p className={styles.timeline_text}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Секретарі */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <Award size={20} />
              Секретарі циклової комісії
            </h2>
            <div className={styles.cards_row}>
              <div className={styles.info_card}>
                <span className={styles.info_card_period}>2021 — 2024</span>
                <p className={styles.info_card_name}>Недошитко Людмила Миколаївна</p>
              </div>
              <div className={`${styles.info_card} ${styles.info_card_active}`}>
                <span className={styles.info_card_period}>2024 — по сьогодні</span>
                <p className={styles.info_card_name}>Котик Марія Іванівна</p>
                <span className={styles.info_card_badge}>Діючий секретар</span>
              </div>
            </div>
          </section>

          {/* Перший склад */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <Users size={20} />
              Перший склад комісії (2021)
            </h2>
            <div className={styles.members_card}>
              <ul className={styles.members_list}>
                {FIRST_MEMBERS.map((member, i) => (
                  <li key={i} className={styles.members_item}>{member}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Поточний склад */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <Users size={20} />
              Поточний склад комісії
            </h2>
            <div className={`${styles.members_card} ${styles.members_card_current}`}>
              <ul className={styles.members_list}>
                {CURRENT_MEMBERS.map((member, i) => (
                  <li key={i} className={styles.members_item}>{member}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Посилання на склад ЦК */}
          <div className={styles.cta}>
            <p className={styles.cta_text}>
              Детальна інформація про кожного члена комісії — на сторінці «Склад ЦК»
            </p>
            <Link to="/composition-cc" className={styles.cta_link}>
              Перейти до складу ЦК
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </MainLayout>
  )
}