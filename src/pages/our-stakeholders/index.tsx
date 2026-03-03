import { Building2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

const STAKEHOLDERS = [
  {
    name: 'Тойота Центр Тернопіль «Кристал-Моторс»',
    type: 'Офіційний дилер Toyota',
  },
  {
    name: 'ФОП Пиндус Ю.І.',
    type: 'Приватне підприємство',
  },
  {
    name: 'БОШ Авто Сервіс Тернопіль',
    type: 'Авторизований сервісний центр Bosch',
  },
  {
    name: 'ТОВ СЕ Борднетце - Україна',
    type: 'Виробництво автомобільних кабельних систем',
  },
  {
    name: 'ТОВ «Автопалац Тернопіль»',
    type: 'Автомобільний дилерський центр',
  },
  {
    name: 'ТОВ «Джерман Авто-Тернопіль»',
    type: 'Сервіс та продаж автомобілів',
  },
  {
    name: 'ТОВ «Атмосфера – центр»',
    type: 'Автомобільний сервісний центр',
  },
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

          <div className={styles.grid}>
            {STAKEHOLDERS.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.card_icon}>
                  <Building2 size={22} />
                </div>
                <div className={styles.card_info}>
                  <p className={styles.card_name}>{item.name}</p>
                  <p className={styles.card_type}>{item.type}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <p className={styles.cta_text}>
              Наші випускники успішно працюють у цих та інших компаніях регіону
            </p>
            <Link to="/our-graduates" className={styles.cta_link}>
              Наші випускники
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </MainLayout>
  )
}