import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, ChevronLeft, ChevronRight, X, Images } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

// патенти
import img_p1 from '@/assets/awards/1.png'
import img_p2 from '@/assets/awards/2.png'
import img_p3 from '@/assets/awards/3.png'
import img_p4 from '@/assets/awards/4.png'
import img_p5 from '@/assets/awards/5.png'
import img_p6 from '@/assets/awards/6.png'
import img_p7 from '@/assets/awards/7.png'
// додаткова галерея
// import img_a1 from '@/assets/achievements/1.jpg'
// import img_a2 from '@/assets/achievements/2.jpg'
// import img_a3 from '@/assets/achievements/3.jpg'
import img_a4 from '@/assets/achievements/4.jpg'
import img_a5 from '@/assets/achievements/05.jpg'
import img_a6 from '@/assets/achievements/06.jpg'
import img_a7 from '@/assets/achievements/7.jpg'
import img_a8 from '@/assets/achievements/8.jpg'
import img_a9 from '@/assets/achievements/9.jpg'
import img_a10 from '@/assets/achievements/10.jpg'
import img_a11 from '@/assets/achievements/11.jpg'
// import img_a12 from '@/assets/achievements/12.jpg'
// import img_a13 from '@/assets/achievements/13.jpg'
// import img_a14 from '@/assets/achievements/14.jpg'
// import img_a15 from '@/assets/achievements/15.jpg'

interface IImageItem {
  src: string
  caption?: string
}

interface ISection {
  title: string
  subtitle: string
  images: IImageItem[]
}

const DATA: ISection[] = [
  {
    title: 'Патенти на корисні моделі',
    subtitle: 'Зареєстровані патенти України на лабораторні стенди',
    images: [
      { src: img_p1, caption: 'Патент № 115354. Лабораторний стенд для визначення характеристик роботи електромагнітних форсунок бензинового двигуна легкового автомобіля. Опубл. 10.04.2017, Бюл. №7.' },
      { src: img_p2, caption: 'Аналіз моделей стендів для дослідження параметрів системи керування бензинових ДВЗ легкових автомобілів. Збірник «Автомобільний транспорт», Харків, 2017, вип. 41.' },
      { src: img_p3, caption: 'Патент № 123583. Лабораторний стенд для визначення робочих характеристик системи електропостачання легкового автомобіля. Опубл. 26.02.2018, Бюл. №4.' },
      { src: img_p4, caption: 'Патент № 128366. Лабораторний стенд для визначення робочих характеристик безконтактної системи запалювання легкового автомобіля. Опубл. 10.09.2018, Бюл. №17.' },
      { src: img_p5, caption: 'Патент № 132518. Лабораторний стенд для визначення робочих характеристик системи автомобільної сигналізації та центральних замків. Опубл. 25.02.2019, Бюл. №4.' },
      { src: img_p6, caption: 'Патент № 128362. Лабораторний стенд для визначення робочих характеристик системи вприску палива легкового автомобіля. Опубл. 10.09.2018, Бюл. №17.' },
      { src: img_p7, caption: 'Патент № 134078. Лабораторний стенд для визначення робочих характеристик системи освітлення та світлової сигналізації легкового автомобіля. Опубл. 25.04.2019, Бюл. №8.' },
    ],
  },
  {
    title: 'Досягнення',
    subtitle: 'Нагороди, дипломи та здобутки циклової комісії',
    images: [
    //   { src: img_a1 },
    //   { src: img_a2 },
    //   { src: img_a3 },
      { src: img_a4 },
      { src: img_a5 },
      { src: img_a6 },
      { src: img_a7 },
      { src: img_a8 },
      { src: img_a9 },
      { src: img_a10 },
      { src: img_a11 },
    //   { src: img_a12 },
    //   { src: img_a13 },
    //   { src: img_a14 },
    //   { src: img_a15 },
    ],
  },
]

// ============================================================
// LIGHTBOX
// ============================================================

interface ILightbox {
  images: string[]
  captions: (string | undefined)[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const Lightbox = ({ images, captions, index, onClose, onPrev, onNext }: ILightbox) => {
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
      {images.length > 1 && (
        <>
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
        </>
      )}
      <div className={styles.lightbox_content} onClick={(e) => e.stopPropagation()}>
        <img src={images[index]} alt={captions[index] || `Фото ${index + 1}`} className={styles.lightbox_img} />
        {captions[index] && <p className={styles.lightbox_caption}>{captions[index]}</p>}
      </div>
      <div className={styles.lightbox_counter}>{index + 1} / {images.length}</div>
    </div>,
    document.body
  )
}

// ============================================================
// SECTION
// ============================================================

const AchievementSection = ({ section }: { section: ISection }) => {
  const [expanded, setExpanded] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const images = section.images.map(i => i.src)
  const captions = section.images.map(i => i.caption)

  const handleClose = useCallback(() => setLightboxIndex(null), [])
  const handlePrev = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : 0),
    [images.length]
  )
  const handleNext = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i + 1) % images.length : 0),
    [images.length]
  )

  return (
    <div className={styles.section}>
      <button
        className={`${styles.section_toggle} ${expanded ? styles.section_toggle_open : ''}`}
        onClick={() => setExpanded(prev => !prev)}
      >
        <div className={styles.section_toggle_left}>
          <span className={styles.section_title}>{section.title}</span>
          <span className={styles.section_subtitle}>{section.subtitle}</span>
        </div>
        <div className={styles.section_toggle_right}>
          <span className={styles.section_count}>
            <Images size={13} />
            {section.images.length} фото
          </span>
          <ChevronDown
            size={18}
            className={`${styles.chevron} ${expanded ? styles.chevron_open : ''}`}
          />
        </div>
      </button>

      <div className={`${styles.section_content} ${expanded ? styles.section_content_open : ''}`}>
        <div className={styles.gallery}>
          {section.images.map((item, idx) => (
            <button
              key={idx}
              className={styles.gallery_item}
              onClick={() => setLightboxIndex(idx)}
            >
              <img
                src={item.src}
                alt={item.caption || `Фото ${idx + 1}`}
                className={styles.gallery_img}
              />
              {item.caption && (
                <span className={styles.gallery_caption}>{item.caption}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          captions={captions}
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

export const OurAchievements = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Наші досягнення</h1>
            <p className={styles.page_subtitle}>
              Патенти, нагороди та здобутки циклової комісії
              електричних та електронних систем автомобілів
            </p>
          </div>

          <div className={styles.sections}>
            {DATA.map((section) => (
              <AchievementSection key={section.title} section={section} />
            ))}
          </div>

        </div>
      </div>
    </MainLayout>
  )
}