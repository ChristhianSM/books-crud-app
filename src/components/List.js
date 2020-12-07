import React from 'react'
import { Item } from './Item'

export const List = ({dataBooks,eliminarBook}) => {
    
    return (
        <div className = "list">
            {
                dataBooks.map( book => {
                    const {id, image, raiting, title} = book;
                    return <Item 
                            key = {id}
                            id = {id}
                            title = {title}
                            raiting = {raiting}
                            image = {image}
                            eliminarBook = {eliminarBook}
                            />
                })
            }
        </div>
    )
}
