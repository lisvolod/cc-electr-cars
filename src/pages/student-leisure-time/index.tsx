import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, ChevronLeft, ChevronRight, X, Images } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

// Філармонія 13.03.2025'
import img_fil_1_1 from '@/assets/studentLeisure/filarm/01.jpg'
import img_fil_1_2 from '@/assets/studentLeisure/filarm/02.jpg'
import img_fil_1_3 from '@/assets/studentLeisure/filarm/03.jpg'
//Конкурс Electude Київ 2025 
import img_kyv_1_1 from '@/assets/studentLeisure/kyv/01.jpg'
import img_kyv_1_2 from '@/assets/studentLeisure/kyv/02.jpg'
import img_kyv_1_3 from '@/assets/studentLeisure/kyv/03.jpg'
import img_kyv_1_4 from '@/assets/studentLeisure/kyv/04.jpg'
import img_kyv_1_5 from '@/assets/studentLeisure/kyv/05.jpg'
import img_kyv_1_6 from '@/assets/studentLeisure/kyv/06.jpg'
import img_kyv_1_7 from '@/assets/studentLeisure/kyv/07.jpg'
import img_kyv_1_8 from '@/assets/studentLeisure/kyv/08.jpg'
import img_kyv_1_9 from '@/assets/studentLeisure/kyv/09.jpg'
import img_kyv_1_10 from '@/assets/studentLeisure/kyv/10.jpg'
import img_kyv_1_11 from '@/assets/studentLeisure/kyv/11.jpg'
import img_kyv_1_12 from '@/assets/studentLeisure/kyv/12.jpg'
import img_kyv_1_13 from '@/assets/studentLeisure/kyv/13.jpg'
import img_kyv_1_14 from '@/assets/studentLeisure/kyv/14.jpg'
import img_kyv_1_15 from '@/assets/studentLeisure/kyv/15.jpg'
import img_kyv_1_16 from '@/assets/studentLeisure/kyv/16.jpg'
import img_kyv_1_17 from '@/assets/studentLeisure/kyv/17.jpg'
import img_kyv_1_18 from '@/assets/studentLeisure/kyv/18.jpg'
import img_kyv_1_19 from '@/assets/studentLeisure/kyv/19.jpg'
import img_kyv_1_20 from '@/assets/studentLeisure/kyv/20.jpg'
import img_kyv_1_21 from '@/assets/studentLeisure/kyv/21.jpg'
import img_kyv_1_22 from '@/assets/studentLeisure/kyv/22.jpg'
import img_kyv_1_23 from '@/assets/studentLeisure/kyv/23.jpg'
import img_kyv_1_24 from '@/assets/studentLeisure/kyv/24.jpg'
import img_kyv_1_25 from '@/assets/studentLeisure/kyv/25.jpg'
//Конкурс 29.10.2024
import img_conc_2_1 from '@/assets/studentLeisure/conc2/01.jpg'
import img_conc_2_2 from '@/assets/studentLeisure/conc2/02.jpg'
import img_conc_2_3 from '@/assets/studentLeisure/conc2/03.jpg'
import img_conc_2_4 from '@/assets/studentLeisure/conc2/04.jpg'
import img_conc_2_5 from '@/assets/studentLeisure/conc2/05.jpg'
import img_conc_2_6 from '@/assets/studentLeisure/conc2/06.jpg'
import img_conc_2_7 from '@/assets/studentLeisure/conc2/07.jpg'
import img_conc_2_8 from '@/assets/studentLeisure/conc2/08.jpg'
import img_conc_2_9 from '@/assets/studentLeisure/conc2/09.jpg'
import img_conc_2_10 from '@/assets/studentLeisure/conc2/10.jpg'
import img_conc_2_11 from '@/assets/studentLeisure/conc2/11.jpg'
//Конкурс 28.10.25
import img_conc_1_1 from '@/assets/studentLeisure/conc1/01.jpg'
import img_conc_1_2 from '@/assets/studentLeisure/conc1/02.jpg'
import img_conc_1_3 from '@/assets/studentLeisure/conc1/03.jpg'
import img_conc_1_4 from '@/assets/studentLeisure/conc1/04.jpg'
import img_conc_1_5 from '@/assets/studentLeisure/conc1/05.jpg'
import img_conc_1_6 from '@/assets/studentLeisure/conc1/06.jpg'
import img_conc_1_7 from '@/assets/studentLeisure/conc1/07.jpg'
import img_conc_1_8 from '@/assets/studentLeisure/conc1/08.jpg'
import img_conc_1_9 from '@/assets/studentLeisure/conc1/09.jpg'
import img_conc_1_10 from '@/assets/studentLeisure/conc1/10.jpg'
import img_conc_1_11 from '@/assets/studentLeisure/conc1/11.jpg'
//Технологія
import img_tech_1_1 from '@/assets/studentLeisure/technologia/01.jpg'
import img_tech_1_4 from '@/assets/studentLeisure/technologia/04.jpg'
import img_tech_1_5 from '@/assets/studentLeisure/technologia/05.jpg'
import img_tech_1_6 from '@/assets/studentLeisure/technologia/06.jpg'
import img_tech_1_7 from '@/assets/studentLeisure/technologia/07.jpg'
import img_tech_1_8 from '@/assets/studentLeisure/technologia/08.jpg'
import img_tech_1_9 from '@/assets/studentLeisure/technologia/09.jpg'
import img_tech_1_10 from '@/assets/studentLeisure/technologia/10.jpg'
import img_tech_1_11 from '@/assets/studentLeisure/technologia/11.jpg'
import img_tech_1_12 from '@/assets/studentLeisure/technologia/12.jpg'
import img_tech_1_13 from '@/assets/studentLeisure/technologia/13.jpg'
import img_tech_1_14 from '@/assets/studentLeisure/technologia/14.jpg'
import img_tech_1_15 from '@/assets/studentLeisure/technologia/15.jpg'
import img_tech_1_16 from '@/assets/studentLeisure/technologia/16.jpg'
import img_tech_1_17 from '@/assets/studentLeisure/technologia/17.jpg'

