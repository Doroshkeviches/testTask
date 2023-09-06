import React from 'react';
import styles from './CardList.module.scss'
import CardItem from '../CardItem';
const CardList = ({bookList}: any) => { // change to book[] type
    return (
        <div className={styles['card-list']}>
        {bookList ? bookList.map((it: any) => { // change to book type
            const title = it.volumeInfo.title
            const image = it.volumeInfo.imageLinks?.thumbnail
            const category = it.volumeInfo.categories?.[0]
            const authors = it.volumeInfo.authors
            return (
                <CardItem
                    key={it.id}
                    title={title}
                    image={image}
                    category={category}
                    authors={authors}
                    id={it.id}

                />
            )
        }) : <div>Ничего нет</div>}
</div>
    );
};

export default CardList;