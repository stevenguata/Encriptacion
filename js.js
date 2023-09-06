
const txtingresar = document.getElementById("cadena")
const btnCalcular = document.getElementById("reemplazo")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', function(){
  const dato = txtingresar.value;
    const nuevo = dato.replaceAll(/[aeiou" "]/gi, function(match){
      return match === "a" ? "x" : match === "e" ? "y" : match === "i" ? "z" : match === "o" ? "w" : match === "u" ? "k" : match === " " ? "" : match; 
    })
    pResultado.innerText = nuevo;   

});