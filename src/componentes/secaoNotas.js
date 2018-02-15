import React from 'react'
import Section from './section'
import FormNotas from './formNotas'

function criaFormNotas(listaNotas, notaAtual, adicionarNota, removerNota, editarFormulario, i) {
    const props = {
        notaAtual: listaNotas.pegaNota(i),
        adicionarNota: adicionarNota, 
        removerNota: removerNota, 
        editarFormulario: editarFormulario,
        posicao: i
    }

    return React.createElement(FormNotas, props)
}

function SecaoNotas({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
    const props =  {className: 'notes'};

    const children = [];
    for (var i = 0; i < listaNotas.contaTotal(); i++) {
        let formNotas = criaFormNotas(listaNotas, notaAtual, adicionarNota, removerNota, editarFormulario, i);
        children.push(formNotas);
    }

    return React.createElement(Section, props, children);
}

export default SecaoNotas;