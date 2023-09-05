import React from 'react'
import styles from './card.module.scss'
export default function Card() {
  return (
    <div className={styles['container']}>
      <div className={styles['img-container']}>
        <img className={styles['cart-img']} src="https://marketplace.canva.com/EADx4IPoPNo/1/0/1024w/canva-обложка-книги-в-жанре-триллера-с-изображением-монохромной-фотографии-леса-iRBldJ_jyLw.jpg" alt="" />
      </div>
<div className={styles['title']}>Book name</div>
<div className={styles['author']}>Book author</div>
    </div>
  )
}
