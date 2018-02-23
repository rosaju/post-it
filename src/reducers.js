import {
     ADICIONAR_NOTA, REMOVER_NOTA, HABILITAR_EDICAO, ALTERAR_NOTA
 } from './actions'
 import Nota from './nota'

const estadoInicial = {
    notas: []
}

export default function postitApp(estadoAtual = estadoInicial, acao) {
    switch (acao.type) {
        case ADICIONAR_NOTA: 
            const novaNota = new Nota(acao.titulo, acao.texto)
                        
            return {
                notas: estadoAtual.notas.concat(novaNota)
            }

        case REMOVER_NOTA:
            return {
                notas: estadoAtual.notas.filter((notaAtual, posicao) => posicao !== acao.posicao)
            } 

        case HABILITAR_EDICAO:
            return {
                notas: estadoAtual.notas.map((notaAtual, posicao) => {
                    if(posicao === acao.posicao) {
                        return new Nota(notaAtual.titulo, notaAtual.texto, true);
                    } else {
                        return notaAtual
                    }
                })
            }
            
        case ALTERAR_NOTA:
            return {
                notas: estadoAtual.notas.map((notaAtual, posicao) => {
                    if(posicao === acao.posicao) {
                        return new Nota(acao.titulo, acao.texto, false)
                    } else {
                        return notaAtual 
                    }
                })
            }
            
        default: 
            return estadoAtual
    }
}