import React from 'react'
import Section from './section'
import FormNotas from './formNotas'


function criaFormNotas(posicao, notaAtual, adicionarNota, removerNota, editarFormulario) {
    const props = {
        posicao,
        notaAtual,
        removerNota,
        adicionarNota,
        editarFormulario,
    }

    return <FormNotas key={posicao} {...props} />
}

function SecaoNotas({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
    const props = { className: 'notes' }

    const children = listaNotas.map((notaAtual, posicao) => (
        criaFormNotas(posicao, notaAtual, adicionarNota, removerNota, editarFormulario)
    ))

    return <Section {...props}>{children}</Section>
}

export default SecaoNotas