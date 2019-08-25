function diagnose(){
    location.href = "diagnose.html";
}

function searchToDiag(){
    INDEX = 0;
    var find = false;
    for(var i = 0; i < 10; i++){
 
      if(paciente[i] != null){

        if(paciente[i].CPF == document.getElementById("diags").value && !find){
          find = true;
          INDEX = i;
          findtrue();
        }
        
      }
    }
    if(find == false) {
        alert("CPF não encontrado!");
    }

}

function findtrue(){
    let doencasaida = "not";
    let aparicaosaida = -10000;
    let medsaida = "Não há registrado!";
    if(doenca[0] == null){
        alert("Ainda não há doenças adicionadas ao sistema!");
        backToBegin();
    }
    let saveINDEX = 0;
    for(i = 0; i < CONT2; i++){

        if(paciente[INDEX].sintomas.toLowerCase().includes(doenca[i].sintomas.toLowerCase()) && doenca[i].aparicao > aparicaosaida){
            doencasaida = doenca[i].nome;
            aparicaosaida = doenca[i].aparicao;
            saveINDEX = i;
        }
    }
    for(i = 0; i < CONT3; i++){
        if(med[i] == null){
            break;
        }
        if(paciente[INDEX].sintomas.toLowerCase().includes(med[i].trata.toLowerCase())){
            medsaida = med[i].nome;
        }
        if(doenca[saveINDEX].tratamento.toLowerCase().includes(med[i].nome.toLowerCase())){
            medsaida = med[i].nome;
        }
    }
    if(doencasaida == "not"){
        alert("Lamentavelmente, não foi encontrada doença compativel com os dados desse paciente!");
        return;
    }
    document.getElementById("container9").style.height = "600px";

    var saida = "Paciente: " + paciente[INDEX].nome + "<hr> <br> <br>" + "De acordo com os sintomas informados," + "<br>" + 
    "paciente diagnósticado com: " + doencasaida + "<br> <br>" + "Porcentagem de acerto = " + aparicaosaida + "%" + "<br> <br>" + "Medicamento a ser aplicado: " + medsaida;
    
    document.getElementById("INFO").innerHTML = saida;


}