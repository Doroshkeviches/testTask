import React, { useState } from 'react';
import { Input, Button, Space, Select } from 'antd'
import { API_KEY, categories, url, sorting } from '../../constants';
import styles from './headerSearch.module.scss'
import {  setBookListRedux, bookListRedux } from '../../store/toolkitReducer';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
interface Props {
    setState: (data: any) => void // change to book type
    setIsLoading: (value: boolean) => void // change to book type

}
const HeaderSearch = ({ setState, setIsLoading }: Props) => {
    const dispatch = useAppDispatch()
    const bookList1 = useSelector(bookListRedux)
    const [inputValue, setInputValue] = useState<string>('')
    const [category, setCategory] = useState('all')
    const [sortingBy, setSortingBy] = useState('relevance')
    console.log(bookList1)
    const handleCategoryChange = (value: string) => {
        setCategory(value)
    }
    const handleSortingChange = (value: string) => {
        setSortingBy(value)
    }
    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSearch = () => {
        setIsLoading(true)
        if (category === 'all') {
            console.log('all')
            fetch(url + `?q=${inputValue}&orderBy=${sortingBy}&key=${API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(setBookListRedux(data.items))
                    setState(data.items)
                    setIsLoading(false)
                })
        } else {
            fetch(url + `?q=${inputValue}+subject:${category}&orderBy=${sortingBy}&key=${API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(setBookListRedux(data.items))
                    console.log(data)
                    setState(data.items)
                    setIsLoading(false)
                })
        }
    }
    return (
        <div>
            <Space.Compact>
                <Input
                    value={inputValue}
                    onChange={handleSearchInput}
                    placeholder="Basic usage"
                    onPressEnter={handleSearch}
                />
                <Button
                    onClick={handleSearch}
                    type="primary">Search</Button>
            </Space.Compact>
            <div className={styles['filter-container']}>
                <div className={styles['categories-container']}>
                    <div>Categories</div>
                    <Select
                        onChange={handleCategoryChange}
                        style={{ width: 120 }}
                        options={categories}
                        value={category}
                    />
                </div>
                <div className={styles['sorting-container']}>
                    <div>Sorting by</div>
                    <Select
                        onChange={handleSortingChange}
                        style={{ width: 120 }}
                        options={sorting}
                        value={sortingBy}
                    />
                </div>
            </div>
            Main
        </div>
    )
};

export default HeaderSearch;