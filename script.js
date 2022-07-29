import {resultadoCep} from './util.js';

window.onload = function(){
    
    resultadoCep();
    //Mapeando os elementos
    const btnBuscar = document.querySelector("#botao-enviar");
    const caixaCep = document.querySelector("#numeroCep");
    
    btnBuscar.addEventListener('click', function(){
        dadosCep(caixaCep.value);   
    });

    let dadosCep = async function(cep){
        let url = `https://viacep.com.br/ws/${cep}/json/`; 
        try{
            let dadosFetch = await fetch(url);
            let dadosJson = await dadosFetch.json();
            resultadoCep(dadosJson);
        } catch(error){
            alert(error);
            }
    } 
}

