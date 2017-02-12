function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var a;
	a = parseInt (Math.random ()* (11-1))+1;

	if (a >= 9){
					alert ("EXCELENTE:  "+ a);
	}
	else if (a >= 4 && a <= 8){
					alert ("APROBO:  "+ a);
	}
	else if (a < 3){
					alert ("Vamos, la próxima se puede:  " + a);
	}
	else{
	}
}//FIN DE LA FUNCIÓN!