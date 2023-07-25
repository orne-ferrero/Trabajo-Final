
function calcular (){
  var opcion1=document.getElementById("1").checked;
  var opcion2=document.getElementById("2").checked;
  var opcion3=document.getElementById("25").checked;
  var opcion4=document.getElementById("50").checked;
  var opcion5=document.getElementById("Q").checked;

  var cant1=document.getElementById("cant1").valueAsNumber;
  var cant2=document.getElementById("cant2").valueAsNumber;
  var cant3=document.getElementById("cant25").valueAsNumber
  var cant4=document.getElementById("cant50").valueAsNumber
  var cant5=document.getElementById("cantQ").valueAsNumber

  var precio1 =0, precio2=0, precio3=0, precio4=0, precio5=0;
  var total1=0, total2=0, total3=0, total4=0, total5=0;
  var precioFinal;
  
  if(opcion1){
    precio1 = 200;
    total1 =  precio1 * cant1;

  }
  if  (opcion2){
    precio2 = 400;
    total2 =  precio2 * cant2;
  }
  if  (opcion3){
    precio3 = 5000;
    total3 =  precio3 * cant3;
  }
  if  (opcion4){
    precio4 = 10000;
    total4 =  precio4 * cant4;
  }
  if  (opcion5){
    precio5 = 100;
    total5 =  precio5 * cant5;
  }

  precioFinal  = total1 + total2 + total3 + total4 + total5;
  document.getElementById("resultado").innerHTML="El Precio total es  : " +precioFinal;
}

function borrar (){
    document.getElementById("1").checked="";
    document.getElementById("2").checked="";
    document.getElementById("25").checked="";
    document.getElementById("50").checked="";
    document.getElementById("Q").checked="";

    document.getElementById("cant1").value="";
    document.getElementById("cant2").value="";
    document.getElementById("cant25").value="";
    document.getElementById("cant50").value="";
    document.getElementById("cantQ").value="";
    
    document.getElementById("resultado").innerHTML="";
  
}
