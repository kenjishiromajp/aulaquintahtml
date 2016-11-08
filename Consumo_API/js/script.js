
function pegarEnderecoViaCep(cep){
    fetch("https://viacep.com.br/ws/"+cep+"/json/")
    .then((response)=>response.json())
    .then((json)=>{
        jogarNoHtml(json);
    });
}

function jogarNoHtml(json){
    var trTHEAD = document.querySelector("#tblEndereco thead tr");
    var trTBODY = document.querySelector("#tblEndereco tbody tr");
    
    trTHEAD.innerHTML = "";
    trTBODY.innerHTML = "";

    for (var propriedade in json) {
        var valor = json[propriedade];
        //Criar uma tag via js
        var th = document.createElement("th");
        //Colocar o valor entre as tags
        th.innerText = propriedade;
        // insere a tag criada dentro trTHEAD;
        trTHEAD.appendChild(th);

        var td = document.createElement("td");
        td.innerText = valor;
        trTBODY.appendChild(td);
    }
}

//Pegar o elemento
var btn = document.querySelector("#btnCEP");
var formulario  = document.querySelector("#frmCEP");


function handleSubmit(ev){
    ev.preventDefault();
    var input = document.querySelector("#inputCEP");
    pegarEnderecoViaCep(input.value);
}

//Aplicar o metodo no evento
formulario.onsubmit = handleSubmit;