import React from 'react'
import Form from './form'
import FormInput from './formInput.js'
import FormTextarea from './formTextarea.js'
import FormButton from './formButton.js'
import Nota from '../nota';

// definir propriedades do componente
// criar e retornar um elemento que será o FormInput
function criaComponenteInputTitulo(notaAlterada, posicao) {
    const props = { 
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: notaAlterada.titulo,
        onChange: event => notaAlterada.titulo = event.target.value
    };

    if (posicao !== undefined && !notaAlterada.editando) {
        props.readOnly = true
    }

    return <FormInput {...props} />
}

// definir propriedades do componente
// criar e retornar um elemento que será o FormTextarea
function criaComponenteTextareaTexto(notaAlterada, posicao) {
    const props = { 
        className: 'note__body',
        name: 'texto',
        placeholder: 'Criar uma nota...',
        rows: 5,
        defaultValue: notaAlterada.texto,
        onChange: event => notaAlterada.texto = event.target.value
    };

    if (posicao !== undefined && !notaAlterada.editando) {
        props.readOnly = true
    }

    return <FormTextarea {...props} />
}

function criaComponenteButtonRemover(removerNota, posicao) {
    const props = {
        className: 'note__control',
        type: 'button',
        // children: <i class="fa fa-times" aria-hidden="true"></i>,
        onClick: event => removerNota(event, posicao)
    };

    const children = <i className='fa fa-times' aria-hidden={true} />

    return <FormButton {...props}>{children}</FormButton>

}

function criaComponenteButtonConcluido(adicionarNota, notaAlterada, posicao) {
    const props = {
        className: 'note__control',
        type: 'button',
        onClick: event => {
            adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, posicao)
        }
    }

        const children = 'Concluído'

    return <FormButton {...props}>{children}</FormButton>    
}

// destructuring / immutable
// extract function
// variable shorthand declaration
// function FormNotas(props)**
function FormNotas({ posicao, notaAtual, adicionarNota, removerNota, editarFormulario }) {
    let notaAlterada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando)
    
    let inputTitulo = criaComponenteInputTitulo(notaAlterada, posicao);
    let textareaTexto = criaComponenteTextareaTexto(notaAlterada, posicao);
    let buttonRemover = criaComponenteButtonRemover(removerNota, posicao);        
    let buttonConcluido = criaComponenteButtonConcluido(adicionarNota, notaAlterada, posicao);

    let props = { className: 'note' }
    
    if (posicao !== undefined && !notaAlterada.editando) {
        props.onClick = () => editarFormulario(posicao)
    }

    return (
        <Form {...props}>
            {posicao !== undefined && notaAlterada.editando && buttonRemover}
            {inputTitulo}
            {textareaTexto}
            {(posicao === undefined || notaAlterada.editando) && buttonConcluido}
        </Form>
    )
}

export default FormNotas;


