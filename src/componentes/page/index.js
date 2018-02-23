import React from 'react'
import Nota from '../../nota'
import ListaNotas from '../../listaNotas'
import FormNotas from '../formNotas'
import SecaoNotas from '../secaoNotas'
import './page.css'


function montaFormNotas(adicionarNota, removeNota, editarFormulario) {
    const props = {
        notaAtual: new Nota(undefined, '', ''), 
        adicionarNota, 
        removeNota, 
        editarFormulario
    }

    return <FormNotas {...props} />
}

function montaSecaoNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        listaNotas, 
        adicionarNota,
        removerNota, 
        editarFormulario
    }

    return <SecaoNotas {...props} />
}

/*class Page extends React.Component {
    constructor(props) {
        super(props)
        this.atualizaPagina = this.atualizaPagina.bind(this);
        this.adicionarNota = this.adicionarNota.bind(this);
        this.removeNota = this.removeNota.bind(this);
        this.editarFormulario = this.editarFormulario.bind(this);
        this.state = { listaNotas: new ListaNotas(this.atualizaPagina) }
    }

    atualizaPagina(novaLista) {
        this.setState({ listaNotas: novaLista })
    }

    adicionarNota(titulo, texto, posicao) {
        if (this.state.listaNotas.pegaNota(posicao)) {
            this.state.listaNotas.salvaNota(posicao, titulo, texto)
        } else {
            this.state.listaNotas.adicionaNota(titulo, texto)
        }
    }

    removeNota(posicao) {
        this.state.listaNotas.removeNota(posicao)
    }

    editarFormulario(posicao) {
        this.state.listaNotas.editaNota(posicao)
    }*/

    function Page({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
        const props = { className: 'container' }
        let formNotas = montaFormNotas(adicionarNota, removerNota, editarFormulario)
        let SecaoNotas = montaSecaoNotas(listaNotas, adicionarNota, removerNota, editarFormulario)

        return (
            <main {...props}>
                {formNotas}
                {SecaoNotas}
            </main>
        )
    }


export default Page