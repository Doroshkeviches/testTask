import React from 'react'
import styles from './ButtonLoadBook.module.scss'
import { Button } from 'antd';
import { API_KEY, url } from '../../constants';
import { useAppDispatch } from '../../store';
import { bookListRedux, searchParamsRedux, setBookListRedux, setSearchParamsRedux, setTotalCountRedux } from '../../store/toolkitReducer';
import { useSelector } from 'react-redux';

interface Props {
    setIsLoading: (value: boolean) => void
}
export default function ButtonLoadBook({ setIsLoading }: Props) {
    const { title, category, sortingBy, startIndex } = useSelector(searchParamsRedux)
    const bookList = useSelector(bookListRedux)

    const dispatch = useAppDispatch()
    const maxResults = 30

    const handleClick = () => {
        console.log(url + `?q=${title}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${sortingBy}&key=${API_KEY}`)
        setIsLoading(true)
        fetch(url + `?q=${title}${category === 'all' ? '' : `+subject:${category}`}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${sortingBy}&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setTotalCountRedux(data.totalItems))
                dispatch(setBookListRedux([...bookList, ...data.items]))
                dispatch(setSearchParamsRedux({
                    title,
                    category,
                    sortingBy,
                    startIndex: startIndex + maxResults
                }))
                setIsLoading(false)
            })
    }
    return (
        <>
            {
                bookList?.length ? <div className={styles['button']}>
                    <Button
                        onClick={handleClick}
                        type="primary">Load more...</Button>
                </div>
                :
                null
            }
        </>

    )
}

