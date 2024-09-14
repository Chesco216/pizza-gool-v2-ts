import { Mail } from '../../../../components/SVGS/Mail'
import { Phone } from '../../../../components/SVGS/Phone'
import { Place } from '../../../../components/SVGS/Place'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.infoSpanContainer}>
          <Place w={35} h={35} c='#4e515f'/>
          <label>Av. Jaimes Freyre 1992 (Frente al Mercado Bolivar) La Paz, Bolivia, Bolivia</label>
        </span>
        <span className={styles.infoSpanContainer}>
          <Mail w={35} h={35} c='#4e515f'/>
          <label>pizzagoool.adm@gmail.com</label>
        </span>
        <span className={styles.infoSpanContainer}>
          <Phone w={35} h={35} c='#4e515f'/>
          <label>7979878</label>
        </span>
      </div>
      {
        // TODO: add social media SVGS
      }
    </div>
  )
}

