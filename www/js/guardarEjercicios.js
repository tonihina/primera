function flexiones(){
    var lagartijas=$('[name="cantidadFlexiones"]').val();
  
    window.localStorage.setItem("flexiones", lagartijas);

    $("#salidaFlexiones").html("Cantidad hecha: " + window.localStorage.getItem("flexiones"));

    return $.mobile.changePage("#pruebas", {
        reverse: false,
        transition: "slide"
    });
}

function sentadillas(){
    var sentadillas=$('[name="cantidadSentadillas"]').val();
  
    window.localStorage.setItem("sentadillas", sentadillas);

    $("#salidaSentadillas").html("Cantidad hecha: " + window.localStorage.getItem("flexiones"));

    return $.mobile.changePage("#pruebas", {
        reverse: false,
        transition: "slide"
    });
}

function abdominales(){
    var abdominales=$('[name="cantidadAbdominales"]').val();
  
    window.localStorage.setItem("abdominales", abdominales);

    $("#salidaAbdominales").html("Cantidad hecha: " + window.localStorage.getItem("abdominales"));

    return $.mobile.changePage("#pruebas", {
        reverse: false,
        transition: "slide"
    });
}

function fondos(){
    var fondos=$('[name="cantidadFondos"]').val();
  
    window.localStorage.setItem("fondos", fondos);

    $("#salidaFondos").html("Cantidad hecha: " + window.localStorage.getItem("fondos"));

    return $.mobile.changePage("#pruebas", {
        reverse: false,
        transition: "slide"
    });
}