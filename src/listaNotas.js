import Nota from './nota';

class ListaNotas {
    constructor(observador) {
        this._observador = observador;
        this._listaInterna = [];
    }

    adicionaNota(novoTitulo, novoTexto) {
        let nota = new Nota(novoTitulo, novoTexto);
        this._listaInterna.push(nota);
        this._observador(this);
    }

    removeNota(posicao) {
        this._listaInterna.splice(posicao, 1);
        this._observador(this);   
    }

    editaNota(posicao) {
        this._listaInterna[posicao].editando = true;
        this._observador(this);
    }

    salvaNota(posicao, novoTitulo, novoTexto) {
        this._listaInterna[posicao].titulo = novoTitulo;
        this._listaInterna[posicao].texto = novoTexto;
        this._listaInterna[posicao].editando = false;
        this._observador(this);
    }

    pegaNota(posicao) {
        return this._listaInterna[posicao];
    }

    pegaTodos() {
        return this._listaInterna
    }

    contaTotal() {
        return this._listaInterna.length;
    }
}

export default ListaNotas;