import { PromoCard } from "../PromoCard/PromoCard"
import styles from './PromosGrid.module.css'

export const PromosGrid = () => {
  return (
    <div className={styles.container}>
      <PromoCard/>
    </div>
  )
}

