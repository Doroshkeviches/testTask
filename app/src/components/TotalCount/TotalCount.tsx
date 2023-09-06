import React from 'react'
import styles from './TotalCount.module.scss'
import { useSelector } from 'react-redux'
import { totalCountRedux } from '../../store/toolkitReducer'

export default function TotalCount() {
    const totalCount = useSelector(totalCountRedux)

  return (
    <div>Книг найдено {totalCount}</div>

  )
}
