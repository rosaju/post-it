import React from 'react'

const FormButton = props => React.createElement('button', props)

export default FormButton


/* 
function FormButton(props) { 
    let formButton = document.createElement('button');
    formButton.setAttribute('class', props.className);
    formButton.setAttribute('type', props.type);
    formButton.addEventListener('click', props.click);

    formButton.innerHTML = props.children;

    return formButton;
}

export default FormButton;
*/ 