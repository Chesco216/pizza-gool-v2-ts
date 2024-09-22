import { Dispatch, SetStateAction, useState } from 'react'
import styles from './FoodModal.module.css'
import { useAppDispatch } from '../../../Auth/hooks/useStore'
import { add_to_cart } from '../../../../store/cartSlice'

type itemType = {
  name: string
  desc: string
  price: number
  cat: string
  id: number
}

interface propsType {
  item: itemType
  setIsOpen: Dispatch<SetStateAction<boolean>>
}


export const FoodModal = ({item, setIsOpen} : propsType) => {

  const [cant, setCant] = useState(0)

  const dispatch = useAppDispatch()

  //TODO: set cartSlice not just ids but all props needed

  const handleCart = () => {
    dispatch(add_to_cart({
      cat: item.cat,
      id: item.id
    }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        <label>{item.name}</label>
        <label>{item.desc}</label>
        <label>{item.price}</label>
        <div className={styles.cantContainer}>
          <span className={styles.btnSpanContainer}>
            <button className={styles.plusbtn} onClick={() => setCant(cant + 1)}>+</button>
            <label className={styles.cant}>{cant}</label>
            {
              (cant > 0) ? 
                  <button className={styles.lessbtn} onClick={() => setCant(cant -1)}>-</button>
                :
                  <button className={styles.lessbtn} onClick={() => setCant(cant -1)} disabled>-</button>

            }
          </span>
          <button 
            onClick={() => handleCart()}
            className={styles.addbtn}
          >
            Add +
          </button>
        </div>
        <span className={styles.btnContainer}>
          <button
            className={styles.btn}
            onClick={() => setIsOpen(false)}>
            close
          </button>
        </span>
      </div>
    </div>
  )
}

