import { NavBar } from "../../components/NavBar/NavBar"
import { useAppSelector } from "../Auth/hooks/useStore"
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

