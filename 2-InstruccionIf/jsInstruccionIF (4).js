function Mostrar()
{
//tomo la edad  

var a = document.getElementById ("edad").value;
a = parseInt (a);
a = a >= 13 && a <= 17;

if (a)
{

                alert ("Es adolecente");
}

else (a < 12 && a > 18)
{

}

}//FIN DE LA FUNCIÓN