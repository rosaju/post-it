"use strict";

var listaNotas = {
    secao: document.getElementsByClassName('notes')[0],
    listaInterna: [],
    adicionaNota: function adicionaNota(novoTitulo, novoTexto) {
        var nota = {
            titulo: novoTitulo,
            texto: novoTexto,
            editando: false
        };

        this.listaInterna.push(nota);

        //atualizar seção
        atualizarSecao(this.secao);
    },
    removeNota: function removeNota(posicao) {
        this.listaInterna.splice(posicao, 1);

        //atualizar seção
        atualizarSecao(this.secao);
    },
    editaNota: function editaNota(posicao) {
        this.listaInterna[posicao].editando = true;

        //atualizar seção
        atualizarSecao(this.secao);
    },
    salvaNota: function salvaNota(posicao, novoTitulo, novoTexto) {
        this.listaInterna[posicao].titulo = novoTitulo;
        this.listaInterna[posicao].texto = novoTexto;
        this.listaInterna[posicao].editando = false;

        //atualizar seção
        atualizarSecao(this.secao);
    },
    pegaNota: function pegaNota(posicao) {
        return this.listaInterna[posicao];
    },
    contaTotal: function contaTotal() {
        return this.listaInterna.length;
    }
};

function atualizarSecao(secao) {
    // criar uma variavel que vai guardar o html de todas as notas que devem aparecer na tela
    var conteudoSecao = "";

    // percorrer cada item da lista de notas, criar o html de cada nota e colocar na variavel acima
    for (var posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        var notaAtual = listaNotas.pegaNota(posicao);

        if (notaAtual.editando) {
            conteudoSecao += "<form class=\"note\">\n                                <input class=\"note__title\" type=\"text\" name=\"titulo\" value=\"" + notaAtual.titulo + "\" placeholder=\"T\xEDtulo\">\n                                <textarea class=\"note__body\" name=\"texto\" rows=\"5\" placeholder=\"Criar uma nota...\">" + notaAtual.texto + "</textarea>\n                                <button class=\"note__control\" type=\"button\" onclick=\"adicionarNota(this.form.titulo, this.form.texto, this.form, this.form.parentElement, " + posicao + ")\">\n                                    Conclu\xEDdo\n                                </button>\n                             </form>";
        } else {
            conteudoSecao += "<form class=\"note\" onclick=\"editaFormulario( " + posicao + " )\">\n                                <button class=\"note__control\" type=\"button\" onclick=\"removerNota(event," + posicao + ")\">\n                                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                                </button>\n                                <h1 class=\"note__title\">" + notaAtual.titulo + "</h1>\n                                <p class=\"note__body\">" + notaAtual.texto + "</p>\n                             </form>";
        }
    }

    // colocar o html de todo mundo dentro (inner) da secao
    secao.innerHTML = conteudoSecao;
}

function editaFormulario(posicao) {
    listaNotas.editaNota(posicao);
}

function adicionarNota(inputTitulo, textareaTexto, formulario, secao, posicao) {
    if (listaNotas.pegaNota(posicao)) {
        listaNotas.salvaNota(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adicionaNota(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

function removerNota(event, posicao) {
    event.stopPropagation();
    listaNotas.removeNota(posicao);
}