import styles from './Top.module.css'

export const Top = () => {
  return (
    <div className={styles.container}>
      <span className={styles.logoContainer}>
        <img src='.././../../../../../public/logo 2.png' className={styles.logo}/>
        <h1>PIZZA GOOOL</h1>
      </span>
      <span className={styles.navContainer}>
        <button className={`${styles.btn} ${styles.lgn}`}>Login</button>
        <button className={`${styles.btn} ${styles.sgn}`}>Login</button>
      </span>
    </div>
  )
}

