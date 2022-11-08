var hobbies = [];
//función agregar hobbie a la lista hobbies
function agregar(){
    var div = document.getElementById("msj_hobbies");
    var hob = document.getElementById("hobbies").value;
    if (hob !== ""){
        hobbies.push(hob);
        actualizar();
        document.getElementById("hobbies").value = "";
        document.getElementById("msj_hobbies").value = "";
        div.innerHTML = "";
        div.className = "";
    }
    else{
        div.className = "alert alert.primary"
        div.innerText = "Error, no ingreso nada!!"
    }
}
//funcion que actualiza la lista de aficiones 
function actualizar(){
    var ul = document.getElementById("lista")
    ul.innerHTML = "";
    for (var i = 0; i < hobbies.length; i++){
        var li = document.createElement("li");
        li.innerHTML = hobbies[i]
        li.className = "list-group-item";
        li.id = i;
        li.addEventListener("click", function(){
            this.remove();
            hobbies.splice(this.id,1);
        })
        ul.appendChild(li);
    }
}

// ********* Validaciones **************

function validar() {
    var ret_email = validar_email();
    var ret_pass1 = validar_pass1();
    var ret_pass2 = validar_pass2();
    var ret_address = validar_address();
    var ret_phone = validar_phone();
    var ret_comuna = validar_comuna();
    var ret_web = validar_web();
    var ret_hobbies = validar_hobbies();
    return ret_email && ret_pass1 && ret_pass2 && ret_address && ret_phone && ret_comuna && ret_web && ret_hobbies;
}

function validar_email(){
    var mail_input = document.getElementById("mail");
    var div = document.getElementById("msj_mail");
    if (mail_input.value !== ""){
        if (mail_input.value.length >= 5){
            var correo = mail_input.value;
            var pos_arroba = correo.indexOf('@');
            var pos_punto = correo.lastIndexOf('.');
            var arr_correo = correo.split('.');
            var extension = arr_correo[arr_correo.length - 1];
            if(pos_arroba > 3 && (pos_punto - pos_arroba) > 1 && extension.length > 1){
                div.innerHTML = "";
                div.className = "";
                return true;
            }
            else{
                div.innerHTML = "El campo correo electronico no tiene un formato valido";
                div.className = "text-danger";
                return false;
            }    
        }
        else{
            div.innerHTML = "El campo correo electronico debe tener al menos 5 caracteres";
            div.className = "text-danger";
            return false;
        } 
    }
    else{
        div.innerHTML = "El campo nombre de usuario es obligatorio";
        div.className = "text-danger";
        return false;
    }
}

function validar_pass1(){
    var pass_input = document.getElementById("password1");
    var div = document.getElementById("msj_password1");
    if (pass_input.value !== ""){
        if (pass_input.value.length >=3 && pass_input.value.length <= 6){
            var arr_pass = pass_input.value.split('');
            var numb = false;
            var char = false;
            arr_pass.forEach(function(e){
                if (isNaN(e)){
                    char = true;
                }
                else{
                    numb = true;
                }
            });
            if (numb && char){
                div.innerHTML = "";
                div.className = "";
                return true;
            }
            else{
                div.innerHTML = "La contraseña debe tener al menos un dígito y una letra";
                div.className = "text-danger";
                return false;
            }
            
        }
        else{
            div.innerHTML = "La contraseña debe tener de 3 a 6 caracteres";
            div.className = "text-danger";
            return false;
        }
    }
    else{
        div.innerHTML = "El campo contraseña es obligatorio";
        div.className = "text-danger";
        return false;
    }
}

function validar_pass2(){
    var pass_input = document.getElementById("password2");
    var pass_1 = document.getElementById('password1');
    var div = document.getElementById("msj_password2");
    if (pass_input.value !== ""){
        if (pass_1.value === pass_input.value){
            div.innerHTML = "";
            div.className = "";
            return true;
        }
        else{
            div.innerHTML = "Las contraseñas no coinciden";
            div.className = "text-danger";
            return false;
        }
    }
    else{
        div.innerHTML = "El campo repetir contraseña es obligatorio"
        div.className = "text-danger";
        return false;
    }
}

