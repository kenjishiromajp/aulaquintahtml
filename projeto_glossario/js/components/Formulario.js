class FormularioMagico{
    constructor(el,cb){
        this.el = (typeof el == "string")? document.querySelector(el): el;
        this.cb = cb;
        // Adicionar no evento submit a minha validação
        this.populateHandler();
    }

    //método que adiciona ações aos eventos
    populateHandler(){
        // Submissão do formulário
        this.el.addEventListener("submit",ev=>{
            ev.preventDefault();
            this.cb(this.validar());
        });
    }
    
    validar(){
        this.retirarErros();
        var validou = true;
        //Como pegar os nossos inputs?
        const inputs = this.el.querySelectorAll(".form-group input");
        //como pegar os valores deles?
        for (let i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if(this.isEmpty(input)){
                input.parentNode.classList.add("erro");
            }
            validou = (!this.isEmpty(input) && validou);
        }
        return validou;
    }

    retirarErros(){
        
    }

    isEmpty(input){
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


};
export default Formulario;