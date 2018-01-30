var notas = []; // a variável fica fora da função pois será utilizada mais de uma vez

function atualizarSecao(secao) {
    // criar uma variável que guardará o HTML de todas as notas que devem aparecer na tela
    var conteudoSecao = "";

    // percorrer cada item da lista de notas e criar o template de cada nota 
    for (var posicao = 0; posicao < notas.length; posicao++) {
        if (notas[posicao].editando){
            // template input + textarea
            conteudoSecao += '<form class="note">' + 
                                '<input class="note__title" type="text" name="title" value="' + notas[posicao].titulo + '"placeholder="Título" autofocus />' +
                                '<textarea class="note__body" name="body" rows="5" placeholder="Criar uma nota...">' + notas[posicao].texto + '</textarea>' +
                                '<button class="note__control" type="button" onclick="adicionarNota(this.parentElement.title, this.parentElement.body, this.parentElement, this.parentElement.parentElement, ' + posicao + ')">' +
                                    'Concluído' +
                                '</button>' +
                             '</form>'
        } else {
            conteudoSecao += '<form class="note" onclick="editaFormulario(' + posicao + ', this.parentElement)">' +
                                '<button class="note__control" type="button" onclick="removerNota(evento,' + posicao + ', this.form.parentElement)">' +
                                '<i class="fa fa-times" aria-hidden="true"></i>' +
                                '</button>' +
                                '<h1 class="note__title">' + notas[posicao].titulo + '</h1>' +
                                '<p class="note__body">' + notas[posicao].texto + '</p>' +
                             '</form>';
        }                
    }

    // colocar o HTML de todo mundo dentro(inner) da seção
    secao.innerHTML = conteudoSecao;
}

function editaFormulario(posicao, secao) {
    // pegar notas e setar editando = true
    notas[posicao].editando = true;

    // chamo o atualiza tela
    atualizarSecao(secao);
}

function adicionarNota(inputText, textareaBody, formulario, secao, posicao){
    if (posicao === undefined) {
       // criar uma variável nota       
         var nota = {
            titulo: inputText.value,
            texto: textareaBody.value,
            editando: false
        };

        // adicionar nota dentro da lista
        notas.push(nota);

        // atualizar a seção de notas
        atualizarSecao(secao);

        // limpar o formulário
        formulario.reset();
        

    } else { 
         // pegar nota
        notas[posicao].titulo = inputText.value;
        notas[posicao].texto = textareaBody.value;
        notas[posicao].editando = false;

        //trocar titulo e o texto dela

        // chamar e atualizar secao
        atualizarSecao(secao);
    }
}

function removerNota(evento, posicao, secao) {
    evento.stopPropagation();
    // remove a nota
    notas.splice(posicao, 1);

    // atualiza a seção de notas
    atualizarSecao(secao);
}