import { ExternalLink, CheckCircle2, BookOpen, Briefcase } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

const OPP_URL_2025 = 'https://tk.te.ua/wp-content/uploads/2026/01/opp_fmb_g3_elektrychna_inzheneriya_2025.pdf'
const OPP_URL_2023 = 'https://tk.te.ua/wp-content/uploads/2024/02/%D0%9E%D0%9F%D0%9F_%D0%A4%D0%9C%D0%91_141_%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B5%D1%80%D0%B3%D0%B5%D1%82%D0%B8%D0%BA%D0%B0_%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B0_%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D1%96%D0%BA%D0%B0_2023.pdf'

const DIRECTIONS = [
  'Технічне обслуговування та ремонт електричних та електронних систем',
  'Виробництво електричних та електронних систем',
  'Виробництво кабельних в\'язок та мультиплексних систем',
  'Ремонт автотронного обладнання вантажних, легкових автомобілів та автобусів',
  'Виробництво автотронного устаткування для автомобілів',
]

const COMPETENCIES = [
  'Розуміння основних методів та засобів, що використовуються в автомобільній електроніці',
  'Аналіз умінь та практичних навичок з використанням основ фундаментальних дисциплін',
  'Розуміння стандартів, умов експлуатації, технічних інструкцій та нормативних документів в галузі електричних та електронних систем автомобіля',
  'Розуміння призначення електричних та електронних систем автомобіля та автотронного обладнання',
  'Виконання спеціальних вимірювань, орієнтування у роботі електронних приладів та пристроїв автоматичного керування',
  'Розробка інструкційних карт безпечності режимів роботи електричного та електронного обладнання',
  'Використання знань з охорони праці при безпечному технічному обслуговуванні та ремонті',
  'Вибір компонентів електроустаткування конкретних систем керування та контролю автомобіля',
  'Монтаж, діагностика, технічне обслуговування і ремонт автотронного обладнання',
  'Аналіз проблемності поставленого завдання та удосконалення діагностичних вимірювальних комплексів',
]

const LEARNING_OUTCOMES = [
  'Впроваджувати цінності громадянського суспільства та захищати права і свободи громадянина України',
  'Демонструвати та застосовувати знання і розуміння наукових принципів для професійного розвитку',
  'Використовувати знання для обслуговування та ремонту автотронного устаткування автомобіля',
  'Здійснювати аналіз та підбір потрібної технічної інформації для вирішення практичних задач',
  'Виконувати технічні та економічні розрахунки характеристик електричних та електронних систем',
  'Розробляти схеми підключення обладнання для контрольних, діагностичних та вимірювальних робіт',
  'Застосовувати основи теорії електротехнічних наук при вирішенні задач автомобільної електроніки',
  'Організовувати виконання діагностичних та електромонтажних робіт',
  'Виконувати електротехнічні та спеціальні вимірювання, розуміти роботу електронних приладів',
  'Здійснювати підбір технічної документації для проведення діагностичних та ремонтних робіт',
  'Контролювати дотримання графіків повірки діагностичних комплексів та обладнання',
  'Проводити контроль стану засобів електробезпеки та відповідність відремонтованого обладнання',
  'Здійснювати контроль за безпечними умовами праці при виконанні технологічного процесу',
  'Виконувати монтаж нового основного та спеціалізованого діагностичного обладнання',
]

const POSITIONS = [
  'Автоелектрик',
  'Майстер дільниці',
  'Завідувач зони технічного обслуговування та ремонту',
  'Технік з експлуатації автотранспортних засобів',
  'Технік з ремонту автотранспортних засобів',
  'Менеджер сервісного обслуговування',
  'Майстер-приймальник автомобілів',
  'Діагност з комп\'ютерного діагностування систем керування двигуном, трансмісії, ходової частини та додаткового електроустаткування',
]