//ГБЦ
import img_gbc_1_1 from '@/assets/studentLeisure/GBC/01.jpg'
import img_gbc_1_2 from '@/assets/studentLeisure/GBC/02.jpg'
import img_gbc_1_3 from '@/assets/studentLeisure/GBC/03.jpg'
import img_gbc_1_4 from '@/assets/studentLeisure/GBC/04.jpg'
import img_gbc_1_5 from '@/assets/studentLeisure/GBC/05.jpg'
import img_gbc_1_6 from '@/assets/studentLeisure/GBC/06.jpg'
import img_gbc_1_7 from '@/assets/studentLeisure/GBC/07.jpg'
import img_gbc_1_8 from '@/assets/studentLeisure/GBC/08.jpg'
//TIR
import img_tir_1_1 from '@/assets/studentLeisure/TIR/01.jpg'
import img_tir_1_2 from '@/assets/studentLeisure/TIR/02.jpg'
import img_tir_1_3 from '@/assets/studentLeisure/TIR/03.jpg'
import img_tir_1_4 from '@/assets/studentLeisure/TIR/04.jpg'
import img_tir_1_5 from '@/assets/studentLeisure/TIR/05.jpg'
import img_tir_1_6 from '@/assets/studentLeisure/TIR/06.jpg'
import img_tir_1_7 from '@/assets/studentLeisure/TIR/07.jpg'
//Bortnece
import img_brt_1_1 from '@/assets/studentLeisure/bortnece/01.jpg'
import img_brt_1_2 from '@/assets/studentLeisure/bortnece/02.jpg'
import img_brt_1_3 from '@/assets/studentLeisure/bortnece/03.jpg'
import img_brt_1_4 from '@/assets/studentLeisure/bortnece/04.jpg'
import img_brt_1_5 from '@/assets/studentLeisure/bortnece/05.jpg'
//Toyota
import img_tyt_1_1 from '@/assets/studentLeisure/toyota/01.jpg'
import img_tyt_1_2 from '@/assets/studentLeisure/toyota/02.jpg'
import img_tyt_1_3 from '@/assets/studentLeisure/toyota/03.jpg'
import img_tyt_1_4 from '@/assets/studentLeisure/toyota/04.jpg'
import img_tyt_1_5 from '@/assets/studentLeisure/toyota/05.jpg'
import img_tyt_1_6 from '@/assets/studentLeisure/toyota/06.jpg'
import img_tyt_1_7 from '@/assets/studentLeisure/toyota/07.jpg'
import img_tyt_1_8 from '@/assets/studentLeisure/toyota/08.jpg'
import img_tyt_1_9 from '@/assets/studentLeisure/toyota/09.jpg'
import img_tyt_1_10 from '@/assets/studentLeisure/toyota/10.jpg'
import img_tyt_1_11 from '@/assets/studentLeisure/toyota/11.jpg'
// SMJ
import img_smj_1_1 from '@/assets/studentLeisure/SMJ/1/1.jpg'
import img_smj_1_2 from '@/assets/studentLeisure/SMJ/1/2.jpg'
import img_smj_1_3 from '@/assets/studentLeisure/SMJ/1/3.jpg'
import img_smj_2_1 from '@/assets/studentLeisure/SMJ/2/1.jpg'
import img_smj_2_2 from '@/assets/studentLeisure/SMJ/2/2.jpg'
import img_smj_2_3 from '@/assets/studentLeisure/SMJ/2/3.jpg'
import img_smj_2_4 from '@/assets/studentLeisure/SMJ/2/4.jpg'
import img_smj_3_1 from '@/assets/studentLeisure/SMJ/3/1.jpg'
import img_smj_3_2 from '@/assets/studentLeisure/SMJ/3/2.jpg'
import img_smj_3_3 from '@/assets/studentLeisure/SMJ/3/3.jpg'
// driver-week
import img_d1_1 from '@/assets/studentLeisure/driver-week/1/1.jpg'
import img_d1_2 from '@/assets/studentLeisure/driver-week/1/2.jpg'
import img_d1_3 from '@/assets/studentLeisure/driver-week/1/3.jpg'
import img_d1_4 from '@/assets/studentLeisure/driver-week/1/4.jpg'
import img_d1_5 from '@/assets/studentLeisure/driver-week/1/5.jpg'
import img_d1_6 from '@/assets/studentLeisure/driver-week/1/6.jpg'
import img_d1_7 from '@/assets/studentLeisure/driver-week/1/7.jpg'
import img_d1_8 from '@/assets/studentLeisure/driver-week/1/8.jpg'
import img_d1_9 from '@/assets/studentLeisure/driver-week/1/9.jpg'
import img_d1_10 from '@/assets/studentLeisure/driver-week/1/10.jpg'
import img_d1_11 from '@/assets/studentLeisure/driver-week/1/11.jpg'
import img_d1_12 from '@/assets/studentLeisure/driver-week/1/12.jpg'
import img_d1_13 from '@/assets/studentLeisure/driver-week/1/13.jpg'
import img_d1_14 from '@/assets/studentLeisure/driver-week/1/14.jpg'
import img_d1_15 from '@/assets/studentLeisure/driver-week/1/15.jpg'
import img_d1_16 from '@/assets/studentLeisure/driver-week/1/16.jpg'
import img_d1_17 from '@/assets/studentLeisure/driver-week/1/17.jpg'
import img_d1_18 from '@/assets/studentLeisure/driver-week/1/18.jpg'
import img_d1_19 from '@/assets/studentLeisure/driver-week/1/19.jpg'
import img_d2_1 from '@/assets/studentLeisure/driver-week/2/1.jpg'
import img_d2_2 from '@/assets/studentLeisure/driver-week/2/2.jpg'
import img_d2_3 from '@/assets/studentLeisure/driver-week/2/3.jpg'
import img_d2_4 from '@/assets/studentLeisure/driver-week/2/4.jpg'
import img_d2_5 from '@/assets/studentLeisure/driver-week/2/5.jpg'
import img_d2_6 from '@/assets/studentLeisure/driver-week/2/6.jpg'
import img_d2_7 from '@/assets/studentLeisure/driver-week/2/7.jpg'
import img_d2_8 from '@/assets/studentLeisure/driver-week/2/8.jpg'
import img_d2_9 from '@/assets/studentLeisure/driver-week/2/9.jpg'
import img_d2_10 from '@/assets/studentLeisure/driver-week/2/10.jpg'
import img_d2_11 from '@/assets/studentLeisure/driver-week/2/11.jpg'
import img_d2_12 from '@/assets/studentLeisure/driver-week/2/12.jpg'
import img_d2_13 from '@/assets/studentLeisure/driver-week/2/13.jpg'
import img_d2_14 from '@/assets/studentLeisure/driver-week/2/14.jpg'
import img_d2_15 from '@/assets/studentLeisure/driver-week/2/15.jpg'
import img_d2_16 from '@/assets/studentLeisure/driver-week/2/16.jpg'
import img_d2_17 from '@/assets/studentLeisure/driver-week/2/17.jpg'
import img_d2_18 from '@/assets/studentLeisure/driver-week/2/18.jpg'
import img_d2_19 from '@/assets/studentLeisure/driver-week/2/19.jpg'
import img_d2_20 from '@/assets/studentLeisure/driver-week/2/20.jpg'
import img_d2_21 from '@/assets/studentLeisure/driver-week/2/21.jpg'
import img_d2_22 from '@/assets/studentLeisure/driver-week/2/22.jpg'
import img_d2_23 from '@/assets/studentLeisure/driver-week/2/23.jpg'
import img_d3_1 from '@/assets/studentLeisure/driver-week/3/1.jpg'
import img_d3_2 from '@/assets/studentLeisure/driver-week/3/2.jpg'
import img_d3_3 from '@/assets/studentLeisure/driver-week/3/3.jpg'
import img_d3_4 from '@/assets/studentLeisure/driver-week/3/4.jpg'
import img_d3_5 from '@/assets/studentLeisure/driver-week/3/5.jpg'
import img_d3_6 from '@/assets/studentLeisure/driver-week/3/6.jpg'
import img_d3_7 from '@/assets/studentLeisure/driver-week/3/7.jpg'
import img_d3_8 from '@/assets/studentLeisure/driver-week/3/8.jpg'
import img_d3_9 from '@/assets/studentLeisure/driver-week/3/9.jpg'
import img_d3_10 from '@/assets/studentLeisure/driver-week/3/10.jpg'
import img_d3_11 from '@/assets/studentLeisure/driver-week/3/11.jpg'
import img_d3_12 from '@/assets/studentLeisure/driver-week/3/12.jpg'
import img_d3_13 from '@/assets/studentLeisure/driver-week/3/13.jpg'
import img_d3_14 from '@/assets/studentLeisure/driver-week/3/14.jpg'
import img_d3_15 from '@/assets/studentLeisure/driver-week/3/15.jpg'
import img_d3_16 from '@/assets/studentLeisure/driver-week/3/16.jpg'
import img_d3_17 from '@/assets/studentLeisure/driver-week/3/17.jpg'
import img_d3_18 from '@/assets/studentLeisure/driver-week/3/18.jpg'
import img_d3_19 from '@/assets/studentLeisure/driver-week/3/19.jpg'
import img_d3_20 from '@/assets/studentLeisure/driver-week/3/20.jpg'
import img_d3_21 from '@/assets/studentLeisure/driver-week/3/21.jpg'
// forum
import img_f1 from '@/assets/studentLeisure/forum/1.jpg'
import img_f2 from '@/assets/studentLeisure/forum/2.jpg'
import img_f3 from '@/assets/studentLeisure/forum/3.jpg'
import img_f4 from '@/assets/studentLeisure/forum/4.jpg'
import img_f5 from '@/assets/studentLeisure/forum/5.jpg'
import img_f6 from '@/assets/studentLeisure/forum/6.jpg'
// avtopalace
import img_ap1 from '@/assets/studentLeisure/avtopalace/1.jpg'
import img_ap2 from '@/assets/studentLeisure/avtopalace/2.jpg'
import img_ap3 from '@/assets/studentLeisure/avtopalace/3.jpg'
import img_ap4 from '@/assets/studentLeisure/avtopalace/4.jpg'
import img_ap5 from '@/assets/studentLeisure/avtopalace/5.jpg'
import img_ap6 from '@/assets/studentLeisure/avtopalace/6.jpg'
import img_ap7 from '@/assets/studentLeisure/avtopalace/7.jpg'
import img_ap8 from '@/assets/studentLeisure/avtopalace/8.jpg'
import img_ap9 from '@/assets/studentLeisure/avtopalace/9.jpg'
import img_ap10 from '@/assets/studentLeisure/avtopalace/10.jpg'
import img_ap11 from '@/assets/studentLeisure/avtopalace/11.jpg'
import img_ap12 from '@/assets/studentLeisure/avtopalace/12.jpg'
import img_ap13 from '@/assets/studentLeisure/avtopalace/13.jpg'
import img_ap14 from '@/assets/studentLeisure/avtopalace/14.jpg'
import img_ap15 from '@/assets/studentLeisure/avtopalace/15.jpg'
import img_ap16 from '@/assets/studentLeisure/avtopalace/16.jpg'
import img_ap17 from '@/assets/studentLeisure/avtopalace/17.jpg'
import img_ap18 from '@/assets/studentLeisure/avtopalace/18.jpg'
import img_ap19 from '@/assets/studentLeisure/avtopalace/19.jpg'
import img_ap20 from '@/assets/studentLeisure/avtopalace/20.jpg'
import img_ap21 from '@/assets/studentLeisure/avtopalace/21.jpg'

