/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
var respuesta = prompt ("Ingrese un dato", "Texto ingresado por defecto");
document.getElementById ("elNombre").value = respuesta;

}

