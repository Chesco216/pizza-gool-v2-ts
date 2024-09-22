import { NavBar } from "../../components/NavBar/NavBar"
import styles from './Foods.module.css'
import { pizzas } from "./assets/pizzas"
import { drinks } from "./assets/drinks"
import { FoodGrid } from "./components/FoodGrid/FoodGrid"

export const Foods = ({food}: {food: string}) => {

  const foodToSend = (food == 'pizzas') ? pizzas : drinks

  return (
    <div className={styles.container}>
        <NavBar/>
      <div className={styles.content}>
        <h1 style={{width: '100%'}}>QUE ES LO QUE SE TE ANTOJA HOY?</h1>
        <FoodGrid data={foodToSend} cat={food}/>
      </div>
    </div>
  )
}

