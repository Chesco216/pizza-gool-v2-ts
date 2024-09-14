import styles from './Top.module.css'
import { useNavigate } from 'react-router-dom'

export const Top = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <span className={styles.logoContainer}>
        <img src='.././../../../../../public/logo 2.png' className={styles.logo}/>
        <h1>PIZZA GOOOL</h1>
      </span>
      <span className={styles.navContainer}>
        <button
          className={`${styles.btn} ${styles.lgn}`}
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className={`${styles.btn} ${styles.sgn}`}
          onClick={() => navigate('/signup')}
        >
          Sign up
        </button>
      </span>
    </div>
  )
}

