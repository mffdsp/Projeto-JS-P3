var doenca = [];
var CONT2 = 5;

class Doenca {
    constructor(nome, aparicao, dor, sintomas, prevencao, tratamento) {
      this.nome = nome;
      this.aparicao = aparicao;
      this.dor = dor;
      this.sintomas = sintomas;
      this.prevencao = prevencao;
      this.tratamento = tratamento;
    }
  }
  
  loadLS();

  function saveDOENCA(){

    doenca[CONT2] = new Object();
    var nome =  document.getElementById("formNOME4").value;
    var aparicao =  document.getElementById("formAPARICAO4").value;
    var dor =  document.getElementById("formDOR4").value;
    var sintomas =  document.getElementById("formSINTOMAS4").value;
    var prevencao =  document.getElementById("formPREV4").value;
    var tratamento =  document.getElementById("formTRATAMENTO4").value;

    if(nome == "" || aparicao == "" || dor == "" || sintomas == "" || prevencao == "" || tratamento == ""){
      alert("Todos os dados devem ser preenchidos!");
      return;
    }
    for(var i = 0; i < 10; i++){
      if(doenca[i] == Doenca && nome.toLowerCase() == (doenca[i].nome).toLowerCase()){
        alert("ERRO!\nDoença já cadastrada no sistema!");
        return;
      }
    }

    doenca[CONT2] = new Doenca(nome, aparicao, dor, sintomas, prevencao, tratamento);
    
    alert('Salvo com sucesso!');
    CONT2 += 1;
    saveLS2();
    location.href = "index.html";
}

var justOnly = false;
function primitiveDOC(){
  if(justOnly){
    return;
  }
  justOnly = true;
  var nome = ["Cancer", "HIV", "Gripe", "Lupus", "Hanseniase"];
  var aparicao = [10,50,30,10,65];
  var dor = ["Pe", "cabeça", "Orelha", "fígado", "Asa"];
  var sintomas = ["dor", "febre", "febre", "febre", "febre"];
  var prevencao = ["vacina", "vacina", "vacina, vacina", "vacina", "vacina"];
  var tratamento = ["Soro", "Soro", "Soro", "Soro", "Soro", "Soro"];

  for(var i  = 0; i < 5; i++){
    doenca[i] = new Object();
    doenca[i] = new Doenca(nome[i], aparicao[i], dor[i], sintomas[i], prevencao[i], tratamento[i]);
    addElement(i, nome[i]);
  }
  for(i = 5; i < CONT2; i++){
    addElement(i, doenca[i].nome);
  }
  i = 0;
  saveLS2();
}

function verdoenca(busca){
  var achou = false;
  for(var i = 0; i < 100; i++){
    if(i == busca){
      achou = true;
      listarD(busca);
    
    }
  }
  if(!achou){
    alert("Não encontrado!");
  }
}
function listarD(busca){
    
    document.getElementById("doenca").style.display = "none";
    document.getElementById("container5").style.display = "block";
    
    document.getElementById("formNOME5").value = doenca[busca].nome;
    document.getElementById("formAPARICAO5").value = doenca[busca].aparicao;
    document.getElementById("formDOR5").value = doenca[busca].dor;
    document.getElementById("formSINTOMAS5").value = doenca[busca].sintomas;
    document.getElementById("formPREV5").value = doenca[busca].prevencao;
    document.getElementById("formTRATAMENTO5").value = doenca[busca].tratamento;

  }