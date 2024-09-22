import { foodArrType } from "../../assets/type"
import { FoodCard } from "../FoodCard/FoodCard"
import styles from './FoodGrid.module.css'

export const FoodGrid = ({data}: {data: Array<foodArrType>}) => {
  return (
    <div className={styles.container}>
      {
        data.map(pizza => 
          <FoodCard 
            key={pizza.id}
            id={pizza.id}
            available={pizza.available}
            img={pizza.img}
            name={pizza.name}
            desc={pizza.desc}
            price={pizza.price}
          />
        )
      }
    </div>
  )
}

