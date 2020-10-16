import React from 'react'
import Context from './context.js'
export default function DoItem({doItem}){
    const { changeCheckbox, removeItem} = React.useContext(Context)
    let done = ""
    if(doItem.check) done = "done"
    return(
        <div className="DoItem">
            <div>
            <input type="checkbox" checked={doItem.check} onChange={ () => changeCheckbox(doItem.id) }/>
            <span className={done}>{doItem.text}</span>
            </div>
            <button className="buttonBusket" onClick={ () => removeItem(doItem.id)}></button>
        </div>
    )
}