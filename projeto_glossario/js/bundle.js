(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormularioMagico = function () {
    function FormularioMagico(el, cb) {
        _classCallCheck(this, FormularioMagico);

        this.el = typeof el == "string" ? document.querySelector(el) : el;
        this.cb = cb;
        // Adicionar no evento submit a minha validação
        this.populateHandler();
    }

    //método que adiciona ações aos eventos


    _createClass(FormularioMagico, [{
        key: "populateHandler",
        value: function populateHandler() {
            var _this = this;

            // Submissão do formulário
            this.el.addEventListener("submit", function (ev) {
                ev.preventDefault();
                _this.cb(_this.validar());
            });
        }
    }, {
        key: "validar",
        value: function validar() {
            this.retirarErros();
            var validou = true;
            //Como pegar os nossos inputs?
            var inputs = this.el.querySelectorAll(".form-group input");
            //como pegar os valores deles?
            for (var i = 0; i < inputs.length; i++) {
                var input = inputs[i];
                if (this.isEmpty(input)) {
                    input.parentNode.classList.add("erro");
                }
                validou = !this.isEmpty(input) && validou;
            }
            return validou;
        }
    }, {
        key: "retirarErros",
        value: function retirarErros() {}
    }, {
        key: "isEmpty",
        value: function isEmpty(input) {
            return input.value == "";
        }
        // pegarValidacao(input){
        //     var tipodevalidacao = input.getAttribute('data-validacao');
        //     switch(tipodevalidacao){
        //         case "number":
        //             return this.validacaoNumerica;
        //         case "string":
        //             return this.validacaoString;
        //     }
        // }

        // validacaoNumerica(input){
        //     return valido;
        // }

        // validacaoString(input){
        //     return valido;
        // }


    }]);

    return FormularioMagico;
}();

;
exports.default = Formulario;

},{}],2:[function(require,module,exports){
"use strict";

var _Formulario = require("./components/Formulario");

var _Formulario2 = _interopRequireDefault(_Formulario);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var umformulario = new _Formulario2.default("#cadastro", function (validou) {
	console.log(validou);
});

},{"./components/Formulario":1}]},{},[2]);
