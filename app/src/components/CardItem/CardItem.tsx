import React from 'react'
import styles from './card.module.scss'
import { Link } from 'react-router-dom'
interface Props {
  title: string,
  image: string,
  category: string,
  authors: string[]

}
export default function CardItem({ title, image, category, authors }: Props) {
  return (
    <Link to={'id'} className={styles['container']}>
      <div className={styles['img-container']}>
        <img className={styles['cart-img']} src={image} alt="" />
      </div>
      <div className={styles['title']}>{title}</div>
      <div className={styles['category']}>{category}</div>

      <div className={styles['authors']}>{authors?.map((author: string) => {
        return (
          <div>{author}</div>
        )
      })}</div>
    </Link>
  )
}
