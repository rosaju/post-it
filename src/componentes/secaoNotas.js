import React from 'react'
import Section from './section'
import FormNotas from './formNotas'


function criaFormNotas(posicao, notaAtual, adicionarNota, removerNota, editarFormulario) {
    const props = {
        key: posicao,
        posicao: posicao,
        notaAtual: listaNotas[posicao],
        removerNota: removerNota,
        adicionarNota: adicionarNota,
        editarFormulario: editarFormulario,
    }

    return <FormNotas {...props} />
}

function SecaoNotas({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
    const props = { className: 'notes' }

    const children = listaNotas.pegaTodos().map((notaAtual, posicao) => (
        criaFormNotas(posicao, notaAtual, adicionarNota, removerNota, editarFormulario)
    ))

    return <Section {...props}>
        {listaNotas.map((notaAtual, posicao) => 
            
        )}
}

export default SecaoNotas