import React from 'react'

const FormTextarea = props => React.createElement('textarea', props)

export default FormTextarea

/*
function FormTextarea(props) { //<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}</textarea>
    let formTextarea = document.createElement('textarea');
    formTextarea.setAttribute('class', props.className);
    formTextarea.setAttribute('name', props.name);
    formTextarea.setAttribute('rows', props.rows);
    formTextarea.setAttribute('placeholder', props.pleceholder);
    formTextarea.innerText = props.innerText;

    return formTextarea;
}

export default FormInput;
*/
