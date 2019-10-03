import React from 'react';

/**
 * Textinput component
 * @param {label} name and id of textinput 
 * @param {id} name and id of textinput 
 * @param {onChange} onChange handler
 */
const TextInput = ({ label, id, onChange }) => {
    return <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input type="text" className="form-control" id={id} name={id} onChange={onChange} />
    </div>
}

export default TextInput;