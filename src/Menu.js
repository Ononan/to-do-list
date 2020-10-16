import React from 'react'
import Context from './context'
export default function Menu() {
    const {renderList} = React.useContext(Context)
    // const [tabIndex, setTabIndex] = React.useState('1')
    
    function render(event){
        for (const iterator of document.getElementsByClassName("button_menu")) {
            iterator.className ="button_menu"
        }
        event.target.className = "button_menu select_button_menu"
        renderList(event.target.tabIndex)
    }
    return (
        <div className="menu">
            <button className="button_menu select_button_menu" tabIndex="1" onClick={(event)=>render(event)} >Все</button>
            <button className="button_menu" tabIndex="2" onClick={(event)=>render(event)}>Выполненные</button>
            <button className="button_menu" tabIndex="3" onClick={(event)=>render(event)}>Не выполненные</button>
        </div>
    )
} 