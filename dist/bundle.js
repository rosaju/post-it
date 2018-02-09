/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _listaNotas = __webpack_require__(1);

var _listaNotas2 = _interopRequireDefault(_listaNotas);

var _formNotas = __webpack_require__(3);

var _formNotas2 = _interopRequireDefault(_formNotas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secao = document.getElementsByClassName('notes')[0];

function observador() {
    atualizarSecao(secao);
}

var listaNotas = new _listaNotas2.default(observador);

var atualizarSecao = function atualizarSecao(secao) {
    // criar uma variavel que vai guardar o html de todas as notas que devem aparecer na tela
    var conteudoSecao = "";

    // percorrer cada item da lista de notas, criar o html de cada nota e colocar na variavel acima
    for (var posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {

        var notaAtual = listaNotas.pegaNota(posicao);

        if (notaAtual.editando) {
            conteudoSecao += '<form class="note">\n                                <input class="note__title" type="text" name="titulo" value="' + notaAtual.titulo + '" placeholder="T\xEDtulo">\n                                <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + notaAtual.texto + '</textarea>\n                                <button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, this.form.parentElement, ' + posicao + ')">\n                                    Conclu\xEDdo\n                                </button>\n                             </form>';
        } else {
            conteudoSecao += '<form class="note" onclick="editaFormulario( ' + posicao + ' )">\n                                <button class="note__control" type="button" onclick="removerNota(event,' + posicao + ')">\n                                    <i class="fa fa-times" aria-hidden="true"></i>\n                                </button>\n                                <h1 class="note__title">' + notaAtual.titulo + '</h1>\n                                <p class="note__body">' + notaAtual.texto + '</p>\n                             </form>';
        }
    }
    secao.innerHTML = conteudoSecao;
};

window.editaFormulario = function (posicao) {
    return listaNotas.editaNota(posicao);
};

window.adicionarNota = function (inputTitulo, textareaTexto, formulario, secao, posicao) {
    if (listaNotas.pegaNota(posicao)) {
        listaNotas.salvaNota(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adicionaNota(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
};

window.removerNota = function (event, posicao) {
    event.stopPropagation();
    listaNotas.removeNota(posicao);
};

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nota = __webpack_require__(2);

var _nota2 = _interopRequireDefault(_nota);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListaNotas = function () {
    function ListaNotas(observador) {
        _classCallCheck(this, ListaNotas);

        this._observador = observador;
        this._listaInterna = [];
    }

    _createClass(ListaNotas, [{
        key: 'adicionaNota',
        value: function adicionaNota(novoTitulo, novoTexto) {
            var nota = new _nota2.default(novoTitulo, novoTexto);
            this._listaInterna.push(nota);
            this._observador();
        }
    }, {
        key: 'removeNota',
        value: function removeNota(posicao) {
            this._listaInterna.splice(posicao, 1);
            this._observador();
        }
    }, {
        key: 'editaNota',
        value: function editaNota(posicao) {
            this._listaInterna[posicao].editando = true;
            this._observador();
        }
    }, {
        key: 'salvaNota',
        value: function salvaNota(posicao, novoTitulo, novoTexto) {
            this._listaInterna[posicao].titulo = novoTitulo;
            this._listaInterna[posicao].texto = novoTexto;
            this._listaInterna[posicao].editando = false;
            this._observador();
        }
    }, {
        key: 'pegaNota',
        value: function pegaNota(posicao) {
            return this._listaInterna[posicao];
        }
    }, {
        key: 'contaTotal',
        value: function contaTotal() {
            return this._listaInterna.length;
        }
    }]);

    return ListaNotas;
}();

exports.default = ListaNotas;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nota = function () {
    function Nota(novoTitulo, novoTexto) {
        _classCallCheck(this, Nota);

        this._titulo = novoTitulo;
        this._texto = novoTexto;
        this._editando = false;
    }

    _createClass(Nota, [{
        key: 'titulo',
        get: function get() {
            return this._titulo.toUpperCase();
        },
        set: function set(novoTitulo) {
            if (novoTitulo !== null) {
                this._titulo = novoTitulo;
            } else {
                alert('Digite 3 letras no mínimo');
            }
        }
    }, {
        key: 'texto',
        get: function get() {
            return this._texto.toUpperCase();
        },
        set: function set(novoTexto) {
            this._texto = novoTexto;
        }
    }, {
        key: 'editando',
        get: function get() {
            return this._editando;
        },
        set: function set(novoEditando) {
            this._editando = novoEditando;
        }
    }]);

    return Nota;
}();

exports.default = Nota;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _formInput = __webpack_require__(8);

var _formInput2 = _interopRequireDefault(_formInput);

var _formTextarea = __webpack_require__(9);

var _formTextarea2 = _interopRequireDefault(_formTextarea);

var _formButton = __webpack_require__(10);

var _formButton2 = _interopRequireDefault(_formButton);

var _form = __webpack_require__(11);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormNotas(props) {
    var formNotas = void 0;

    var propsInput = { //class="note__title" type="text" name="titulo" value="${'ldsd'}" placeholder="Título"
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        value: props.notaAtual.titulo,
        placeholder: 'Título'
    };

    var inputTitulo = new _formInput2.default(propsInput);

    var propsTextarea = { // <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}</textarea>
        className: 'note__body',
        name: 'texto',
        rows: 5,
        placeholder: 'Criar uma nota...',
        innerText: props.notaAtual.texto
    };

    var textareaTexto = new _formTextarea2.default(propsTextarea);

    var click = void 0;
    var children = void 0;

    if (props.notaAtual.editando) {
        var propsButtonRemover = {
            className: 'note__control',
            type: 'button',
            children: '<i class="fa fa-times" aria-hidden="true"></i>',
            click: function click(event) {
                props.removerNota(event, props.posicao);
            }
        };

        var buttonRemover = new _formButton2.default(propsButtonRemover);

        var propsButtonConcluido = {
            className: 'note__control',
            type: 'button',
            children: 'Concluído',
            click: function click() {
                props.adicionarNota(inputTitulo, textareaTexto, formNotas, props.posicao);
            }
        };
        var buttonConcluido = new _formButton2.default(propsButtonConcluido);

        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido];
    } else {
        children = [inputTitulo, textareaTexto];
        click = function click() {
            props.editarFormulario(props.posicao);
        };
    }

    var propsFormNotas = {
        className: 'note',
        children: children,
        click: click
    };

    formNotas = new _form2.default(propsFormNotas);

    return formNotas;
}

exports.default = FormNotas;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormInput(props) {
    // <input class="note__title" type="text" name="titulo" value="${notaAtual.titulo}" placeholder="Título">
    var formInput = document.createElement('input');
    formInput.setAttribute('class', props.className);
    formInput.setAttribute('type', props.type);
    formInput.setAttribute('name', props.name);
    formInput.setAttribute('value', props.value);
    formInput.setAttribute('placeholder', props.placeholder);

    if (props.readonly) {
        form.setAttribute('readonly', true);
    }

    return formInput;
}

exports.default = FormInput;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormTextarea(props) {
    //<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}</textarea>
    var formTextarea = document.createElement('textarea');
    formTextarea.setAttribute('class', props.className);
    formTextarea.setAttribute('name', props.name);
    formTextarea.setAttribute('rows', props.rows);
    formTextarea.setAttribute('placeholder', props.pleceholder);
    formTextarea.innerText = props.innerText;

    return formTextarea;
}

exports.default = FormInput;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormButton(props) {
    var formButton = document.createElement('button');
    formButton.setAttribute('class', props.className);
    formButton.setAttribute('type', props.type);
    formButton.addEventListener('click', props.click);

    formButton.innerHTML = props.children;

    return formButton;
}

exports.default = FormButton;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/05980940910/Desktop/post-it/src/componentes/form.js: Unexpected token, expected { (1:20)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39m\u001b[36mfunction\u001b[39m \u001b[33mForm\u001b[39m(props)\u001b[33m;\u001b[39m {\n \u001b[90m   | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 2 | \u001b[39m    let form \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mforms(\u001b[32m'form'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 3 | \u001b[39m    form\u001b[33m.\u001b[39msetAttribute(\u001b[32m'class'\u001b[39m\u001b[33m,\u001b[39m props\u001b[33m.\u001b[39mclassName)\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m    form\u001b[33m.\u001b[39msetAttribute(\u001b[32m'editando'\u001b[39m\u001b[33m,\u001b[39m props\u001b[33m.\u001b[39meditando)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ })
/******/ ]);