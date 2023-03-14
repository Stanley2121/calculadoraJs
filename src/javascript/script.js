// adicionar digitos 
function addDigito(num){
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

// apagar display
function apagarDisplay(){
  document.getElementById('resultado').innerHTML = "";
}

// apagar digito
function deleteDigito(){
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML= resultado.substring(0, resultado.length -1);
}

// calcular
function calcular(){
  var resultado = document.getElementById('resultado').innerHTML;
  if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
  }
}
