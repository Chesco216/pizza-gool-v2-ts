import { MenuGrid } from './components/MenuGrid'
import styles from './NavBar.module.css'

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <span className={styles.logoContainer}>
        <img src='.././../../../../../public/logo 2.png' className={styles.logo}/>
        <h1 className={styles.logoText}>PIZZA GOOOL</h1>
      </span>
      <MenuGrid/>
    </div>
  )
}

