function resultadoCep(dados) {
    for(let campo in dados){
        if (document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value = dados[campo];
        }
    }
}

export{resultadoCep};