interface IEvent {
  title: string
  subtitle?: string
  images: string[]
}

const EVENTS: IEvent[] = [
  {
    title: 'Конкурс Electude Київ 2025 ',
    images: [
      img_kyv_1_1, img_kyv_1_2, img_kyv_1_3, img_kyv_1_4, img_kyv_1_5, 
      img_kyv_1_6, img_kyv_1_7, img_kyv_1_8, img_kyv_1_9, img_kyv_1_10, 
      img_kyv_1_11, img_kyv_1_12, img_kyv_1_13, img_kyv_1_14, img_kyv_1_15, 
      img_kyv_1_16, img_kyv_1_17, img_kyv_1_18, img_kyv_1_19, img_kyv_1_20, 
      img_kyv_1_21, img_kyv_1_22, img_kyv_1_23, img_kyv_1_24, img_kyv_1_25, 
    ],
  },
  {
    title: 'Конкурс 28.10.2025',
    images: [
      img_conc_1_1, img_conc_1_2, img_conc_1_3, img_conc_1_4, img_conc_1_5, 
      img_conc_1_6, img_conc_1_7, img_conc_1_8, img_conc_1_9, img_conc_1_10, img_conc_1_11,  
    ],
  },
  {
    title: 'Екскурсія на ТОВ Технологія 4.04.2025',
    images: [
      img_tech_1_1, img_tech_1_4, img_tech_1_5, 
      img_tech_1_6,  img_tech_1_7,   img_tech_1_8, img_tech_1_9, img_tech_1_10,
      img_tech_1_11, img_tech_1_12, img_tech_1_13, img_tech_1_14, img_tech_1_15,
      img_tech_1_16, img_tech_1_17,
    ],
  },
  {
    title: 'Зустріч ГБЦ 03.10.2025',
    images: [
      img_gbc_1_1, img_gbc_1_2, img_gbc_1_3, img_gbc_1_4, img_gbc_1_5, 
      img_gbc_1_6,  img_gbc_1_7,   img_gbc_1_8,
    ],
  },
  {
    title: 'Зустріч TIR SERVICE Федус 20.05.2025',
    images: [
      img_tir_1_1, img_tir_1_2, img_tir_1_3, img_tir_1_4, img_tir_1_5,
      img_tir_1_6,  img_tir_1_7,
    ],
  },
  {
    title: 'Філармонія 13.03.2025',
    images: [
      img_fil_1_1, img_fil_1_2, img_fil_1_3, 
    ],
  },
  {
    title: 'Екскурсія ТОВ Борднетце Україна',
    images: [
      img_brt_1_1, img_brt_1_2, img_brt_1_3, img_brt_1_4, img_brt_1_5,
    ],
  },
  {
    title: 'Екскурсія на ТОЙОТУ 30.10.2024',
    images: [
      img_tyt_1_1, img_tyt_1_2, img_tyt_1_3, img_tyt_1_4, img_tyt_1_5,
      img_tyt_1_6, img_tyt_1_7, img_tyt_1_8,  img_tyt_1_9,  img_tyt_1_10,  img_tyt_1_11,

    ],
  },
    {
    title: 'Конкурс 29.10.2024',
    images: [
      img_conc_2_1, img_conc_2_2, img_conc_2_3, img_conc_2_4, img_conc_2_5, 
      img_conc_2_6, img_conc_2_7, img_conc_2_8, img_conc_2_9, img_conc_2_10, img_conc_2_11,  
    ],
  },
  {
    title: 'Тиждень автомобіліста',
    images: [
      img_d1_1, img_d1_2, img_d1_3, img_d1_4, img_d1_5, img_d1_6, img_d1_7,
      img_d1_8, img_d1_9, img_d1_10, img_d1_11, img_d1_12, img_d1_13, img_d1_14,
      img_d1_15, img_d1_16, img_d1_17, img_d1_18, img_d1_19, img_d2_22, img_d2_23,
      img_d2_1, img_d2_2, img_d2_3, img_d2_4, img_d2_5, img_d2_6, img_d2_7,
      img_d2_8, img_d2_9, img_d2_10, img_d2_11, img_d2_12, img_d2_13, img_d2_14,
      img_d2_15, img_d2_16, img_d2_17, img_d2_18, img_d2_19, img_d2_21,
      img_d3_1, img_d3_2, img_d3_3, img_d3_4, img_d3_5, img_d3_6, img_d3_7,
      img_d3_8, img_d3_9, img_d3_10, img_d3_11, img_d3_12, img_d3_13, img_d3_14,
      img_d3_15, img_d3_16, img_d3_17, img_d3_18, img_d3_19, img_d3_20, img_d3_21,
      img_d2_20,
    ],
  },
  {
    title: 'Конкурс SMJ 2023',
    images: [
      img_smj_1_1, img_smj_1_2, img_smj_1_3,
      img_smj_2_1, img_smj_2_2, img_smj_2_3, img_smj_2_4,
      img_smj_3_1, img_smj_3_2, img_smj_3_3,
    ],
  },
  {
    title: 'Форум СТО — Auto Expert 2023',
    images: [img_f1, img_f2, img_f3, img_f4, img_f5, img_f6],
  },
  {
    title: 'Екскурсія до автосалону «Автопалац Тернопіль»',
    subtitle: 'Ознайомлення студентів із сучасними автомобілями та умовами роботи дилерського центру',
    images: [
      img_ap1, img_ap2, img_ap3, img_ap4, img_ap5, img_ap6, img_ap7,
      img_ap8, img_ap9, img_ap10, img_ap11, img_ap12, img_ap13, img_ap14,
      img_ap15, img_ap16, img_ap17, img_ap18, img_ap19, img_ap20, img_ap21,
    ],
  },
]

