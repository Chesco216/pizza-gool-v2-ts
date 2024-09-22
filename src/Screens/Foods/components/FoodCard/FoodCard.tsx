import styles from './FoodCard.module.css'

type propType = {
  id: number
  available: Boolean
  img: string
  name: string
  desc: string
  price: number
}

export const FoodCard = ({id, available, img, name, desc, price} : propType) => {
  
  const handleAddCart = () => {
    console.log('this is the pizza id: ', id)
  }

  return (
    <div className={styles.container}>
      <span className={styles.avaCont}>
        {
          (available) ? 
            <>
              <Check/>
              <label className={styles.available}>Disponible</label>
            </>
          :
            <>
              <No/>
              <label className={styles.available}>Sin Stock</label>
            </>
        }
      </span>
      <img className={styles.img} src={img}/>
      <label className={styles.title}>{name}</label>
      <label className={styles.desc}>{desc}</label>
      <span className={styles.priceSection}>
        <label className={styles.price}>{price} Bs</label>
        <button className={styles.btn} onClick={handleAddCart}>Add to Cart</button>
      </span>
    </div>
  )
}

const Check = () => {
  return (
  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#69f151"/>
</svg>
  )
}

const No = () => {
  return (
  <svg fill="#f15151" width="30px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M213.333 960c0-167.36 56-321.707 149.44-446.4L1406.4 1557.227c-124.693 93.44-279.04 149.44-446.4 149.44-411.627 0-746.667-335.04-746.667-746.667m1493.334 0c0 167.36-56 321.707-149.44 446.4L513.6 362.773c124.693-93.44 279.04-149.44 446.4-149.44 411.627 0 746.667 335.04 746.667 746.667M960 0C429.76 0 0 429.76 0 960s429.76 960 960 960 960-429.76 960-960S1490.24 0 960 0" fill-rule="evenodd"/>
</svg>
  )
}
