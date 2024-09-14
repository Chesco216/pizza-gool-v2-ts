import { Footer } from './components/Footer/Footer'
import { MealsGrid } from './components/Meals/MealsGrid'
import { Top } from './components/Top/Top'
import styles from './Home.module.css'

export const Home = () => {

  return (
    <div className={styles.container}>
      <Top/>
      <div className={styles.land}>
        <span>
          <h1 className={styles.landTitle}>PIZZA GOOOL</h1>
          <p className={styles.landText}>Pizza Goool, vivimos la misma pasión por el fútbol al igual que por elaborar la mejor pizza.</p>
        </span>
        <img src='../../../public/logo 2.png' className={styles.landImg}/>
      </div>
      <MealsGrid/>
      <div className={styles.contactContainer}>
        <span className={styles.ccs1}>
          <h3 className={styles.contTitle}>Get notified when we update!</h3>
          <p className={styles.contText}>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
        </span>
        <span className={styles.ccs2}>
          <input className={styles.contInput} placeholder='example@mail.com'/>
          <button className={styles.contBtn}>Get Notified</button>
        </span>
      </div>
      <Footer/>
    </div>
  )
}

