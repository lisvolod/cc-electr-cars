import { Link } from 'react-router-dom'
import { FileText, Briefcase, GraduationCap, Wrench, ArrowRight } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import pdfPresentation from '@/assets/files/G3_presentation.pdf'
import poster from '@/assets/files/poster.pdf'
import styles from './index.module.scss'

const POSITIONS = [
  'Автоелектрик',
  'Майстер дільниці',
  'Завідувач зони технічного обслуговування та ремонту',
  'Технік з експлуатації автотранспортних засобів',
  'Технік з ремонту автотранспортних засобів',
  'Менеджер сервісного обслуговування',
  'Майстер-приймальник автомобілів',
  'Діагност з комп\'ютерного діагностування систем керування двигуном, трансмісії, ходової частини та додаткового електроустаткування',
  'Продавець-консультант автомобілів та запасних частин',
]

const REQUIREMENTS = [
//   'Фізична витривалість та хороший зір',
'Технічний інтелект та хороша пам\'ять',
'Увага, спостережливість, терпіння',
'Дисциплінованість і відповідальність',
  'Координованість і точність рухів',
  'Швидка реакція на аварійні сигнали',
  'Тонка м\'язова і слухова чутливість',
]

const KNOWLEDGE = [
    'Будова і принципи дії вузлів і агрегатів',
    'Ознаки, причини та методи усунення неполадок',
    'Читання та аналіз технологічних карт ТО',
    'Сучасне високотехнологічне діагностичне обладнання',
    'Ремонт, регулювання та випробування електроустаткування',
    'Правила техніки безпеки при обслуговуванні та ремонті',
//   'Математика, фізика, іноземна мова та суміжні дисципліни',
]

const FILES = [
  {
    title: 'Презентація про спеціальність',
    href: pdfPresentation,
  },
  {
    title: 'Опис спеціальності',
    href: poster,
  },
]

export const Specialty = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          {/* Заголовок */}
          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Спеціальність</h1>
            <p className={styles.page_subtitle}>
              Освітньо-професійна програма «Обслуговування і ремонт електричних
              та електронних систем автомобілів»
            </p>
          </div>

          {/* Інфо картка */}
          <div className={styles.info_grid}>
            <div className={styles.info_item}>
              <span className={styles.info_label}>Галузь знань</span>
              <span className={styles.info_value}>G — Інженерія, виробництво та будівництво</span>
            </div>
            <div className={styles.info_item}>
              <span className={styles.info_label}>Спеціальність</span>
              <span className={styles.info_value}>G3 — Електрична інженерія</span>
            </div>
            <div className={styles.info_item}>
              <span className={styles.info_label}>Освітній ступінь</span>
              <span className={styles.info_value}>Фаховий молодший бакалавр</span>
            </div>
            <div className={styles.info_item}>
              <span className={styles.info_label}>Заклад</span>
              <span className={styles.info_value}>ВСП ТФК ТНТУ імені Івана Пулюя</span>
            </div>
          </div>

          {/* Про спеціальність */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <GraduationCap size={20} />
              Про спеціальність
            </h2>
            <div className={styles.text_block}>
              <p>Електрообладнання та автомобільні електронні системи — невід'ємна складова сучасних автомобілів та електромобілів. Сучасні автомобілі з кожним роком все більше оснащуються складними електронними системами — з несправною електрикою транспортний засіб перетворюється в нерухому купу металу.</p>
              <p>Навіть одна помилка часом стає каменем спотикання в роботі всіх основних систем. В цьому випадку у автомобілістів виникає потреба в хорошому електромеханіку, який недорого і якісно виконує свою роботу.</p>
              <p>Складність роботи електромеханіка полягає в першу чергу в тому, що електрообладнання є дуже заплутана система з великої кількості вузлів, дуже тісно один з одним пов'язаних. Професія електромеханіка була і залишається актуальною.</p>
              <p>Різноманітних рухомих технічних засобів стає все більше, а їх обслуговування ускладнюється і вдосконалюється з кожним днем. Якісно виконана робота електромеханіка може значно знизити ризик виникнення аварійних ситуацій, гарантуючи безпеку водія і пасажирів.</p>
              <p>Електромеханіки усувають неполадки в електроустаткуванні автомобілів, які все більше обладнані бортовими комп'ютерами. Тобто вони повинні розумітись на механіці, електриці, радіотехніці та володіти комп'ютерними технологіями.</p>
              <p>На сьогодні головний критерій для відбору роботодавцями фахівців — крім документа про освіту та досвіду роботи — фактичні вміння, що дозволяють виконувати ремонт і обслуговування електронного та мікропроцесорного обладнання автомобілів.</p>
            </div>
          </section>

          {/* Два стовпці: вимоги + знання */}
          <div className={styles.two_col}>
            <section className={styles.section}>
              <h2 className={styles.section_title}>
                <Wrench size={20} />
                Вимоги до фахівця
              </h2>
              <ul className={styles.check_list}>
                {REQUIREMENTS.map((item, i) => (
                  <li key={i} className={styles.check_item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.section_title}>
                <GraduationCap size={20} />
                Фахівець повинен знати
              </h2>
              <ul className={styles.check_list}>
                {KNOWLEDGE.map((item, i) => (
                  <li key={i} className={styles.check_item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Сфера діяльності + працевлаштування */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <Briefcase size={20} />
              Сфера діяльності та працевлаштування
            </h2>
            <div className={styles.text_block}>
              <p><strong>Сфера діяльності:</strong> По закінченню ВСП ТФК ТНТУ імені Івана Пулюя наші випускники можуть обслуговувати, діагностувати, ремонтувати електричне та електронне устаткування автомобілів, бортові комп'ютерні системи керування, працюючи на державних та приватних підприємствах.</p>
              <p><strong>Місця працевлаштування:</strong> автомобільний сервіс, дилерські центри, автомобільні салони, промислові та сільськогосподарські підприємства, таксопарки, автобази, автобусні парки, підприємства автоперевезень.</p>
              <p>Професія автомеханіка забезпечить людину робочим місцем та гідним заробітком. Оплата праці спеціалістів-автомобільних електромеханіків відносно висока — перевищує середню зарплату в промисловості на 20–30%.</p>
            </div>
          </section>

          {/* Первинні посади */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <Briefcase size={20} />
              Первинні посади
            </h2>
            <div className={styles.positions_grid}>
              {POSITIONS.map((pos, i) => (
                <div key={i} className={styles.position_item}>
                  <span className={styles.position_num}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.position_text}>{pos}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Файли */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>
              <FileText size={20} />
              Документи
            </h2>
            <div className={styles.files_list}>
              {FILES.map((file) => (
                <a
                  key={file.href}
                  href={file.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.file_item}
                >
                  <FileText size={18} />
                  <span>{file.title}</span>
                </a>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className={styles.cta}>
            <p className={styles.cta_text}>
              Хочете дізнатися більше про склад викладачів циклової комісії?
            </p>
            <Link to="/composition-cc" className={styles.cta_link}>
              Склад ЦК
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </MainLayout>
  )
}