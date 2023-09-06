import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_KEY, url } from '../../constants';
import Loading from '../../components/Loading';
import { Image } from 'antd';
import styles from './Card.module.scss'

const Card = () => {
    const [book, setBook] = useState<any>() // change to book type
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        setIsLoading(true)
        fetch(url + `/${id}?key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setBook(data)
                console.log(data)
            })
    }, [])

    return (
        <>
            {book &&
                <div className={styles['book']}>
                    <div className={styles['img-container']}>
                        <Image
                            width={400}
                            src={book.volumeInfo.imageLinks.extraLarge}
                        />
                    </div>
                        <div className={styles['book-data']}>
                            <div className={styles['categories']}>{book.volumeInfo.categories?.[0]}</div>
                            <div className={styles['title']}>{book.volumeInfo.title}</div>
                            <div className={styles['author-container']}>{book.volumeInfo.authors?.map((author: string) => {
                                return (
                                    <div className={styles['author']}>{author}</div>
                                    )
                                })}</div>
                                <div className={styles['description']}>{book.volumeInfo.description}</div>
                        </div>
                </div>}
            {isLoading && <Loading />}
        </>
    );
};

export default Card;