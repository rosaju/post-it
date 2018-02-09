import ListaNotas from './listaNotas';
import FormNotas from './formNotas';

let secao = document.getElementsByClassName('notes')[0];

function observador() {
    atualizarSecao(secao);
}

const listaNotas = new ListaNotas(observador);


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

window.editaFormulario = (posicao) => listaNotas.editaNota(posicao);

window.adicionarNota = (inputTitulo, textareaTexto, formulario, secao, posicao) => {
    if (listaNotas.pegaNota(posicao)) {
        listaNotas.salvaNota(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adicionaNota(inputTitulo.value, textareaTexto.value);
        formulario.reset();
        }
}

window.removerNota = (event, posicao) => {
    event.stopPropagation();
    listaNotas.removeNota(posicao);
}

/* window.atualizarSecao = secao => {
    while (secao.firstChild) {
        secao.removeChild(secao.firstChild);
    };

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        let notaAtual = listaNotas.pega(posicao);

        const propsFormNotas = {
            posicao: posicao,
            notaAtual: notaAtual,
            editarFormulario: editaFormulario,
            adicionarNota:adicionarNota,
            removerNota: removerNota
        }

        let formNotas = new FormNotas(propsFormNotas);
        secao.appendChild(formNotas);
    }
}

window.editaFormulario = posicao => listaNotas.edita(posicao);

window.adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

window.removerNota = (evento, posicao) => {
    evento.stopPropagation();
    listaNotas.remove(posicao);
} */ 