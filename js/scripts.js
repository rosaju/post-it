const listaNotas = {
    secao: document.getElementsByClassName('notes')[0],
    listaInterna: [],
    adicionaNota(novoTitulo, novoTexto) {
        let nota = {
            titulo: novoTitulo,
            texto: novoTexto,
            editando: false
        };
        this.listaInterna.push(nota);
        atualizarSecao(this.secao);
    },
    removeNota(posicao) {
        this.listaInterna.splice(posicao, 1);
        atualizarSecao(this.secao);        
    },
    editaNota(posicao) {
        this.listaInterna[posicao].editando = true;
        atualizarSecao(this.secao);
    },
    salvaNota(posicao, novoTitulo, novoTexto) {
        this.listaInterna[posicao].titulo = novoTitulo;
        this.listaInterna[posicao].texto = novoTexto;
        this.listaInterna[posicao].editando = false;
        atualizarSecao(this.secao);
    },
    pegaNota(posicao) {
        return this.listaInterna[posicao];
    },

    contaTotal() {
        return this.listaInterna.length;
    }
};

const atualizarSecao = (secao) => {
    // criar uma variavel que vai guardar o html de todas as notas que devem aparecer na tela
    let conteudoSecao = "";

    // percorrer cada item da lista de notas, criar o html de cada nota e colocar na variavel acima
    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {

        let notaAtual = listaNotas.pegaNota(posicao);

        if (notaAtual.editando) {
            conteudoSecao += `<form class="note">
                                <input class="note__title" type="text" name="titulo" value="${notaAtual.titulo}" placeholder="Título">
                                <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}</textarea>
                                <button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, this.form.parentElement, ${posicao})">
                                    Concluído
                                </button>
                             </form>`;
        } else {
            conteudoSecao += `<form class="note" onclick="editaFormulario( ${posicao} )">
                                <button class="note__control" type="button" onclick="removerNota(event,${posicao})">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </button>
                                <h1 class="note__title">${notaAtual.titulo}</h1>
                                <p class="note__body">${notaAtual.texto}</p>
                             </form>`;
        }
    }
    secao.innerHTML = conteudoSecao;
}

const editaFormulario = (posicao) => listaNotas.editaNota(posicao);

const adicionarNota = (inputTitulo, textareaTexto, formulario, secao, posicao) => {
    if (listaNotas.pegaNota(posicao)) {
        listaNotas.salvaNota(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adicionaNota(inputTitulo.value, textareaTexto.value);
        formulario.reset();
        }
}

 const removerNota = (event, posicao) => {
    event.stopPropagation();
    listaNotas.removeNota(posicao);
}