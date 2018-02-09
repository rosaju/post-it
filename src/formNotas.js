import FormInput from './componentes/formInput';
import FormTextarea from './componentes/formTextarea';
import FormButton from './componentes/formButton';
import Form from './componentes/form';

function FormNotas(props) {
    let formNotas;

    const propsInput = { //class="note__title" type="text" name="titulo" value="${'ldsd'}" placeholder="Título"
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        value: props.notaAtual.titulo,
        placeholder: 'Título'
    };

    let inputTitulo = new FormInput(propsInput);

    const propsTextarea = { // <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}</textarea>
        className: 'note__body',
        name: 'texto',
        rows: 5,
        placeholder: 'Criar uma nota...',
        innerText: props.notaAtual.texto
    };

    let textareaTexto = new FormTextarea(propsTextarea);

    let click;
    let children; 

    if (props.notaAtual.editando) {
        const propsButtonRemover = {
            className: 'note__control',
            type: 'button',
            children: '<i class="fa fa-times" aria-hidden="true"></i>',
            click: (event) => {
                props.removerNota(event, props.posicao);
            }
        };

        let buttonRemover = new FormButton(propsButtonRemover);
        
        const propsButtonConcluido = {
            className: 'note__control',
            type: 'button',
            children: 'Concluído',
            click: () => {
                props.adicionarNota(inputTitulo, textareaTexto, formNotas, props.posicao);
            }
        }
        let buttonConcluido = new FormButton(propsButtonConcluido);

        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido]

    } else {
        children = [inputTitulo, textareaTexto]
        click = () => {
            props.editarFormulario(props.posicao);
        }
    }
    
    const propsFormNotas = {
        className: 'note',
        children: children,
        click: click
    }

    formNotas = new Form(propsFormNotas);

    return formNotas; 
}

export default FormNotas;