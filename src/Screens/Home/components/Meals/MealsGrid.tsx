import { Pizzas } from './Meals'
import { MealsCard } from './MealsCard'
import styles from './MealsGrid.module.css'

export const MealsGrid = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Special meals of the day</h2>
      <p className={styles.text}>Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin</p>
      <div className={styles.cardsContainer}>
        {
          Pizzas.map(item => 
            <MealsCard 
              key={item.id}
              img={item.img}
              name={item.name}
              desc={item.desc}
            />
          )
        }
      </div>
    </div>
  )
}

