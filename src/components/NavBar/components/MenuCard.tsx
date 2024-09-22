import { Dispatch, ReactNode, SetStateAction } from "react"
import styles from './MenuCard.module.css'
import { useNavigate } from "react-router-dom"

export const MenuCard = ({ svg, title, alerts, flag, setFlag } 
  : 
  { svg: ReactNode, title: string, alerts: number, setFlag: Dispatch<SetStateAction<boolean>>, flag: Boolean }) => {

  const op = localStorage.getItem('menuOp')
  const cn = (op == title) ? styles.contFocused : ''
  const navigate = useNavigate()

  const setMenuOpLS = () => {
    localStorage.setItem('menuOp', title)
    const pipipi = localStorage.getItem('menuOp') 
    const red = (pipipi) ? pipipi : '/'
    //PERF: I'm not sure it has to be this way but ima tryhard
    setFlag(!flag)
    const redURL = red.replace(' ', '').toLowerCase()
    navigate(`/${redURL}`)
  }

  return (
    <div 
      className={`${styles.container} ${cn}`}
      onClick={() => setMenuOpLS()}
    >
      <div>{svg}</div>
      <label>{title}</label>
      {
        (alerts != 0) && <label className={styles.alerts}>{alerts}</label>
      }
    </div>
  )
}

