import React from 'react'

export default (props, children) => React.createElement('button', props, children)


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