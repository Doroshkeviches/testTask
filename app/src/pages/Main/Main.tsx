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
import ErrorBoundary from '../../components/ErrorMessage/ErrorMessage'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

export default function Main() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const bookList = useSelector(bookListRedux)

    return (
        <div>
            <HeaderSearch setError={setError} setIsLoading={setIsLoading} />
            <TotalCount />
            {error ? <ErrorMessage /> : <CardList bookList={bookList} />}
            {!error && isLoading ? <Loading /> : <ButtonLoadBook setError={setError} setIsLoading={setIsLoading} />}
        </div>
    )
}
