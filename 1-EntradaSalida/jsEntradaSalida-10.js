/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
var numero1;
var resultado;

            numero1 = document.getElementById ("importe").value;
            resultado = document.getElementById ("resultado").value;

            numero1 = parseInt (numero1);
            resultado = (numero1 * 75 / 100 );

alert ("El resultado es: " + resultado);

}
