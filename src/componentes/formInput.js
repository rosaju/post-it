import React from 'react'

export default props => React.createElement('input', props)

/*
function FormInput(props) { // <input class="note__title" type="text" name="titulo" value="${notaAtual.titulo}" placeholder="Título">
    let formInput = document.createElement('input');
    formInput.setAttribute('class', props.className);
    formInput.setAttribute('type', props.type);
    formInput.setAttribute('name', props.name);
    formInput.setAttribute('value', props.value);
    formInput.setAttribute('placeholder', props.placeholder);

    if (props.readonly) {
        form.setAttribute('readonly', true);
    }

    return formInput;
    
}

export default FormInput;
*/