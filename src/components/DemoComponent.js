import React from 'react'

// prevedo che sia passato un oggetto proprieta al componernte
// da chi usera questo componente (app.js)
const DemoComponent = (props) => {
    return (
        <header>
            <p style={{color:'red', backgroundColor:'black'}}>{props.title}</p>
            <p style={styleHeader}>{props.title}</p>
        </header>
    )
}

//posso prevedere delle props di default
DemoComponent.defaultProps = {
    title : 'headerDefault'
}

const styleHeader = {color:'green', backgroundColor:'grey'}

/* versione con classe
Class App extend React.Component {
    render() {
        return <h1>Header</h1>
    }
}
*/

export default DemoComponent