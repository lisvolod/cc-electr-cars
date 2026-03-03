import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, ChevronLeft, ChevronRight, X, Images } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import { dataContent } from './lib/dataContent'
import type { ICabinet } from './lib/dataContent'
import styles from './index.module.scss'

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
      <button className={styles.lightbox_close} onClick={onClose}>
        <X size={22} />
      </button>

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
        <img
          src={images[index]}
          alt={captions[index] || `Фото ${index + 1}`}
          className={styles.lightbox_img}
        />
        {captions[index] && (
          <p className={styles.lightbox_caption}>{captions[index]}</p>
        )}
      </div>

      <div className={styles.lightbox_counter}>
        {index + 1} / {images.length}
      </div>
    </div>,
    document.body
  )
}

// ============================================================
// CABINET SECTION
// ============================================================

const CabinetSection = ({ cabinet }: { cabinet: ICabinet }) => {
  const [expanded, setExpanded] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const images = cabinet.images.map(i => i.src)
  const captions = cabinet.images.map(i => i.caption)

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
    <div className={styles.cabinet}>
      <button
        className={`${styles.cabinet_toggle} ${expanded ? styles.cabinet_toggle_open : ''}`}
        onClick={() => setExpanded(prev => !prev)}
      >
        <div className={styles.cabinet_toggle_left}>
          <span className={styles.cabinet_title}>{cabinet.title}</span>
          <span className={styles.cabinet_subtitle}>{cabinet.subtitle}</span>
        </div>
        <div className={styles.cabinet_toggle_right}>
          <span className={styles.cabinet_count}>
            <Images size={13} />
            {cabinet.images.length} фото
          </span>
          <ChevronDown
            size={18}
            className={`${styles.toggle_chevron} ${expanded ? styles.toggle_chevron_open : ''}`}
          />
        </div>
      </button>

      <div className={`${styles.cabinet_content} ${expanded ? styles.cabinet_content_open : ''}`}>
        <div className={styles.gallery}>
          {cabinet.images.map((item, idx) => (
            <button
              key={idx}
              className={`${styles.gallery_item} ${item.caption ? styles.gallery_item_labeled : ''}`}
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

export const MaterialBase = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Матеріально-технічна база</h1>
            <p className={styles.page_subtitle}>
              Навчальні кабінети та лабораторії циклової комісії електричних
              та електронних систем автомобілів
            </p>
          </div>

          <div className={styles.sections}>
            {dataContent.map((cabinet) => (
              <CabinetSection key={cabinet.title} cabinet={cabinet} />
            ))}
          </div>

        </div>
      </div>
    </MainLayout>
  )
}