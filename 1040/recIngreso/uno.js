
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let acumprogram = 0;
	let acumA = 0;
	let acumQa = 0;
	let promprogram;
	let promanalis;
	let promQa;
	let contprogram = 0;
	let contA = 0;
	let contQa = 0;
	let flagprogram = 1;
	let flaganalis = 1;
	let flagQa = 1;
	let seguir = "s";
	let mayorsueldo = 0;
	let flagsueldo = 1;
	let sexoMS;
	let mayorsueldofem;
	let flagF = 1;
	let nombreF;
	let flagNB = 1;
	let contnobin = 0;
  do{
	nombre =  prompt("Ingrese su nombre: ");
	while(!(isNaN(nombre))){
	nombre = prompt("Dato inválido. Ingrese su nombre: ");
	}
	
	edad = parseInt(prompt("Ingrese su edad:"));
	while(!(edad>0) ){
	edad = parseInt(prompt("Dato inválido. Ingrese su edad:"));
	
	sexo = prompt("Ingrese su sexo(masculino(m), femenino(f) o no binario(n)):").toLowerCase();
	
	puesto = prompt("Ingrese su puesto(programador, analista o Qa):");
	
	sueldo = parseInt(prompt("Ingrese su sueldo(entre 15000 y 70000):"));
	

	if(flagP || puesto == "programador"){
		contP++;
		acumP += sueldo;
		flagP = 0;
	}else if(flagA || puesto == "analista"){
		contA++;
		acumaA += sueldo;
		flagA = 0;
	}else if (flagQa || puesto == "Qa"){
		contQa++;
		acumQa += sueldo;
		flagQa = 0;
	}
	
	if(flagsueldo || (sueldo>mayorsueldo)){
	
		mayorsueldo += sueldo;
		flagsueldo = 0;
		sexomayorsueldo = sexo;
	}
	
	if(flagF || (sueldo>mayorsueldofem && sexo == "f")){
		nombreF = nombre;
		mayorsueldofem += sueldo;
	
	}
	
	if(flagNB || (sexo == "n" && sueldo>=20000 && sueldo<=55000 && puesto == "programador")){
		contNB++;
	
	}	
	
	}
	seguir = prompt("Desea seguir ingresando empleados?  s/n");
	
	
	} while (seguir == "s");
	
	
	
	promA = acumprogram/contprogram;
	promA = acumA/contA;
	promQ = acumQ/contQ;
	
	
	if(flagprogram){
	console.log("No hay promedio disponible en el puesto de programador." + "<br>");
	}else{
		console.log("El promedio en el puesto de programador es de:" + promprogram + "<br>");
	
	}
	if(flaganalis){
		alert("No hay promedio disponible en el puesto de analista." + "<br>");
	}else{
		alert("El promedio en el puesto de analista es de:" + promanalis + "<br>");
	}if(flagQa){
		alert("No hay promedio disponible en el puesto de Qa." + "<br>");
	}else{
		alert("El promedio en el puesto de Qa es de:" + promQa + "<br>");
	
	}if(flagsueldo){
		alert("Ningún sexo percibe un sueldo mayor" + "<br>");
	
	}else{
		alert("El sexo que percibe el mayor sueldo es el" + sexoMS + "<br>" );
	}
	}if(flagNB){
		alert("No existen programadores no binarios que cobren entre 20000 y 55000" + "<br>");
	}else{
		alert("La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es: " + contnobin + "<br>");
	}if(flagF){
		alert("No existe un empleado femenino." + "<br>");
	}else{
		alert("El nombre del empleado femenino con mayor sueldo es:" + nombrefem + "<br>");
	
}