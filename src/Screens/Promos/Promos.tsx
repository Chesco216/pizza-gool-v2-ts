import { NavBar } from "../../components/NavBar/NavBar"
import { PromosGrid } from "./components/PromosGrid/PromosGrid"
import styles from './Promos.module.css'

export const Promos = () => {
  return (
    <div className={styles.container}>
      <NavBar/>
      <PromosGrid/>
    </div>
  )
}

