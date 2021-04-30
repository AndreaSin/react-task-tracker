import React from 'react'
import PropType from 'prop-types';

const Button = ({color,text, onClick}) => {

    return (
        <button onClick={onClick} 
                className='btn' 
                style={{backgroundColor:color}}>
                {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblu',
    text: 'add'
}

Button.propType = {
    text: PropType.string,
    color: PropType.string,
    onClick: PropType.func.isRequired 
}



export default Button