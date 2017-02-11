/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var numero1;
var resultado;

            numero1 = document.getElementById ("sueldo").value;
            resultado = document.getElementById ("resultado").value;

            numero1 = parseInt (numero1);
            resultado = (numero1 * 110 / 100 );

alert ("El resultado es: " + resultado);



	
}
