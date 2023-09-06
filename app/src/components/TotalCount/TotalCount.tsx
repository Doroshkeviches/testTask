import React from 'react'
import styles from './TotalCount.module.scss'
import { useSelector } from 'react-redux'
import { bookListRedux, totalCountRedux } from '../../store/toolkitReducer'

export default function TotalCount() {
  const totalCount = useSelector(totalCountRedux)
  const bookList = useSelector(bookListRedux)

  return (
    <>
      {bookList?.length && <div className={styles['count']}>Книг найдено {totalCount}</div>}
    </>

  )
}
