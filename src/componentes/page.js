import React from 'react'
import FormNotas from './formNotas'
import SecaoNotas from './secaoNotas'
import Nota from '../nota'
import ListaNotas from '../listaNotas'

function montaFormNotas(adicionarNota, removerNota, editarFormulario) {
    const props = {
        notaAtual: new Nota('', ''),
        adicionarNota: adicionarNota,
        removerNota: removerNota,
        editarFormulario: editarFormulario
    }

    return React.createElement(FormNotas, props)
}

function montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        listaNotas: listaNotas,
        adicionarNota: adicionarNota,
        removerNota: removerNota,
        editarFormulario: editarFormulario
    }

    return React.createElement(SecaoNotas, props)
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            listaNotas: new ListaNotas(this.atualizaPagina)
        }
    }

    atualizaPagina(novaLista) {
        console.log('Quem é this?', this);
        this.setState({ listaNotas: novaLista });
    }

    editarFormulario(posicao) {
        this.listaNotas.edita(posicao);
    }

    adicionarNota(inputTitulo, textareaTexto, formulario, posicao) {
        if (this.listaNotas.pegaNota(posicao)) {
            this.listaNotas.salvaNota(posicao, inputTitulo.value, textareaTexto.value);
        } else {
            this.listaNotas.adicionaNota(inputTitulo.value, textareaTexto.value);
            formulario.reset();
        }
    }

    removeNota(evento, posicao) {
        evento.stopPropagation();
        this.listaNotas.removeNota(posicao);
    }

    render() {
        const props = { className: 'container' }

        let formNotas = montaFormNotas(this.adicionarNota, this.removerNota, this.editarFormulario)
        let sectionNotas = montaSectionNotas(this.state.listaNotas, this.adicionarNota, this.removerNota, this.editarFormulario)
        const children = [formNotas, sectionNotas]


        return React.createElement('main', props, children)

    }
}

export default Page;