import { useState } from "react"
import { foodArrType } from "../../assets/type"
import { FoodCard } from "../FoodCard/FoodCard"
import { FoodModal } from "../Modal/FoodModal"
import styles from './FoodGrid.module.css'

export const FoodGrid = ({data, cat}: {data: Array<foodArrType>, cat: string}) => {

  type itemType = {
    name: string
    desc: string
    price: number
    cat: string
    id: number
  }

  const[itemM, setItemM] = useState<itemType>()

  const [isOpen, setIsOpen] = useState(false)

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
            cat={cat}
            setItemM={setItemM}
            setIsOpen={setIsOpen}
          />
        )
      }
      {
        (isOpen) && <FoodModal item={itemM} setIsOpen={setIsOpen}/>
      }
    </div>
  )
}

