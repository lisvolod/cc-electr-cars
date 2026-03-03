import { useState, useEffect, useCallback } from 'react'
import { ChevronDown, X, ChevronLeft, ChevronRight, FileText } from 'lucide-react'
import { createPortal } from 'react-dom'
import { MainLayout } from '../../layouts/main'
import { dataContent } from './lib/dataContent.ts'
import type { ICertification } from './lib/dataContent.ts'
import styles from './index.module.scss'

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

      <img
        src={images[index]}
        alt={`Сертифікат ${index + 1}`}
        className={styles.lightbox_img}
        onClick={(e) => e.stopPropagation()}
      />

      <div className={styles.lightbox_counter}>
        {index + 1} / {images.length}
      </div>
    </div>,
    document.body
  )
}

// ============================================================
// MEMBER SECTION
// ============================================================

interface IMemberSection {
  member: ICertification
}

const MemberSection = ({ member }: IMemberSection) => {
  const [expanded, setExpanded] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const imageItems = member.items.filter(item => item.type === 'image')
  const images = imageItems.map(item => item.src!)

  const handleOpen = (index: number) => setLightboxIndex(index)
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
    <div className={styles.member_section}>
      <button
        className={`${styles.member_toggle} ${expanded ? styles.member_toggle_open : ''}`}
        onClick={() => setExpanded(prev => !prev)}
      >
        <span className={styles.member_toggle_name}>{member.name}</span>
        <div className={styles.member_toggle_right}>
          <span className={styles.member_toggle_count}>
            {imageItems.length} сертифікатів
          </span>
          <ChevronDown
            size={18}
            className={`${styles.toggle_chevron} ${expanded ? styles.toggle_chevron_open : ''}`}
          />
        </div>
      </button>

      <div className={`${styles.member_content} ${expanded ? styles.member_content_open : ''}`}>
        <div className={styles.member_content_inner}>

          {/* Текстові пункти */}
          {member.items.some(i => i.type === 'text') && (
            <ul className={styles.text_list}>
              {member.items
                .filter(i => i.type === 'text')
                .map((item, idx) => (
                  <li key={idx} className={styles.text_item}>{item.text}</li>
                ))
              }
            </ul>
          )}

          {/* PDF посилання */}
          {member.items.some(i => i.type === 'pdf') && (
            <div className={styles.pdf_list}>
              {member.items
                .filter(i => i.type === 'pdf')
                .map((item, idx) => (
                  <a
                    key={idx}
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pdf_item}
                  >
                    <FileText size={16} />
                    <span>{item.text || `Сертифікат ${idx + 1}`}</span>
                  </a>
                ))
              }
            </div>
          )}

          {/* Галерея зображень */}
          {imageItems.length > 0 && (
            <div className={styles.gallery}>
              {imageItems.map((item, idx) => (
                <button
                  key={idx}
                  className={styles.gallery_item}
                  onClick={() => handleOpen(idx)}
                >
                  <img
                    src={item.src}
                    alt={item.text || `Сертифікат ${idx + 1}`}
                    className={styles.gallery_img}
                  />
                  {item.text && (
                    <span className={styles.gallery_caption}>{item.text}</span>
                  )}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
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

export const CertificationTraining = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Підвищення кваліфікації</h1>
            <p className={styles.page_subtitle}>
              Сертифікати та підтвердження підвищення кваліфікації членів циклової комісії
            </p>
          </div>

          <div className={styles.sections}>
            {dataContent.map((member) => (
              <MemberSection key={member.name} member={member} />
            ))}
          </div>

        </div>
      </div>
    </MainLayout>
  )
}