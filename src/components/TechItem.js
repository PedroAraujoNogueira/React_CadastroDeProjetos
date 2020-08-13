import React from 'react'
import PropTypes from 'prop-types'

function TechItem({ tech, onDelete }/* ou props */) {
    return ( 
    <li>
        {/* {props.tech} */}
        {tech}
        <button onClick={onDelete} type="button">Remover</button>
    </li>)
}

TechItem.defaultProps = {
    tech: 'Oculto'
}

TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default TechItem;