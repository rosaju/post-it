import {
     ADICIONAR_NOTA, REMOVER_NOTA, HABILITAR_EDICAO, ALTERAR_NOTA
 } from './action'
 import Nota from './nota'

const estadoInicial = {
    nota: []
}

export default function postitApp(estadoAtual = estadoInicial, acao) {
    switch (acao.type) {
        case ADICIONAR_NOTA: 
            const novaNota = new Nota(acao.titulo, acao.texto)
            const estadoNovo = {
                notas:estadoAtual.notas.concat(novaNota)
            }
            return estadoNovo; 

        case REMOVER_NOTA:
            const estadoNovo = {
                notas: estadoAtual.notas.filter((nota, posicao) => {
                    return posicao !== acao.posicao
                })
            }
            return estadoNovo; 

        case HABILITAR_EDICAO:
            const estadoNovo = {
                notas: estadoAtual.notas.map((nota, posicao) => {
                    if(posicao === acao.posicao) {
                        return new Nota(nota.titulo, nota.texto, true);
                    } else {
                        return nota
                    }
                })
            }
            return estadoNovo;

        case ALTERAR_NOTA:
            const estadoNovo = {
                notas: estadoAtual.notas.map((nota, posicao) => {
                    if(posicao === acao.posicao) {
                        return new Nota(nota.titulo, nota.texto, false)
                    } else {
                        return nota 
                    }
                })
            }
            return estadoNovo; 

        default: 
            return state
    }
}