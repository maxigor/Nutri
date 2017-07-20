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
    erros.push("O Peso é invalido");
  }

  if(!validaAltura(paciente.altura)) {
    erros.push("A Altura é invalida");
  }

  return erros;
}

function exibeMensagemDeErro(erros){
  var ul = document.querySelector("#mensagensErro");

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





var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = pegaPacientedoForm(form);

  pacienteTr = montaTr(paciente);

  var erro = validaPaciente(paciente);

  if (erro.length > 0) {
    exibeMensagemDeErro(erro);
    return;
  }

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
});
