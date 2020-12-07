import React  from 'react';
import { useForm } from 'react-hook-form';


export const PanelAdd = ({onCancel,addBook}) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data,e) => {
        
        addBook(data)
        onCancel();
        e.target.reset();
    }
    return (
        <div className ="new-item-panel-container">
            <div className = "new-item-panel">

                <form onSubmit = {handleSubmit(onSubmit)}>
                    <p>
                        <label> Titulo Del libro</label> <br/>
                        <input 
                            type = "text" 
                            name ="title" 
                            className ="input"
                            ref = {
                                register({
                                    required:{
                                        value: true,
                                        message: 'Campo obligatorio'
                                    }
                                })
                            }
                        />  
                    </p>
                    {
                        errors.title && <span>{errors.title.message}</span>
                    }
                
                    <p>
                        <label> Nombre de la imagen</label> <br/>
                        <input 
                            type = "text" 
                            name ="image" 
                            className ="input"
                            ref = {
                                register({
                                    required:{
                                        value: true,
                                        message: 'Campo obligatorio'
                                    }
                                })
                            }
                        />
                        <br></br>
                    {
                        errors.image && <span>{errors.image.message}</span>
                    }
                        
                    </p>

                    <p>
                        <label> Calsificacion</label> <br/>
                        <select 
                            name = 'raiting'
                            ref = {
                                register({
                                    required:{
                                        value: true,
                                        message: 'Hola mundo'
                                    }
                                })
                            }>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                        </select>
                    </p>
                    <input type = "submit" className ="button btn-blue" value ="Registrar libro"/>
                    <button 
                        className ="button btn-normal"
                        onClick = { () =>{
                            onCancel();
                        }}
                    >Cancelar</button>

                </form>
            </div>
        </div>
    )
}
