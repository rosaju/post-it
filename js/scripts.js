var listaNotas = {
    secao: document.getElementsByClassName('notes')[0],
    listaInterna: [],
    adicionaNota: function(novoTitulo, novoTexto) {
        var nota = {
            titulo: novoTitulo,
            texto: novoTexto,
            editando: false
        };

        this.listaInterna.push(nota);

        //atualizar seção
        atualizarSecao(this.secao);
    },
    removeNota: function(posicao){
        this.listaInterna.splice(posicao, 1);

        //atualizar seção
        atualizarSecao(this.secao);        
    },
    editaNota: function(posicao) {
        this.listaInterna[posicao].editando = true;

        //atualizar seção
        atualizarSecao(this.secao);
    },
    salvaNota: function(posicao, novoTitulo, novoTexto){
        this.listaInterna[posicao].titulo = novoTitulo;
        this.listaInterna[posicao].texto = novoTexto;
        this.listaInterna[posicao].editando = false;

        //atualizar seção
        atualizarSecao(this.secao);
    },
    pegaNota: function(posicao) {
        return this.listaInterna[posicao];
    },
    contaItens: function() {
        return this.listaInterna.length;
    }
};

function atualizarSecao(secao) {
    // criar uma variavel que vai guardar o html de todas as notas que devem aparecer na tela
    var conteudoSecao = "";

    // percorrer cada item da lista de notas, criar o html de cada nota e colocar na variavel acima
    for (var posicao = 0; posicao < listaNotas.listaInterna.length; posicao++) {
        if (listaNotas.listaInterna[posicao].editando) {
            conteudoSecao += '<form class="note">'+
                                '<input class="note__title" type="text" name="titulo" value="' + listaNotas.listaInterna[posicao].titulo + '" placeholder="Título">'+
                                '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + listaNotas.listaInterna[posicao].texto +'</textarea>'+
                                '<button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, this.form.parentElement, ' + posicao +')">'+
                                    'Concluído'+
                                '</button>'+
                             '</form>';
        } else {
            conteudoSecao += '<form class="note" onclick="editaFormulario(' + posicao + ')">'+
                                '<button class="note__control" type="button" onclick="removerNota(event,' + posicao + ')">'+
                                    '<i class="fa fa-times" aria-hidden="true"></i>'+
                                '</button>'+
                                '<h1 class="note__title">' + listaNotas.listaInterna[posicao].titulo + '</h1>'+
                                '<p class="note__body">' + listaNotas.listaInterna[posicao].texto + '</p>'+
                             '</form>';
        }
    }

    // colocar o html de todo mundo dentro (inner) da secao
    secao.innerHTML = conteudoSecao;
}

function editaFormulario(posicao) {
    listaNotas.editaNota(posicao);
}

function adicionarNota(inputTitulo, textareaTexto, formulario, secao, posicao) {
    if (listaNotas.listaInterna[posicao]) {
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