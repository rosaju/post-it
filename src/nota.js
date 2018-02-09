class Nota {
    constructor(novoTitulo, novoTexto) {
        this._titulo = novoTitulo;
        this._texto = novoTexto;
        this._editando = false;
    }

    get titulo() {
        return this._titulo.toUpperCase();
    }

    set titulo(novoTitulo) {
        if (novoTitulo !== null) {
            this._titulo = novoTitulo;
        } else {
            alert('Digite 3 letras no mínimo');
        }
    }

    get texto() {
        return this._texto.toUpperCase();
    }

    set texto(novoTexto) {
        this._texto = novoTexto;
    }

    get editando() {
        return this._editando;
    }

    set editando(novoEditando) {
        this._editando = novoEditando;
    } 
}

export default Nota;