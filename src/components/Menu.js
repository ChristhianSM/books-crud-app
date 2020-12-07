import React, { useState } from 'react';
import {Search} from './Search';
import {PanelAdd} from './PanelAdd'

import './../styles/Menu.css';

export const Menu = ({title,addBook,onSearch}) => {

const [add, setAdd] = useState(false);  

const handleAddBook = () => {
    console.log("Apretaste click");
    setAdd(true)
}

const onCancel = () => {
    setAdd(false)
}

    return (
        <div className = 'container'>

            
            <div className = 'subcontainer'>
                <div className = 'logo'>
                    {
                        title
                    }
                </div>

                <div className = "search">
                    <Search onSearch = {onSearch}/>
                </div>

                <div className = "actions">
                    <button 
                        className = "button btn-blue"
                        onClick = {handleAddBook}
                    > + Añadir Nuevo Libro</button>
                </div>
            </div>
            {
                add ?
                    <PanelAdd 
                        onCancel = {onCancel}
                        addBook = {addBook}
                    />
                :
                ""
            }
            
        </div>
    )
}
