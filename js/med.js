let CONT3 = 1;
let med = [];
var justOnlyMD = false;

class Medicamento {
    constructor(nome, trata, uso) {
      this.nome = nome;
      this.trata = trata;
      this.uso = uso;
    }
}

loadLS();

 
function addDesise(value, nome){

  var elemento_pai = document.getElementById("myULMED");
  var titulo = document.createElement('li');
  
  titulo.textContent = nome;
  titulo.id = value;
  titulo.onclick = function () {
    verMED(titulo.id);
  };
  elemento_pai.appendChild(titulo);
}

function listMEDBTN(){
  location.href = "listMed.html";
  
}

function addPRIMITIVE(){
  if(!justOnlyMD){

    med[0] = new Object();
    med[0] = new Medicamento("Paracetamol", "Febre", "Oral");
    var elemento_pai = document.getElementById("myULMED");
    var titulo = document.createElement('li');
    titulo.textContent = "Paracetamol";
    titulo.id = 0;

   titulo.onclick = function () {
      verMED(titulo.id);
    };

    elemento_pai.appendChild(titulo);
    justOnlyMD = true;

    for(var i  = 1; i < CONT2; i++){
      addDesise(i, med[i].nome);
    
    }
    saveLS3();
  }
}
function verMED(busca){

    var achou = false;
    for(var i = 0; i < 100; i++){
      if(i == busca){
        achou = true;
        listarM(busca);
      }
    }
    if(!achou){
      alert("Não encontrado!");
    }
  }

  function listarM(busca){
    
    document.getElementById("mediCONT").style.display = "none";
    document.getElementById("container8").style.display = "block";
    
    document.getElementById("formNOME8").value = med[busca].nome;
    document.getElementById("formTRATA8").value = med[busca].trata;
    document.getElementById("formUSO8").value = med[busca].uso;
    

  }

function saveMED(){
    med[CONT3] = new Object();
    let nome = document.getElementById("formNOME6").value;
    let trata = document.getElementById("formTRATA6").value;
    let uso = document.getElementById("formUSO6").value;

    if(nome == "" || trata == "" || uso == ""){
      alert("Todos os dados devem ser preenchidos!");
      return;
      
    }
    med[CONT3] = new Medicamento(nome, trata, uso);
    alert("Medicamento salvo!");
    CONT3 += 1;
    saveLS3();
    location.href = "index.html";

}

function medicamentoBTN(){

    location.href = "addMed.html";
}