//Primeiro, declarar as variáveis que vou trabalhar para facilitar a utilização toda vez que tiver que chamá-la.
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;

function addTarefa() {
    //Pegar o valor digitado no input
    let valorInput = input.value;

    //Se não for vazio, nem nulo e nem indefinido:
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = 
        `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
            </div>
            <div class="item-botao">
            <button onclick="deletar(${contador})"  class="delete"><i class="mdi mdi-delete"></i>
                Deletar
            </button>
            </div>
        </div>`;
        //Adicionar novo item no main
        main.innerHTML += novoItem;
        //Limpar o input
        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

//Para disparar nova tarefa apertando o "enter"
input.addEventListener("keyup", function (event) {
    //se teclou a tecla 13 = enter
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});

