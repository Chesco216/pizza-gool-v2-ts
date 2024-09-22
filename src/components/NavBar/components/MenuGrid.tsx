import { ReactNode, useState } from "react"
import { MenuCard } from "./MenuCard"
import { ProfSVG, PizzaSVG, DrinkSVG, CartSVG, PromoSVG } from "./SVGS"
import styles from './MenuGrid.module.css'

type cardTytpe = {
  icon: ReactNode;
  title: string;
  alerts: number
}

const cards: Array<cardTytpe> = [
  {
    icon: <ProfSVG/>,
    title: 'Your profile',
    alerts: 0,
  },
  {
    icon: <PizzaSVG/>,
    title: 'Pizzas',
    alerts: 3,
  },
  {
    icon: <DrinkSVG/>,
    title: 'Drinks',
    alerts: 5,
  },
  {
    icon: <PromoSVG/>,
    title: 'Promotions',
    alerts: 0,
  },
  {
    icon: <CartSVG/>,
    title: 'Your Cart',
    alerts: 2,
  },
]

export const MenuGrid = () => {

  const [flag, setFlag] = useState<Boolean>(false)
  // window.onstorage = () => {
  //   setFlag(!flag)
  //   console.log('pipipi')
  // }

  return (
    <>
    <div className={styles.container}>
      {
        cards.map(card => 
          <MenuCard
            key={card.title}
            svg={card.icon}
            title={card.title}
            alerts={card.alerts}
            setFlag={setFlag}
            flag={flag}
          />)
      }
    </div>
    </>
  )
}

