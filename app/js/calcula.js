
function calculaImc (peso , altura) {
  var imc = 0;
  imc = peso / ( altura * altura );
  return imc.toFixed(0);
}

function validaPeso(peso) {

    if (peso > 0 && peso < 300) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura > 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}


var pacientes = document.querySelectorAll(".paciente");

for (posicao = 0; posicao < pacientes.length; posicao++){
  var paciente = pacientes[posicao];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  tdImc.textContent = calculaImc(peso, altura);

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);
  
  if (!pesoEhValido) {
      console.log("Peso inválido!");
      pesoEhValido = false;
      tdImc.textContent = "Peso inválido";
      paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
      console.log("Altura inválida!");
      alturaEhValida = false;
      tdImc.textContent = "Altura inválida";
      paciente.classList.add("paciente-invalido");
  }
}
