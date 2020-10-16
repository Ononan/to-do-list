import React from 'react'
import Context from './context'
export default function AddDoItem(){
    const [value, setValue] = React.useState('')
    const {addDoItem} =  React.useContext(Context)
    function valueCheck(event){
        event.preventDefault()
        if(value !==""){
            addDoItem(value)
            setValue('')
        }
    }
    return(
        <form className="AddDoItem" onSubmit={(event)=> valueCheck(event)}>
            <input value={value} placeholder="Добавить задачу" onChange={ event=> setValue(event.target.value) }/>
            <button type="submit">Добавить</button>
        </form>
    )
}