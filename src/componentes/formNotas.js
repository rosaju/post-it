import React from 'react'
import FormInput from './formInput'
import FormTextarea from './formTextarea'
import FormButton from './formButton'
import Form from './form'
import Nota from '../nota';

// definir propriedades do componente
// criar e retornar um elemento que será o FormInput
function criaComponenteInputTitulo(notaAlterada, posicao) {
    const props = { 
        key: 'note-title',
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: notaAlterada.titulo,
        onChange: event => notaAlterada.titulo = event.target.value
    };

    if (posicao !== undefined && notaAlterada.editando) {
        props.readOnly = true
    }

    return React.createElement(FormInput, props);
}

// definir propriedades do componente
// criar e retornar um elemento que será o FormTextarea
function criaComponenteTextareaTexto(notaAlterada, posicao) {
    const props = { 
        key: 'note-text',
        className: 'note__body',
        name: 'texto',
        rows: 5,
        placeholder: 'Criar uma nota...',
        defaultValue: notaAlterada.texto,
        onChange: event => notaAlterada.texto = event.target.value
    };

    if (posicao !== undefined && notaAlterada.editando) {
        props.readOnly = true
    }

    return React.createElement(FormTextarea, props);
}

function criaComponenteButtonRemover(removerNota, posicao) {
    const props = {
        key: 'note-button',
        className: 'note__control',
        type: 'button',
        // children: <i class="fa fa-times" aria-hidden="true"></i>,
        onClick: event => removerNota(event, posicao)
    };

    const children = React.createElement('i', {className: "fa fa-times", "aria-hidden": true});

    return React.createElement(FormButton, props, children);

}

function criaComponenteButtonConcluido(adicionarNota, posicao, notaAlterada) {
    const props = {
            key: 'note-button-concluido',
            className: 'note__control',
            type: 'button',
            children: 'Concluído',
            onClick: event => adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, posicao)
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
    
    let inputTitulo = criaComponenteInputTitulo(notaAlterada, posicao);
    let textareaTexto = criaComponenteTextareaTexto(notaAlterada, posicao);
    let buttonRemover = criaComponenteButtonRemover(removerNota, posicao);        
    let buttonConcluido = criaComponenteButtonConcluido(adicionarNota, posicao, notaAlterada);

    let props = { className: 'note' };

    return (
        <Form {...props}>
            {posicao !== undefined && notaCopiada.editando && buttonRemover}
            {inputTitulo}
            {textareaTexto}
            {(posicao !== undefined || notaCopiada.editando) && buttonConcluido}
        </Form>
    )
}

export default FormNotas;


