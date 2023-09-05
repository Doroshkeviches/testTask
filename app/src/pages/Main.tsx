import React, { useEffect, useState } from 'react'
import styles from './main.module.scss'

export default function Main() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=technology')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>Main</div>
    )
}
