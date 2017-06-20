
var pacientes = document.querySelectorAll(".paciente");



for ( posicao = 0; posicao < pacientes.length; posicao++){
  var paciente = pacientes[posicao];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;


  var resultado = peso / ( altura * altura );
  tdImc.textContent = resultado.toFixed(0);

  if ( peso < 0 || peso >= 300 ) {
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if ( altura < 0 || altura >= 3.00 ) {
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

}

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
  console.log("teste");
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  console.log(form);
});
