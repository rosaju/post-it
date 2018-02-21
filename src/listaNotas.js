import Nota from './nota.js'


class ListaNotas {
    constructor(observador) {
        this._listaInterna = []
        this._observador = observador
    }

    adicionaNota(novoTitulo, novoTexto) {
        let nota = new Nota(this._listaInterna.length, novoTitulo, novoTexto)
        this._listaInterna = this._listaInterna.concat(nota)
        this._observador(this)
    }

    removeNota(posicao) {
        this._listaInterna = this._listaInterna.filter(nota => nota.posicao !== posicao)
        this._observador(this)
    }

    editaNota(posicao) {
        this._listaInterna = this._listaInterna.map(nota => {
            if (nota.posicao === posicao) {
                return new Nota(posicao, nota.titulo, nota.texto, true)
            } else {
                return nota
            }
        })
        this._observador(this)
    }

    salvaNota(posicao, novoTitulo, novoTexto) {
        this._listaInterna = this._listaInterna.map(nota => {
            if (nota.posicao === posicao) {
                return new Nota(posicao, novoTitulo, novoTexto, false)
            } else {
                return nota
            }
        })
        this._observador(this)
    }

    pegaNota(posicao) {
        return this._listaInterna[posicao]
    }

    pegaTodos() {
        return this._listaInterna
    }

    contaTotal() {
        return this._listaInterna.length
    }
};

export default ListaNotas