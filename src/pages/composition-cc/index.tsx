import { useState } from 'react'
import { User, GraduationCap, BookOpen, Calendar, ChevronDown } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import { dataMembers } from './lib/dataContent'
import type { IMember } from './lib/dataContent'
import styles from './index.module.scss'

const MemberCard = ({ member }: { member: IMember }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.card}>
      <div className={styles.card_top}>

        {/* Фото або заглушка */}
        <div className={styles.card_photo}>
          {member.photo ? (
            <img src={member.photo} alt={member.name} className={styles.card_photo_img} />
          ) : (
            <div className={styles.card_photo_placeholder}>
              <User size={32} />
            </div>
          )}
        </div>

        {/* Основна інфо */}
        <div className={styles.card_info}>
          <h2 className={styles.card_name}>{member.name}</h2>
          <p className={styles.card_role}>{member.role}</p>
          <div className={styles.card_born}>
            <Calendar size={13} />
            <span>Народився: {member.born}</span>
          </div>
        </div>
      </div>

      {/* Розгортання */}
      <button
        className={`${styles.card_toggle} ${expanded ? styles.card_toggle_open : ''}`}
        onClick={() => setExpanded(prev => !prev)}
      >
        <span>Детальніше</span>
        <ChevronDown size={15} className={`${styles.toggle_chevron} ${expanded ? styles.toggle_chevron_open : ''}`} />
      </button>

      <div className={`${styles.card_details} ${expanded ? styles.card_details_open : ''}`}>
        <div className={styles.card_details_inner}>

          {/* Освіта */}
          <div className={styles.detail_section}>
            <div className={styles.detail_section_title}>
              <GraduationCap size={15} />
              <span>Освіта</span>
            </div>
            <ul className={styles.detail_list}>
              {member.education.map((item, i) => (
                <li key={i} className={styles.detail_item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Дисципліни */}
          {member.subjects && member.subjects.length > 0 && (
            <div className={styles.detail_section}>
              <div className={styles.detail_section_title}>
                <BookOpen size={15} />
                <span>Викладає дисципліни</span>
              </div>
              <ul className={styles.detail_list}>
                {member.subjects.map((item, i) => (
                  <li key={i} className={styles.detail_item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export const CompositionCC = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Склад ЦК</h1>
            <p className={styles.page_subtitle}>
              Циклова комісія електричних та електронних систем автомобілів
            </p>
          </div>

          <div className={styles.grid}>
            {dataMembers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>

        </div>
      </div>
    </MainLayout>
  )
}