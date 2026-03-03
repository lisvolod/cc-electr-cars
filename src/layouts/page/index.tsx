import type { ReactNode } from 'react'
import styles from './index.module.scss'

interface IPageLayout {
  title?: string
  description?: string
  sectionID?: string
  children: ReactNode
}

export const PageLayout = ({ title, description, sectionID, children }: IPageLayout) => {
  return (
    <div id={sectionID} className={styles.page}>
      <div className={styles.container}>
        {title && (
          <div className={styles.page_header}>
            <h1 className={styles.page_title}>{title}</h1>
            {description && (
              <p className={styles.page_description}>{description}</p>
            )}
          </div>
        )}
        <div className={styles.page_content}>
          {children}
        </div>
      </div>
    </div>
  )
}