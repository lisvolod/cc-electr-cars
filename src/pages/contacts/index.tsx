import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import { MainLayout } from '../../layouts/main'
import photo from '@/assets/people/zaverucha.png'
import styles from './index.module.scss'

export const Contacts = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>

          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Контакти</h1>
            <p className={styles.page_subtitle}>
              Зв'яжіться з керівництвом циклової комісії
              електричних та електронних систем автомобілів
            </p>
          </div>

          {/* Картка контакту */}
          <div className={styles.card}>
            <div className={styles.card_photo_wrap}>
              <img
                src={photo}
                alt="Заверуха Руслан Романович"
                className={styles.card_photo}
              />
            </div>

            <div className={styles.card_info}>
              <div className={styles.card_role}>Голова циклової комісії</div>
              <h2 className={styles.card_name}>Заверуха Руслан Романович</h2>

              <div className={styles.card_contacts}>
                <a href="tel:+380669234881" className={styles.contact_item}>
                  <div className={styles.contact_icon}>
                    <Phone size={18} />
                  </div>
                  <div className={styles.contact_info}>
                    <span className={styles.contact_label}>Телефон</span>
                    <span className={styles.contact_value}>+38-066-923-48-81</span>
                  </div>
                </a>
                <a href="tel:+380974949197" className={styles.contact_item}>
                  <div className={styles.contact_icon}>
                    <Phone size={18} />
                  </div>
                  <div className={styles.contact_info}>
                    <span className={styles.contact_label}>Телефон</span>
                    <span className={styles.contact_value}>+38-097-494-91-97</span>
                  </div>
                </a>

                <a href="mailto:ck141eee@gmail.com" className={styles.contact_item}>
                  <div className={styles.contact_icon}>
                    <Mail size={18} />
                  </div>
                  <div className={styles.contact_info}>
                    <span className={styles.contact_label}>Email</span>
                    <span className={styles.contact_value}>ck141eee@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/rwdASCqCK4AVrGHt5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contact_item}
                >
                  <div className={styles.contact_icon}>
                    <MapPin size={18} />
                  </div>
                  <div className={styles.contact_info}>
                    <span className={styles.contact_label}>Адреса</span>
                    <span className={styles.contact_value}>
                      Аудиторії: 211В, 308 та 310<br />
                      вул. Леся Курбаса, 13, Тернопіль, 46016<br />
                      ВСП Тернопільський фаховий коледж ТНТУ імені Івана Пулюя
                    </span>
                  </div>
                  <ExternalLink size={14} className={styles.contact_external} />
                </a>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div className={styles.map_section}>
            <h2 className={styles.map_title}>
              <MapPin size={20} />
              Як нас знайти
            </h2>
            <div className={styles.map_wrap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1814.2574328986102!2d25.640805178827158!3d49.57433107276635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47303162a63761ab%3A0xe42c067aa6eb73cb!2z0KLQtdGF0L3RltGH0L3QuNC5INC60L7Qu9C10LTQtiDQotCd0KLQoyDRltC8LiDQhi4g0J_Rg9C70Y7Rjw!5e1!3m2!1suk!2sua!4v1772578623427!5m2!1suk!2sua"
                className={styles.map_iframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Технічний коледж ТНТУ ім. І. Пулюя"
              />
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  )
}