import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { dataHeader } from './lib/data-header'
import type { INavItem } from './lib/data-header'
import logo from '../../assets/logo.png'
import styles from './index.module.scss'

export const Header = () => {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggleDropdown = (index: number) => {
    setOpenDropdown(prev => (prev === index ? null : index))
  }

  const isDropdownActive = (items: INavItem[]) =>
    items.some(item => item.path === location.pathname)

  const mobileMenu = (
    <div className={styles.mobile_menu}>
      <nav className={styles.mobile_nav}>
        {dataHeader.map((item, index) => {
          if (item.path) {
            return (
              <Link
                key={index}
                to={item.path}
                className={`${styles.mobile_link} ${location.pathname === item.path ? styles.active : ''}`}
              >
                {item.title}
              </Link>
            )
          }

          const isOpen = openDropdown === index

          return (
            <div key={index} className={styles.mobile_dropdown}>
              <button
                className={`${styles.mobile_link} ${styles.mobile_dropdown_trigger}`}
                onClick={() => toggleDropdown(index)}
              >
                {item.title}
                <ChevronDown
                  size={16}
                  className={`${styles.chevron} ${isOpen ? styles.chevron_open : ''}`}
                />
              </button>

              <div className={`${styles.mobile_submenu} ${isOpen ? styles.mobile_submenu_open : ''}`}>
                {item.items?.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    to={sub.path!}
                    className={`${styles.mobile_sublink} ${location.pathname === sub.path ? styles.active : ''}`}
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </nav>
    </div>
  )

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>

          <Link to="/" className={styles.logo}>
            <img src={logo} alt="ЦК Електричних та електронних систем автомобілів" className={styles.logo_img} />
          </Link>

          <nav className={styles.nav} ref={dropdownRef}>
            {dataHeader.map((item, index) => {
              if (item.path) {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`${styles.nav_link} ${location.pathname === item.path ? styles.active : ''}`}
                  >
                    {item.title}
                  </Link>
                )
              }

              const isActive = item.items ? isDropdownActive(item.items) : false
              const isOpen = openDropdown === index

              return (
                <div
                  key={index}
                  className={`${styles.dropdown} ${isOpen ? styles.dropdown_open : ''}`}
                >
                  <button
                    className={`${styles.nav_link} ${styles.dropdown_trigger} ${isActive ? styles.active : ''}`}
                    onClick={() => toggleDropdown(index)}
                    aria-expanded={isOpen}
                  >
                    {item.title}
                    <ChevronDown
                      size={14}
                      className={`${styles.chevron} ${isOpen ? styles.chevron_open : ''}`}
                    />
                  </button>

                  <div className={`${styles.dropdown_menu} ${isOpen ? styles.dropdown_menu_open : ''}`}>
                    <div className={styles.dropdown_menu_inner}>
                      {item.items?.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sub.path!}
                          className={`${styles.dropdown_item} ${location.pathname === sub.path ? styles.active : ''}`}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </nav>

          <button
            className={styles.burger}
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {mobileOpen && createPortal(mobileMenu, document.body)}
    </>
  )
}