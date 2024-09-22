import styles from './PromoCard.module.css'

export const PromoCard = () => {

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>title from promo</h2>
      <img src='' alt='promo-pipipi'/>
      <button className={styles.btn}>View</button>
    </div>
  )
}
