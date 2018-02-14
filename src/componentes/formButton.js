function FormButton(props) { 
    let formButton = document.createElement('button');
    formButton.setAttribute('class', props.className);
    formButton.setAttribute('type', props.type);
    formButton.addEventListener('click', props.click);

    formButton.innerHTML = props.children;

    return formButton;
}

export default FormButton;

/* 
import React from 'react'

function FormButton(props, children) {
    return React.createElement('button', props, props.children);

}

export default FormButton; 

*/