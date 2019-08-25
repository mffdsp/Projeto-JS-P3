var INDEX = 0;

function loadLS(){

  if(localStorage.hasOwnProperty("patient") && localStorage.hasOwnProperty("CONT")){
    paciente = JSON.parse(localStorage.getItem("patient"));
    CONT = JSON.parse(localStorage.getItem("CONT"));
  }
  if(localStorage.hasOwnProperty("desise") && localStorage.hasOwnProperty("CONT2")){
    doenca = JSON.parse(localStorage.getItem("desise"));
    CONT2 = JSON.parse(localStorage.getItem("CONT2"));
  }
  if(localStorage.hasOwnProperty("med") && localStorage.hasOwnProperty("CONT3")){
    med = JSON.parse(localStorage.getItem("med"));
    CONT3 = JSON.parse(localStorage.getItem("CONT3"));
  }
}

function addBTN () { 
    location.href = "add.html";

}

function addElement(value, nome){

    var elemento_pai = document.getElementById("myUL");
    var titulo = document.createElement('li');
    
    titulo.textContent = nome;
    titulo.id = value;
    titulo.onclick = function () {
      verdoenca(titulo.id);
    };
    elemento_pai.appendChild(titulo);
}

function backToBegin(){
   location.href = "index.html";
}

function editBTN () { 
  location.href = "edit.html";
  document.getElementById("errosearch").innerHTML = "";

}

function doencaBTN(){
  location.href = "addDesise.html";
}

function ldoencaBTN(){
    
    location.href = "listDesise.html";

  }

function contact(){

   location.href = "contact.html";

}