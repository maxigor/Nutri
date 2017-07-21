var campoFiltro = document.querySelector("#filtroTabela");

campoFiltro.addEventListener("input", function(){
  console.log(this.value);

  var pacientes = document.querySelectorAll(".paciente");

  for(posicao = 0; posicao < pacientes.length; posicao++){
      var paciente = pacientes[posicao];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      console.log(nome);

  }

});
