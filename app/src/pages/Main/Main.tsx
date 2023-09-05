import React, { useEffect, useState } from 'react'
import styles from './main.module.scss'
import HeaderSearch from '../../components/headerSearch'
import Loading from '../../components/Loading'
import CardItem from '../../components/CardItem'
import CardList from '../../components/CardList'
export default function Main() {
    const [bookList, setBookList] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <div>
            <HeaderSearch setState={setBookList} setIsLoading={setIsLoading} />
            <CardList bookList={bookList} />
            {isLoading && <Loading />}
        </div>
    )
}
