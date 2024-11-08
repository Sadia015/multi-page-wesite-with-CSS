import styles from './ProductSection.module.css'
import Image from 'next/image'
import { IoStar } from "react-icons/io5";
import { cardData } from "@/constant/card"

function ProductSection() {
  return (
    <div>
      <section className={styles.product}>

        {cardData.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.topImgDiv} style={{ backgroundColor: item.backgoundColor }}>
                <Image src={item.src} alt={"picture"} width={300} height={600} className={styles.cardImg}></Image>
              </div>
              <div className={styles.bottomTextDiv}>
                <div className={styles.starDiv}>
                  {[...Array(item.rating)].map((_, index) => { return <IoStar color='orange' size={32} key={index} /> })}
                </div>
                <p style={{fontSize: "1.25rem"}}>{item.heading}</p>
                <p style={{ fontWeight: 600 }}>{item.price}</p>
              </div>
            </div>
          )
        })}





      </section>
    </div>
  )
}

export default ProductSection