export const EducationalAndProfessionalPrograms = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          {/* Заголовок */}
          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Освітньо-професійні програми</h1>
            <p className={styles.page_subtitle}>
              Спеціальність G3 «Електрична інженерія» — галузь знань
              G «Інженерія, виробництво та будівництво»
            </p>
          </div>

          {/* Банер з посиланням на ОПП 2025 року */}
          <a
            href={OPP_URL_2025}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.opp_banner}
          >
            <div className={styles.opp_banner_text}>
              <p className={styles.opp_banner_label}>Офіційний документ</p>
              <p className={styles.opp_banner_title}>
                Освітньо-професійна програма «Обслуговування і ремонт
                електричних та електронних систем автомобілів» 2025р
              </p>
              <p className={styles.opp_banner_note}>
                Розміщено на сайті коледжу tk.te.ua
              </p>
            </div>
            <div className={styles.opp_banner_icon}>
              <ExternalLink size={22} />
            </div>
          </a>

          {/* Банер з посиланням на ОПП 2023 року */}
          <a
            href={OPP_URL_2023}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.opp_banner}
          >
            <div className={styles.opp_banner_text}>
              <p className={styles.opp_banner_label}>Офіційний документ</p>
              <p className={styles.opp_banner_title}>
                Освітньо-професійна програма «Обслуговування і ремонт
                електричних та електронних систем автомобілів» 2023р
              </p>
              <p className={styles.opp_banner_note}>
                Розміщено на сайті коледжу tk.te.ua
              </p>
            </div>
            <div className={styles.opp_banner_icon}>
              <ExternalLink size={22} />
            </div>
          </a>

          {/* Інфо */}
          <div className={styles.info_grid}>
            <div className={styles.info_item}>
              <span className={styles.info_label}>Освітня програма</span>
              <span className={styles.info_value}>Обслуговування і ремонт електричних та електронних систем автомобілів</span>
            </div>
            <div className={styles.info_item}>
              <span className={styles.info_label}>Освітній ступінь</span>
              <span className={styles.info_value}>Фаховий молодший бакалавр</span>
            </div>
            <div className={styles.info_item}>
              <span className={styles.info_label}>Спеціальність</span>
              <span className={styles.info_value}>G3 — Електрична інженерія</span>
            </div>
            <div className={styles.info_item}>
              <span className={styles.info_label}>Галузь знань</span>
              <span className={styles.info_value}>G — Інженерія, виробництво та будівництво</span>
            </div>
          </div>

          {/* Напрями діяльності */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <Briefcase size={20} />
              Напрями діяльності випускників
            </h2>
            <p className={styles.section_lead}>
              Випускники Тернопільського фахового коледжу можуть займати посади
              керівного персоналу на підприємствах різної форми власності за напрямками:
            </p>
            <ul className={styles.check_list}>
              {DIRECTIONS.map((item, i) => (
                <li key={i} className={styles.check_item}>
                  <CheckCircle2 size={16} className={styles.check_icon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Фахові компетентності */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <BookOpen size={20} />
              Фахові компетентності
            </h2>
            <div className={styles.competencies_grid}>
              {COMPETENCIES.map((item, i) => (
                <div key={i} className={styles.competency_item}>
                  <span className={styles.competency_num}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.competency_text}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Результати навчання */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <CheckCircle2 size={20} />
              Результати навчання
            </h2>
            <ul className={styles.outcomes_list}>
              {LEARNING_OUTCOMES.map((item, i) => (
                <li key={i} className={styles.outcome_item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Первинні посади */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <Briefcase size={20} />
              Первинні посади
            </h2>
            <p className={styles.section_lead}>
              По закінченню коледжу наші випускники можуть обслуговувати,
              діагностувати та ремонтувати електричне й електронне устаткування
              автомобілів, бортові комп'ютерні системи керування, працюючи
              на автомобільному сервісі, в дилерських центрах, автомобільних
              салонах, таксопарках, автобазах та підприємствах автоперевезень.
            </p>
            <div className={styles.positions_grid}>
              {POSITIONS.map((pos, i) => (
                <div key={i} className={styles.position_item}>
                  <span className={styles.position_num}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.position_text}>{pos}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </MainLayout>
  )
}