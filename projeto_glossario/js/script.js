// SElecionar o botao
var botao = document.querySelector('#btnAbrirSidebar');

// Criar o metodo que abre o sidebar
function abrirSidebar(){
	var sidebar = document.querySelector('#sidebar');
	sidebar.classList.add("active");
}

// Adicionar o metodo no evento
botao.onclick = abrirSidebar;