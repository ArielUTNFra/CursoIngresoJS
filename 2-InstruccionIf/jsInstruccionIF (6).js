function Mostrar()
{
//tomo la edad  
var a = document.getElementById ("edad").value;
if (a <= 13){
                alert ("Menor de edad");
}
else if (a > 13 && a <= 17){
                alert ("Adolescente");
}
else if (a >= 18){
                alert ("Mayor de edad");
}
else {
}


}//FIN DE LA FUNCIÓN!