const ADICIONAR_NOTA = 'ADICIONAR_NOTA'
const REMOVER_NOTA = 'REMOVER_NOTA'
const HABILITAR_EDICAO = 'HABILITAR_EDICAO'
const ALTERAR_NOTA = 'ALTERAR_NOTA'

export function adicionarNota(titulo, texto) {
  return {
    type: ADD_NOTA,
    titulo,
    texto
  }
}

export function removerNota(posicao) {
    return {
        type: REMOVER_EDICAO,
        posicao
    }
}

export function habilitarEdicao(posicao) {
    return {
        type: HABILITAR_EDICAO,
        posicao
    }
}

export function alterarNota(titulo, texto, posicao) {
    return {
        type: ALTERAR_NOTA,
        titulo,
        texto,
        posicao
    }
}





