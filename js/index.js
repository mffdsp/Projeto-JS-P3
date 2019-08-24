var INDEX = 0;

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