import React from 'react'

export const Search = ({onSearch}) => {

    const onChangeEvent = (e) => {
        const query = e.target.value.toString().toLowerCase();
        onSearch(query)
    }
    return (
        <div>
                <input type = 'text' onChange = {onChangeEvent}></input> 
        </div>
    )
}
