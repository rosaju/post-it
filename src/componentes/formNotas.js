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

    if (notaAlterada.estaVisualizando()) {
        props.readOnly = true
    }

    return <FormInput {...props} />
}

function criaComponenteButtonRemover(notaAlterada, removerNota) {
    const props = {
        key: 'note-button',
        className: 'note__control',
        type: 'button',
        // children: <i class="fa fa-times" aria-hidden="true"></i>,
        onClick: event => removerNota(event, posicao)
    };

    if (notaAlterada.estaVisualizando()) {
        props.readOnly = true
    }

    return <FormTextarea {...props} />

}

function criaComponenteButtonConcluido(notaAlterada, adicionarNota) {
    const props = {
            key: 'note-button-concluido',
            className: 'note__control',
            type: 'button',
            children: 'Concluído',
            onClick: event => adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, notaAlterada.posicao)
    }

        const children = 'Concluído'

    return <FormButton {...props}>{children}</FormButton>    
}

// destructuring / immutable
// extract function
// variable shorthand declaration
// function FormNotas(props)**
function FormNotas({ notaAtual, adicionarNota, removerNota, editarFormulario }) {
    let notaAlterada = new Nota(notaAtual.posicao, notaAtual.titulo, notaAtual.texto, notaAtual.editando)
    
    let inputTitulo = criaComponenteInputTitulo(notaAlterada);
    let textareaTexto = criaComponenteTextareaTexto(notaAlterada);
    let buttonRemover = criaComponenteButtonRemover(notaAlterada, removerNota);        
    let buttonConcluido = criaComponenteButtonConcluido(notaAlterada, adicionarNota);

    let props = { className: 'note' }
    if (notaAlterada.estaVisualizando()) {
        props.onClick = () => editarFormulario(notaAlterada.posicao)
    }

    return (
        <Form {...props}>
            {notaAlterada.estaAlterando() && buttonRemover}
            {inputTitulo}
            {textareaTexto}
            {(notaAlterada.estaCadastrando() || notaAlterada.estaAlterando()) && buttonConcluido}
        </Form>
    )
}

export default FormNotas;


