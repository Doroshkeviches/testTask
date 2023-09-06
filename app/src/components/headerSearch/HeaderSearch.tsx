import React, { useState } from 'react';
import { Input, Button, Space, Select } from 'antd'
import { API_KEY, categories, url, sorting } from '../../constants';
import styles from './headerSearch.module.scss'
import { setBookListRedux, bookListRedux, setSearchParamsRedux, searchParamsRedux, setTotalCountRedux } from '../../store/toolkitReducer';
import { useAppDispatch } from '../../store';
interface Props {
    setIsLoading: (value: boolean) => void // change to book type

}
const HeaderSearch = ({ setIsLoading }: Props) => {
    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState<string>('')
    const [category, setCategory] = useState('all')
    const [sortingBy, setSortingBy] = useState('relevance')
    const handleCategoryChange = (value: string) => {
        setCategory(value)
    }
    const handleSortingChange = (value: string) => {
        setSortingBy(value)
    }
    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const defaultMaxResult = 10
    const handleSearch = () => {
        setIsLoading(true)
            fetch(url + `?q=${inputValue}${category === 'all' ? '' : `+subject:${category}`}&startIndex=0&orderBy=${sortingBy}&key=${API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(setTotalCountRedux(data.totalItems)) 
                    dispatch(setSearchParamsRedux({
                        title: inputValue,
                        category,
                        sortingBy,
                        startIndex: defaultMaxResult
                    }))
                    dispatch(setBookListRedux(data.items))
                    setIsLoading(false)
                })
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
        </div>
    )
};

export default HeaderSearch;