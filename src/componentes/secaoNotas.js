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

    return <FormNotas {...props} />
}

function SecaoNotas({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
    const props =  { className: 'notes' };

    const children = listaNotas.pegaTodos().map((notaAtual, i) => criaFormNotas(i, listaNotas, notaAtual, adicionarNota, removerNota, editarFormulario));

    return <Section {...props}>
        {listaNotas.pegaTodos().map((notaAtual, i) => (
            criaFormNotas(i, listaNotas, notaAtual, adicionarNota, removerNota, editarFormulario
        ))}

    </Section>
}

export default SecaoNotas;