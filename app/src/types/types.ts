export interface Category {
    value: string,
    label: string,
}
export interface Book {
    id: string,
    volumeInfo: {
        authors?: string[],
        imageLinks: {
            thumbnail?: string,
            extraLarge?: string
        },
        categories?: string[],
        title?: string,
        description?: string,
    }
}