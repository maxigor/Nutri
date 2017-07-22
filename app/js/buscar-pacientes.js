var botaoBuscar = document.querySelector("#buscar-pacientes");
var erroAjax = document.querySelector("#erroAjax");

botaoBuscar.addEventListener("click", function(){

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load" , function(){

    if (xhr.status == 200 ) {
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
        adicionaPaciente(paciente);
      });
    } else {
      erroAjax.classList.remove("ocultar");
    }

  });

  xhr.send();
});
