import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import styles from './index.module.scss'

import img_1 from '@/assets/graduators/1.jpg'
import img_2 from '@/assets/graduators/2.jpg'
import img_3 from '@/assets/graduators/3.jpg'
import img_4 from '@/assets/graduators/4.jpg'
import img_5 from '@/assets/graduators/5.jpg'
import img_6 from '@/assets/graduators/6.jpg'
import img_7 from '@/assets/graduators/7.jpg'

const IMAGES = [
  { src: img_1 },
  { src: img_2 },
  { src: img_3 },
  { src: img_4 },
  { src: img_5 },
  { src: img_6 },
  { src: img_7 },
]

// ============================================================
// LIGHTBOX
// ============================================================

interface ILightbox {
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const Lightbox = ({ index, onClose, onPrev, onNext }: ILightbox) => {
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
        src={IMAGES[index].src}
        alt={`Захист дипломного проекту ${index + 1}`}
        className={styles.lightbox_img}
        onClick={(e) => e.stopPropagation()}
      />
      <div className={styles.lightbox_counter}>{index + 1} / {IMAGES.length}</div>
    </div>,
    document.body
  )
}

// ============================================================
// PAGE
// ============================================================

export const OurGraduates = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const handleClose = useCallback(() => setLightboxIndex(null), [])
  const handlePrev = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i - 1 + IMAGES.length) % IMAGES.length : 0),
    []
  )
  const handleNext = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i + 1) % IMAGES.length : 0),
    []
  )

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Наші випускники</h1>
            <p className={styles.page_subtitle}>
              Захисти дипломних проектів випускників освітньо-професійної програми
              «Обслуговування і ремонт електричних та електронних систем автомобілів»
            </p>
          </div>

          <div className={styles.gallery}>
            {IMAGES.map((item, idx) => (
              <button
                key={idx}
                className={styles.gallery_item}
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={item.src}
                  alt={`Захист дипломного проекту ${idx + 1}`}
                  className={styles.gallery_img}
                />
              </button>
            ))}
          </div>

        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </MainLayout>
  )
}