import { Item } from '../Item/Item'
import styles from './ItemsGrid.module.css'

export const ItemsGrid = () => {

  //WARN: delete object later
  const item = {
    name: 'Mexicana',
    img: 'https://png.pngtree.com/png-clipart/20230417/original/pngtree-gourmet-pizza-cartoon-png-image_9061095.png',
    cant: 2,
    subtotal: 2*45
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <label className={styles.item}>Item</label>
        <label className={styles.cant}>Quantity</label>
        <label className={styles.subtotal}>Subtotal</label>
      </div>
      <hr className={styles.separator}/>
      <Item name={item.name} img={item.img} cant={item.cant} subtotal={item.subtotal}/>
    </div>
  )
}

