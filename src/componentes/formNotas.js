import React from 'react'
import FormInput from './componentes/formInput'
import FormTextarea from './componentes/formTextarea'
import FormButton from './componentes/formButton'
import Form from './componentes/form'
import Nota from '../nota';

// definir propriedades do componente
// criar e retornar um elemento que será o FormInput
function criaComponenteInputTitulo(notaAlterada) {
    const props = { 
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readOnly: !notaAlterada.editando,
        defaultValue: notaAlterada.titulo,
        onChange: event => {
            notaAlterada.titulo = event.target.value;
        }
    };

    return React.createElement(FormInput, props);
}

// definir propriedades do componente
// criar e retornar um elemento que será o FormTextarea
function criaComponenteTextareaTexto(notaAlterada) {
    const props = { 
        className: 'note__body',
        name: 'texto',
        rows: 5,
        placeholder: 'Criar uma nota...',
        readOnly: !notaAlterada.editando,
        defaultValue: notaAlterada.texto,
        onChange: event => {
            notaAlterada.texto = event.target.value;
        }
    };

    return React.createElement(FormTextarea, props);
}

function criaComponenteButtonRemover(removerNota, posicao) {
    const props = {
        className: 'note__control',
        type: 'button',
        // children: <i class="fa fa-times" aria-hidden="true"></i>,
        onClick: event => removerNota(event, posicao)
    };

    const children = React.createElement('i', {className: "fa fa-times", "aria-hidden": true});

    return React.createElement(FormButton, props, children);

}

function criaComponenteButtonConcluido(adicionarNota, posicao, notaAlterada) {
    const ButtonConcluido = {
            className: 'note__control',
            type: 'button',
            children: 'Concluído',
            click: event => adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, posicao)
        }

        const children = 'Concluído'

        return React.createElement(FormButton, props, children);

}
// destructuring / immutable
// extract function
// variable shorthand declaration
// function FormNotas(props)**
function FormNotas({ notaAtual, posicao, adicionarNota, removerNota, editarFormulario }) {
    let notaAlterada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando)
    
    let inputTitulo = criaComponenteInputTitulo(notaAlterada);

    let textareaTexto = criaComponenteTextareaTexto(notaAlterada);

    let props = { className: 'note' };

    let children; 

    if (notaAlterada.editando) {        
        let buttonRemover = criaComponenteButtonRemover(removerNota, posicao);
        
        let buttonConcluido = criaComponenteButtonConcluido(adicionarNota, posicao, notaAlterada);

        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido];

    } else {
        children = [inputTitulo, textareaTexto];

        props.onClick = () => editarFormulario(posicao);
    }
    
    return React.createElement(Form, props, children); 
}

export default FormNotas;


