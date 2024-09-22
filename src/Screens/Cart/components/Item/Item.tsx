import styles from './Item.module.css'

export const Item = ({name, img, cant, subtotal}: {name: string, img: string, cant: number, subtotal: number}) => {
  return (
    <div className={styles.container}>
      <img src={img} className={styles.image}/>
      <label className={styles.name}>{name}</label>
      <label className={styles.cant}>{cant}</label>
      <label className={styles.subtotal}>{subtotal}</label>
    </div>
  )
}