function validar_address(){
    var addr_input = document.getElementById("address");
    var div = document.getElementById("msj_address");
    if (addr_input.value !== ""){
        div.innerHTML = "";
        div.className = "";
        return true;
    }
    else{
        div.innerHTML = "El campo dirección es obligatorio";
        div.className = "text-danger";
        return false;
    }
}

function validar_phone(){
    var input_phone = document.getElementById("phone");
    var div = document.getElementById("msj_phone");
    if (input_phone.value !== ""){
        if (!isNaN(input_phone.value)){
            if (input_phone.value.length === 8){
                div.innerHTML = "";
                div.className = "";
                return true;
            }
            else if (input_phone.value.length === 12){
                var arr_phone = input_phone.value.split('');
                var contador = 0;
                for (i = 0; i <= 3; i++){
                    if (arr_phone[i] === '+' && i === 0){contador += 1;}
                    else if (arr_phone[i] === '5' && i === 1){contador += 1;}
                    else if (arr_phone[i] === '6' && i === 2){contador += 1 ;}
                    else if (arr_phone[i] === '9' && i === 3){contador += 1;}
                }
                if (contador === 4){
                    div.innerHTML = "";
                    div.className = "";
                    return true
                }
                else{
                    div.innerHTML = "Ingrese un formato correcto"
                    div.className = "text-danger";
                    return false;
                }
            }
            else {
                div.innerHTML = "Ingrese un formato correcto";
                div.className = "text-danger";
                return false;
            }
        }
        else{
            div.innerHTML = "Ingrese un número ";
            div.className = "text-danger";
            return false;
        }
    }
    else{
        div.innerHTML = "El campo número de teléfono es obligatorio"
        div.className = "text-danger";
        return false;
    }
}

function validar_comuna(){
    var input_comuna = document.getElementById("comuna");
    var div = document.getElementById("msj_comuna");
    if (input_comuna.value === "Comuna: Elija una ..."){
        div.innerHTML = "Debe elegir una comuna"
        div.className = "text-danger"
        return false;
    }
    else{
        div.innerHTML = "";
        div.className = "";
        return true;
    }
}

function validar_web(){
    var input_mail = document.getElementById("web");
    var div = document.getElementById("msj_web");
    var arr_mail = input_mail.value.split("");
    var contador = 0;
    for (i = 0; i <= 7; i++){
        if ((arr_mail[i] === "h" || arr_mail[i] === "H") && i === 0) {contador += 1;} 
        else if ((arr_mail[i] === "t" || arr_mail[i] === "T") && i === 1) {contador += 1;}
        else if ((arr_mail[i] === "t" || arr_mail[i] === "T") && i === 2) {contador += 1;}
        else if ((arr_mail[i] === "p" || arr_mail[i] === "P") && i === 3) {contador += 1;}
        else if ((arr_mail[i] === "s" || arr_mail[i] === "S") && i === 4) {contador += 1;}
        else if (arr_mail[i] === ":" && i === 5) {contador += 1;}
        else if (arr_mail[i] === "/" && i === 6) {contador += 1;}
        else if (arr_mail[i] === "/" && i === 7) {contador += 1;}
    }
    var pos_punto = arr_mail.lastIndexOf(".");
    var extension = arr_mail.length - 1;
    if (contador === 8 && (pos_punto - 7) > 1  && (extension - pos_punto) > 1){
        div.innerHTML = ""
        div.className = ""
        return true;
    }

    else{
        div.innerHTML = "ingrese un formato valido!! ( https://hola.cl )"
        div.className = "text-danger"
        return false;
    }
}

function validar_hobbies(){
    var div = document.getElementById("msj_hobbies");
    var contador = 0;
    hobbies.forEach(function(hobbie){
        contador = contador + 1;
    });
    if (contador < 2 ){
        div.innerHTML = "Debe ingresar al menos 2 aficiones";
        div.className = "text-danger";
        return false;
    }
    else{
        div.innerHTML = "";
        div.className = "";
        return true;
    }
}







