window.onload = iniciar;

function iniciar()
{
    let consulta = document.getElementById("txtConsulta");
    let formulario = document.getElementById("formulario");

    consulta.addEventListener("input", contarCaracteres);

    formulario.addEventListener("submit", validarFormulario);
}

function contarCaracteres()
{
    let consulta = document.getElementById("txtConsulta");

    let contador = document.getElementById("contador");

    contador.innerHTML = consulta.value.length + " / 180";
}

function validarFormulario(evento)
{
    evento.preventDefault();

    let nombre = document.getElementById("txtNombre").value;

    let email = document.getElementById("txtEmail").value;

    let consulta = document.getElementById("txtConsulta").value;

    if(nombre == "" || email == "" || consulta == "")
    {
        alert("Debe completar todos los campos.");
        return;
    }

    alert("Consulta enviada correctamente.");
}