$(function(){
  $("#formulario").submit(function(){
    var fNombre = $("#nombre").value();
    var fPeso= $("peso").value();
    var fEdad= $("edad").value();
    var fAltura= $("altura").value();
    var fSexo= $("sexo").value();
    var fhaces= $("experiencia").value();

    $("nombre").value(" ");
    $("peso").value(" ");
    $("edad").value(" ");
    $("altura").value(" ");
    $("sexo").value(" ");
    $("experiencia").value(" ");

    $.ajax({
      type:"POST",
      url: "#",
      data: ({ Nombre: fNombre, Edad: fEdad, Altura: fAltura, Sexo: fSexo, Ejercicio: fhaces}),
      cache: false,
      dataType: "text",
      success: Enviado
    });
  });
  function Enviado(data){
      alert("Hola");
      $.mobile.changePage("pruebas.html");
  }
});

function enviarDatos(){
  var nombre=$('[name="nombre"]').val();
  var peso=$('[name="peso"]').val();
  var edad=$('[name="edad"]').val();
  var altura=$('[name="altura"]').val();
  var experiencia=$('[name="experiencia"]').val();
  var sexo=$('[name="sexo"]').val();

  window.localStorage.setItem("nombre", nombre);
  window.localStorage.setItem("peso",peso);
  window.localStorage.setItem("edad",edad);
  window.localStorage.setItem("altura",altura);
  window.localStorage.setItem("experiencia",experiencia);
  window.localStorage.setItem("sexo",sexo);

}

