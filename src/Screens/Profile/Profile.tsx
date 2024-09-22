import { useNavigate } from "react-router-dom"
import { NavBar } from "../../components/NavBar/NavBar"
import { useAppSelector } from "../Auth/hooks/useStore"
import styles from './Profile.module.css'

export const Profile = () => {

  //NOTE: PIPIPI
  const user = useAppSelector(state => state.user)

  console.log({user})

  const navigate = useNavigate()

  const Lout = () => {
    localStorage.clear()
    navigate('/')  
  }

  return (
    <div className={styles.container}>
      <NavBar/>
      <div className={styles.profileContainer}>
        <span className={styles.iconContainer}>
          <img className={styles.img} src="https://res.cloudinary.com/dd0o52qeq/image/upload/v1726894041/WhatsApp_Image_2024-09-21_at_12.45.41_AM_mr1xpu.jpg" />
          <label className={styles.nameTxt}>{user.name}</label>
          <label className={styles.emailTxt}>{user.email}</label>
        </span>
        <div className={styles.otherInfo}>
          <span className={styles.titleDesc}> 
            <label className={styles.oTitle}>title</label>
            |
            <label className={styles.oDesc}>description</label>
          </span>
          <hr className={styles.hrs}/>
          <span className={styles.titleDesc}> 
            <label className={styles.oTitle}>title</label>
            |
            <label className={styles.oDesc}>description</label>
          </span>
          <hr className={styles.hrs}/>
          <span className={styles.titleDesc}> 
            <label className={styles.oTitle}>title</label>
            |
            <label className={styles.oDesc}>description</label>
          </span>
          <hr className={styles.hrs}/>
          <span className={styles.titleDesc}> 
            <label className={styles.oTitle}>title</label>
            |
            <label className={styles.oDesc}>description</label>
          </span>
          <hr className={styles.hrs}/>
          <span className={styles.titleDesc}> 
            <label className={styles.oTitle}>title</label>
            |
            <label className={styles.oDesc}>description</label>
          </span>
        </div>
        <button 
          className={styles.loutBtn}
          onClick={() => Lout()}
        >
          Log out
        </button>
      </div>
    </div>
  )
}

