import { Building2 } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

import photo_1 from '@/assets/stakeholders/01.jpg'
import photo_2 from '@/assets/stakeholders/02.jpg'
import photo_3 from '@/assets/stakeholders/03.jpg'
import photo_4 from '@/assets/stakeholders/04.jpg'
import photo_5 from '@/assets/stakeholders/05.jpg'
import photo_6 from '@/assets/stakeholders/06.jpg'
import photo_7 from '@/assets/stakeholders/07.jpg'

const COMPANIES = [
  { name: 'Тойота Центр Тернопіль «Кристал-Моторс»', type: 'Офіційний дилер Toyota' },
  { name: 'ФОП Пиндус Ю.І.', type: 'Приватне підприємство' },
  { name: 'БОШ Авто Сервіс Тернопіль', type: 'Авторизований сервісний центр Bosch' },
  { name: 'ТОВ СЕ Борднетце - Україна', type: 'Виробництво автомобільних кабельних систем' },
  { name: 'ТОВ «Автопалац Тернопіль»', type: 'Автомобільний дилерський центр' },
  { name: 'ТОВ «Джерман Авто-Тернопіль»', type: 'Сервіс та продаж автомобілів' },
  { name: 'ТОВ «Атмосфера – центр»', type: 'Автомобільний сервісний центр' },
]

const REPRESENTATIVES = [
  { name: 'Зеновій Яковенчук', role: 'Директор', company: 'ТОВ «Кристал Моторс»', photo: photo_1 },
  { name: 'Роман Стефура', role: 'Підприємець', company: 'ФОП Стефура Роман Михайлович', photo: photo_2 },
  { name: 'Сергій Закордонець', role: 'Керівник', company: 'ТОВ «Бош Сервіс Автодом»', photo: photo_3 },
  { name: 'Тетяна Пиндус', role: 'Підприємець', company: 'ФОП Пиндус Т.Б.', photo: photo_4 },
  { name: 'Яків Дутка', role: 'Спеціаліст з гарантії', company: 'ТОВ «Кристал Моторс»', photo: photo_5 },
  { name: 'Іван Сказко', role: 'Представник', company: 'ТОВ «ТерКО Авто Центр»', photo: photo_6 },
  { name: 'Ірина Гудима', role: 'Керівник СТО', company: 'ТОВ «Кристал Моторс»', photo: photo_7 },
]

export const OurStakeholders = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Наші стейкхолдери</h1>
            <p className={styles.page_subtitle}>
              Підприємства та організації — партнери циклової комісії,
              які беруть участь у підготовці фахівців та забезпечують
              практичну складову навчання
            </p>
          </div>

          {/* Компанії */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>Підприємства-партнери</h2>
            <div className={styles.companies_grid}>
              {COMPANIES.map((item, i) => (
                <div key={i} className={styles.company_card}>
                  <div className={styles.company_icon}>
                    <Building2 size={22} />
                  </div>
                  <div className={styles.company_info}>
                    <p className={styles.company_name}>{item.name}</p>
                    <p className={styles.company_type}>{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Представники */}
          <section className={styles.section}>
            <h2 className={styles.section_title}>Комунікацію із стейкхолдерами забезпечують</h2>
            <div className={styles.reps_grid}>
              {REPRESENTATIVES.map((rep, i) => (
                <div key={i} className={styles.rep_card}>
                  <div className={styles.rep_photo_wrap}>
                    <img
                      src={rep.photo}
                      alt={rep.name}
                      className={styles.rep_photo}
                    />
                  </div>
                  <div className={styles.rep_info}>
                    <p className={styles.rep_name}>{rep.name}</p>
                    <p className={styles.rep_role}>{rep.role}</p>
                    <p className={styles.rep_company}>{rep.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </MainLayout>
  )
}