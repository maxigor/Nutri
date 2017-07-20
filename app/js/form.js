function pegaPacientedoForm(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTd(dados, classe) {
  var td = document.createElement("td");
  td.classList.add("classe");
  td.textContent = dados;

  return td;
}

function montaTr(paciente){
  var trPaciente = document.createElement("tr");
  trPaciente.classList.add("paciente");

  trPaciente.appendChild(montaTd(paciente.nome , "info-nome"));
  trPaciente.appendChild(montaTd(paciente.peso , "info-peso"));
  trPaciente.appendChild(montaTd(paciente.altura , "info-altura"));
  trPaciente.appendChild(montaTd(paciente.gordura , "info-gordura"));
  trPaciente.appendChild(montaTd(paciente.imc , "info-imc"));

  return trPaciente;
}


function validaPaciente(paciente){
  if( paciente.peso > 0 )
}

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var tabela = document.querySelector("#tabela-pacientes");

  var paciente = pegaPacientedoForm(form);

  validaPeso(paciente.peso);

  montaTr(paciente);

  tabela.appendChild(trPaciente);

  form.reset();
});
