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
            notaAlterada.texto = event,target.value;
        }
    };

    return React.createElement(FormTextarea, props);
}

function criaComponenteButtonRemover(removerNota, posicao) {
    const props = {
        className: 'note__control',
        type: 'button',
        children: <i class="fa fa-times" aria-hidden="true"></i>, // children precisa virar um const
        onClick: event => removerNota(event, posicao)
    };

    return React.createElement(FormButton, props, children);

}

function criaComponenteButtonConcluido(adicionarNota, posicao, notaAlterada) {
    const ButtonConcluido = {
            className: 'note__control',
            type: 'button',
            children: 'Concluído',
            click: event => adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, posicao)
        };

        return React.createElement(FormButton, props, children)

}

function FormNotas(props) {
    let notaAlterada = new Nota(props.notaAtual.titulo, props.notaAtual.texto, props.notaAtual.editando)
    let formNotas;

    let inputTitulo = criaComponenteInputTitulo(notaAlterada);

    let textareaTexto = criaComponenteTextareaTexto(notaAlterada);

    let formProps = { className: 'note' };

    let onClick;
    let children; 

    if (props.notaAtual.editando) {        
        let buttonRemover = criaComponenteButtonRemover(props.removerNota, props.posicao);
        
        let buttonConcluido = criaComponenteButtonConcluido(props.adicionarNota, props.posicao, notaAlterada);

        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido]

    } else {
        children = [inputTitulo, textareaTexto]
        onClick = () => {
            props.editarFormulario(props.posicao);
        }
    }
    
    formNotas = React.createElement(Form, formProps, children);

    return formNotas; 
}

export default FormNotas;


