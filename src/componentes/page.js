import React from 'react'
import FormNotas from './formNotas'
import SecaoNotas from './secaoNotas'
import Nota from '../nota'
import ListaNotas from '../listaNotas'

function montaFormNotas(adicionarNota, removerNota, editarFormulario) {
    const props = {
        key: 'form-note',
        notaAtual: new Nota('', ''),
        adicionarNota: adicionarNota,
        removerNota: removerNota,
        editarFormulario: editarFormulario
    }

    return React.createElement(FormNotas, props)
}

function montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        key: 'section-notes',
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

        this.atualizaPagina = this.atualizaPagina.bind(this)
        this.adicionarNota = this.adicionarNota.bind(this)
        this.removeNota = this.removeNota.bind(this)
        this.editarFormulario = this.editarFormulario.bind(this)
        
        this.state = { listaNotas: new ListaNotas(this.atualizaPagina) }
    }

    atualizaPagina(novaLista) {
        this.setState({ listaNotas: novaLista });
    }

    editarFormulario(posicao) {
        this.state.listaNotas.edita(posicao);
    }

    adicionarNota(titulo, texto, formulario, posicao) {
        if (this.state.listaNotas.pegaNota(posicao)) {
            this.state.listaNotas.salvaNota(posicao, titulo, texto);
        } else {
            this.state.listaNotas.adicionaNota(titulo, texto);
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
       
        return (
            <main {...props}>
                {formNotas}
                {sectionNotas}
            </main>
        )
    }
}

export default Page;