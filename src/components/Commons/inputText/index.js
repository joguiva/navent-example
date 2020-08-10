import React from 'react';
import './style.scss';

function renderLabel (labelText) {
  return labelText ? <label>{labelText}</label> : null;
}

function InputText(props) {
  const {
    placeholder,
    defaultValue,
    handleChange,
    onEnter,
    type,
    labelText,
    error,
    errorMessage
  } = props;
  return (
    <div className={`custom-input ${error ? 'error' : ''}`}>
      {renderLabel(labelText)}
      <input
        type={type}
        value={defaultValue}
        placeholder={placeholder}
        onChange={(event) => handleChange(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            onEnter(event.target.value)
        }}}
      />
      {
        error ?
          <span className="input-error">
            {errorMessage}
          </span>
        : null
      }
    </div>

)
}

export default InputText;