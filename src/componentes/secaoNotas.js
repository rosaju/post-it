import React from 'react'
import Section from './section'
import FormNotas from './formNotas'

function criaFormNotas(i, listaNotas, notaAtual, adicionarNota, removerNota, editarFormulario ) {
    const props = {
        key: i,
        notaAtual: listaNotas.pegaNota(i),
        adicionarNota: adicionarNota, 
        removerNota: removerNota, 
        editarFormulario: editarFormulario,
        posicao: i
    }

    return React.createElement(FormNotas, props)
}

function SecaoNotas({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
    const props =  { className: 'notes' };

    const children = listaNotas.pegaTodos().map((notaAtual, i) => criaFormNotas(i, listaNotas, notaAtual, adicionarNota, removerNota, editarFormulario));

    return React.createElement(Section, props, children);
}

export default SecaoNotas;