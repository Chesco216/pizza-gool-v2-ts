import { remove_item } from '../../../../store/cartSlice'
import { useAppDispatch } from '../../../Auth/hooks/useStore'
import styles from './Item.module.css'

export const Item = ({id, name, img, cant, subtotal}: {id: number, name: string, img: string, cant: number, subtotal: number}) => {

  const dispatch = useAppDispatch()

  const handleRemove = () => {
    console.log({subtotal})
    dispatch(remove_item(id))
  }

  return (
    <>
      <div className={styles.container}>
        <img src={img} className={styles.image}/>
        <label className={styles.name}>{name}</label>
        <label className={styles.cant}>{cant}</label>
        <label className={styles.subtotal}>{subtotal} $</label>
        <button 
          className={styles.delete}
          onClick={() => handleRemove()}
        >
          remove
        </button>
      </div>
      <hr className={styles.separator}/>
    </>
  )
}

