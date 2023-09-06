import React, { useEffect, useState } from 'react'
import styles from './main.module.scss'
import HeaderSearch from '../../components/headerSearch'
import Loading from '../../components/Loading'
import CardItem from '../../components/CardItem'
import CardList from '../../components/CardList'
import ButtonLoadBook from '../../components/ButtonLoadBooks'
import { bookListRedux, totalCountRedux } from '../../store/toolkitReducer'
import { useSelector } from 'react-redux';
import TotalCount from '../../components/TotalCount'

export default function Main() {
    // const [bookList, setBookList] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const bookList = useSelector(bookListRedux)

    return (
        <div>
            <HeaderSearch setIsLoading={setIsLoading} />
            <TotalCount/>
            <CardList bookList={bookList} />
            {isLoading ? <Loading /> : <ButtonLoadBook setIsLoading={setIsLoading}/>}
        </div>
    )
}
