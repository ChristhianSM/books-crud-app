
import './../styles/Item.css'

export const Item = ({title,id,raiting,image,eliminarBook}) => {
    
    const estrellas = Array(raiting).fill(0);
    
    const onChangeRating = (e) => {
        // const raiting = parseInt(e.target.value);
    }
    return (
        <div className = 'item'>
            <div className = 'image'> 
                <img  src = {'img/'+ image} width = "100%" alt = "titulo"/>
            </div>

            <div  className = "title"> {title} </div>

            <div className = "rating">
                <p>
                    {
                        estrellas.map( (estrella,index) => {
                            return <img key = {index} src ="img/star.png" width="32"></img>
                        })
                    }
                </p>
                Clasificación :
                <select value = {raiting} onChange = {onChangeRating}>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                </select>

                <div className = "actions">
                    <button 
                        onClick = { ()=>{
                            eliminarBook(id)
                    }}
                    > Eliminar</button>
                </div>
            </div>
        </div>
    )
}