// ============================================================
// LIGHTBOX
// ============================================================

interface ILightbox {
  images: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const Lightbox = ({ images, index, onClose, onPrev, onNext }: ILightbox) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  return createPortal(
    <div className={styles.lightbox} onClick={onClose}>
      <button className={styles.lightbox_close} onClick={onClose}><X size={22} /></button>
      <button
        className={`${styles.lightbox_nav} ${styles.lightbox_nav_prev}`}
        onClick={(e) => { e.stopPropagation(); onPrev() }}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className={`${styles.lightbox_nav} ${styles.lightbox_nav_next}`}
        onClick={(e) => { e.stopPropagation(); onNext() }}
      >
        <ChevronRight size={28} />
      </button>
      <img
        src={images[index]}
        alt={`Фото ${index + 1}`}
        className={styles.lightbox_img}
        onClick={(e) => e.stopPropagation()}
      />
      <div className={styles.lightbox_counter}>{index + 1} / {images.length}</div>
    </div>,
    document.body
  )
}

// ============================================================
// EVENT SECTION
// ============================================================

const EventSection = ({ event }: { event: IEvent }) => {
  const [expanded, setExpanded] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const handleClose = useCallback(() => setLightboxIndex(null), [])
  const handlePrev = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i - 1 + event.images.length) % event.images.length : 0),
    [event.images.length]
  )
  const handleNext = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i + 1) % event.images.length : 0),
    [event.images.length]
  )

  return (
    <div className={styles.event}>
      <button
        className={`${styles.event_toggle} ${expanded ? styles.event_toggle_open : ''}`}
        onClick={() => setExpanded(prev => !prev)}
      >
        <div className={styles.event_toggle_left}>
          <span className={styles.event_title}>{event.title}</span>
          {event.subtitle && (
            <span className={styles.event_subtitle}>{event.subtitle}</span>
          )}
        </div>
        <div className={styles.event_toggle_right}>
          <span className={styles.event_count}>
            <Images size={13} />
            {event.images.length} фото
          </span>
          <ChevronDown
            size={18}
            className={`${styles.chevron} ${expanded ? styles.chevron_open : ''}`}
          />
        </div>
      </button>

      <div className={`${styles.event_content} ${expanded ? styles.event_content_open : ''}`}>
        <div className={styles.gallery}>
          {event.images.map((src, idx) => (
            <button
              key={idx}
              className={styles.gallery_item}
              onClick={() => setLightboxIndex(idx)}
            >
              <img src={src} alt={`Фото ${idx + 1}`} className={styles.gallery_img} />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={event.images}
          index={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  )
}

// ============================================================
// PAGE
// ============================================================

export const StudentLeisureTime = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Студентське дозвілля</h1>
            <p className={styles.page_subtitle}>
              Заходи, екскурсії та події за участю студентів
              циклової комісії електричних та електронних систем автомобілів
            </p>
          </div>

          <div className={styles.events}>
            {EVENTS.map((event) => (
              <EventSection key={event.title} event={event} />
            ))}
          </div>

        </div>
      </div>
    </MainLayout>
  )
}