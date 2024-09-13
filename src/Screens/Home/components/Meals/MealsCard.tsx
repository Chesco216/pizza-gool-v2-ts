import styles from './MealsCard.module.css'

type propsTypes = {
  img: string,
  name:string,
  desc: string
}

export const MealsCard = ({img, name, desc}: propsTypes)=> {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={img}/>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.text}>{desc}</p>
    </div>
  )
}

