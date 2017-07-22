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

function validaPaciente(paciente){
  var erros = [];

  if(!validaPeso(paciente.peso)) {
    erros.push("O peso é invalido");
  }

  if(!validaAltura(paciente.altura)) {
    erros.push("A altura é invalida");
  }

  if(paciente.nome.length == 0){
    erros.push("O nome não pode estar em branco ");
  }

  if(paciente.gordura.length == 0){
    erros.push("O gordura não pode estar em branco ");
  }

  if(paciente.altura.length == 0){
    erros.push("O altura não pode estar em branco ");
  }

  if(paciente.peso.length == 0){
    erros.push("O peso não pode estar em branco ");
  }



  return erros;
}

function exibeMensagemDeErro(erros){
  var ul = document.querySelector("#mensagensErro");
  ul.innerHTML = "";

  erros.forEach(function(erros){
    var li = document.createElement("li");
    li.textContent = erros;
    ul.appendChild(li);
  });
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

function adicionaPaciente(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}




var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = pegaPacientedoForm(form);
  var erro = validaPaciente(paciente);

  adicionaPaciente(paciente);

  if (erro.length > 0) {
    exibeMensagemDeErro(erro);
    return;
  }
  var mensagensErro = document.querySelector("#mensagensErro");
  mensagensErro.innerHTML = "";

  form.reset();

});
