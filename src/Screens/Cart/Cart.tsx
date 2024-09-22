import { NavBar } from "../../components/NavBar/NavBar"
import styles from './Cart.module.css'
import { ItemsGrid } from "./components/ItemsGrid/ItemsGrid"

export const Cart = () => {
  return (
  <div className={styles.container}>
      <NavBar/>
      <ItemsGrid/>
    </div>
  )
}

