function getNumero(idBotaoTecla){

document.querySelector('#mostrar').innerHTML += idBotaoTecla;

}

const listaNumeros = document.querySelectorAll('.tecla');

for(let i=0; i<listaNumeros.length; i++){

    const teclaIndividual = listaNumeros[i];
    const conteudoDaTecla = teclaIndividual.textContent;
    
    teclaIndividual.onclick = function(){
        getNumero(conteudoDaTecla);
    }

}

function limpar(){
mostrar.innerHTML='Telefone:'; //se eu quiser limpar somente um elemento, teria que passar o parametro pra ele.

}

function limparNome(){
    mostrarNome.innerHTML='Nome:'; 
    
    }





const alfabeto = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m'];

function criarTeclado(){ 
const teclado = document.querySelector('#box02');

for(let x=0; x<alfabeto.length; x++){ 

     let identidade = 'letra_' + alfabeto[x];


const criarTecla = document.createElement('button');
criarTecla.setAttribute('id', identidade);
criarTecla.setAttribute('class', 'teclaAlfabeto');
criarTecla.onclick = () => getNome(event.target);
criarTecla.innerHTML = alfabeto[x];
teclado.appendChild(criarTecla);
}


}


function getNome(letras){
document.querySelector('#mostrarNome').textContent += letras.innerHTML;
}


function enviar(nome, telefone){
var agenda = [];
var nome = document.querySelector('#mostrarNome').textContent;
var telefone = document.querySelector('#mostrar').textContent;
var mostrarAgenda = document.querySelector('#agenda');

agenda.push(nome, telefone);

const criarItemAgenda = document.createElement('p');
criarItemAgenda.setAttribute('class', 'itemAgenda');
criarItemAgenda.textContent = (`${nome} / ${telefone}`);

mostrarAgenda.appendChild(criarItemAgenda);
}




