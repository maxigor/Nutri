var campoFiltro = document.querySelector("#filtroTabela");

campoFiltro.addEventListener("input", function(){

  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {

    for(posicao = 0; posicao < pacientes.length; posicao++){
      var paciente = pacientes[posicao];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressaoRegular = new RegExp(this.value , "i");

      if (expressaoRegular.test(nome)) {
        paciente.classList.remove("ocultar");
      } else {
        paciente.classList.add("ocultar");
      }
    } //fim do for

  } else {
    for (var i = 0; i < pacientes.length; i++) {
      paciente = pacientes[i];
      paciente.classList.remove("ocultar");
    }
  }

});


//se o campo filtro for igual ao nome do paciente mostre na tabela e esconda os outros e se for igual mostrar na tabela
