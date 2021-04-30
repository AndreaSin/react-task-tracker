import React from 'react'
import Button from './Button';
import {useLocation} from 'react-router-dom'

// prevedo che sia passato un oggetto proprieta al componernte
// da chi usera questo componente (app.js)
const Header = ({title, buttonClick, showAdd}) => {

    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            { location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd? 'close' : 'add'} onClick={buttonClick}/>)}
        </header>
    )
}

//posso prevedere delle props di default
Header.defaultProps = {
    title : 'Task Tracker'
}


export default Header