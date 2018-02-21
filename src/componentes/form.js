import React from 'react'

const Form = props => React.createElement('form', props)

export default Form

/*
function Form(props); {
    let form = document.forms('form');
    form.setAttribute('class', props.className);
    form.setAttribute('editando', props.editando);

    for (var i = 0; i < props.children.length; i++) {
        form.appendchild(props.children[i]);

    } 

    if (props.click) {
        form.addEventListener("click", props.click);
    }

    return form;

}

export default Form;
*/