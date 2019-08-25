
var validcpf = true;

function formatar(mascara, documento){

    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i);
    if (texto.substring(0,1) != saida){
        documento.value += texto.substring(0,1);
    }
}

function somenteNumeros(documento) {

    if(documento.length < 14){
        return false;
    }
    for(i = 0; i < 14; i++){
        
        if(i != 3 && i != 7 && i != 11){
            if(isNaN(documento.charAt(i))){
                return false;
            }
        }
    }
    return true;
   

}