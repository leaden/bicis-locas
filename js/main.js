function validateForm(){
	/* Escribe tú código aquí */

    var nombre =  document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("input-email").value;
    var password = document.getElementsByClassName("input-password").value;
    var bici = document.getElementsByClassName("form-group input-box").value;
    var twitter = document.getElementById("input-social");

if (nombre == "" || nombre.length == 0 || /^\s+$/.test(nombre)){
        var span = document.createElement("span");
        var contiene = document.getElementById("name");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su nombre");
        span.appendChild(texto);
        return span;
    }

 
if (lastname == "" || lastname.length == 0 || /^\s+$/.test(nombre)){
        var span = document.createElement("span");
        var contiene = document.getElementById("lastname");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su apellido");
        span.appendChild(texto);
        return span;
}

if (email == "" || email == 0 ||  !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email))){
        var span = document.createElement("span");
        var contiene = document.getElementById("input-email");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su email");
        span.appendChild(texto);
        return span;
}

/*function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
   alert("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
}
*/

if (password == "" || password == 0 || contrasena.length <= 6 || contrasena == "password" || /^\s+$/.test(contrasena)){
        var span = document.createElement("span");
        var contiene = document.getElementById("input-password");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar una contrasena valida");
        span.appendChild(texto);
        return span;
}
if (bici == "" || bici == 0 ){
        var span = document.createElement("span");
        var contiene = document.getElementById("form-group input-box");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe seleccionar un tipo de bicicleta");
        span.appendChild(texto);
        return span;
}



}


