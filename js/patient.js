var paciente = [];
var CONT = 0;
loadLS();

//save
function saveLS(){
    localStorage.setItem("patient", JSON.stringify(paciente));
    localStorage.setItem("CONT", JSON.stringify(CONT));
    
}
function saveLS2(){
  localStorage.setItem("desise", JSON.stringify(doenca));
  localStorage.setItem("CONT2", JSON.stringify(CONT2));
}
function saveLS3(){
  localStorage.setItem("med", JSON.stringify(med));
  localStorage.setItem("CONT3", JSON.stringify(CONT3));
}


class Paciente {
    constructor(nome, idade, endereco, tipoS, sintomas, CPF) {
      this.nome = nome;
      this.idade = idade;
      this.endereco = endereco;
      this.tipoS = tipoS;
      this.sintomas = sintomas;
      this.CPF = CPF;
    }

}

function saveForm(form) {
    
    var fname = form.formNOME.value;
    var fage = form.formIDADE.value;
    var fadress = form.formENDERECO.value;
    var fsintomas = form.formSINTOMAS.value;
    var fsintomas = form.formSINTOMAS.value;
    var fCPF = form.formCPF.value;
    
    try{
      paciente[CONT] = new Object();
      var fsangue = form.formSANGUE.value;
      if(!(fsangue == "A+"||
        fsangue == "B+" ||
        fsangue == "O+" ||
        fsangue == "AB+" ||
        fsangue == "A-" ||
        fsangue == "B-" ||
        fsangue == "O-" ||
        fsangue == "AB-"))
        {
          throw new Exception("ERRO");
        }else  document.getElementById("erro").innerHTML = "";
      }
      catch(e){
          document.getElementById("erro").innerHTML = "Tipo incorreto!";
          logMyErrors(e); 
          
      }
    
    if(fname == "" || fage == "" || fadress == "" || fsangue == "" || fsintomas == ""){
        alert("Todos os dados devem ser preenchidos!");
        return;
    }
    if(!somenteNumeros(fCPF)){
      alert("Cpf inválido");
      return;
    }
    paciente[CONT] = new Paciente(fname, fage, fadress, fsangue, fsintomas, fCPF);
    
    
      if(paciente[CONT] != null){
        alert("Paciente adicionado com os dados:" + 
        "\nNOME: " + paciente[CONT].nome + 
        "\nIDADE: " + paciente[CONT].idade +
        "\nENDEREÇO: " + paciente[CONT].endereco +
        "\nSINTOMAS: " + paciente[CONT].idade +
        "\nTipo Sang.: " + paciente[CONT].tipoS + 
        "\nCpf.: " + paciente[CONT].CPF );
      }
      
    CONT += 1;
    backToBegin();
    saveLS();
}

function saveEdit(){
    if(!window.confirm("Deseja confirmar as alterações?")){
      return;
    }else 

    paciente[INDEX].nome =  document.getElementById("formNOME3").value ;
    paciente[INDEX].idade =  document.getElementById("formIDADE3").value ;
    paciente[INDEX].endereco =  document.getElementById("formENDERECO3").value ;
    paciente[INDEX].sintomas =  document.getElementById("formSINTOMAS3").value ;
    paciente[INDEX].tipoS =  document.getElementById("formSANGUE3").value ;

    alert('Alterações Feitas com sucesso.');
    saveLS();
    location.href = "index.html";
}

function search(){
    INDEX = 0;
    var find = false;
    for(var i = 0; i < 100; i++){
      if(paciente[i] != null){
        console.log(paciente[i].CPF);
        console.log(document.getElementById("editBUSCA").value);
        if(paciente[i].CPF == document.getElementById("editBUSCA").value && !find){
          find = true;
          document.getElementById("errosearch").innerHTML = "";
          INDEX = i;
          realedit();
        }
        
      }
    }
    document.getElementById("errosearch").innerHTML = "CPF não encontrado!";
      
}

function realedit(){

    document.getElementById("formNOME3").value = paciente[INDEX].nome;
    document.getElementById("formIDADE3").value =  paciente[INDEX].idade;
    document.getElementById("formENDERECO3").value = paciente[INDEX].endereco;
    document.getElementById("formSINTOMAS3").value = paciente[INDEX].sintomas;
    document.getElementById("formSANGUE3").value = paciente[INDEX].tipoS;
    document.getElementById("formCPF3").value = paciente[INDEX].CPF;
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "block";
}