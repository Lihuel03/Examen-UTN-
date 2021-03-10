function mostrar()
{
	function mostrar() {
		let nombre;
		let cantidad;
		let marca;
		let precio;
		let resp = "s";
		let precioTotal = 0;
		let descFelipe = 0;
		let cantFelipe = 0;
		let precioFelipe = 0;
		let descArg = 0;
		let cantArg = 0;
		let precioArg = 0;
		let contF = 0;
		let contA = 0;
		let contI = 0;
		let contTotal = 0;
		let promF = 0;
		let promA = 0;
		let promI = 0;
		let perdida = 0;
		let flag = 0;
		let maxVenta = 0
		let nombreMax = "";
		do {
		nombre = prompt("Ingrese su nombre:");
		while (!isNaN(nombre)) {
		nombre = prompt("Ingrese un nombre valido:");
		}
		cantidad = parseInt(prompt("Ingrese cantidad de lamparas:"));
		while (isNaN(cantidad) || cantidad <= 0) {
		cantidad = parseInt(prompt("Reingrese cantidad de lamparas:"));
		}
		marca = prompt("Ingrese marca de la lampara:").toLowerCase();
		while (!(marca == "felipelamparas" || marca == "argentinaluz" || marca == "illuminatis")) {
		marca = prompt("Reingrese marca de la lampara:").toLowerCase();
		}
		precio = parseInt(prompt("Ingrese el precio de la lamapra:"));
		while (isNaN(precio) || precio <= 0) {
		precio = parseInt(prompt("Reingrese el precio de la lamapra:"));
			}
	
		switch (marca) {
		case "argentinaluz":
		contF++;
		cantArg += cantidad;
		precioArg += precio * cantidad;
		break;
		case "felipelamaparas":
		contF++;
		cantFelipe += cantidad;
		precioFelipe += precio * cantidad;
		break;
	    
		case "illuminatis":
		contI++;
		break;
		}
	
		precioTotal += precio * cantidad;
		if (flag == 0) {
		maxVenta = precioTotal;
		nombreMax = marca;
		flag = 1;
		} else if (maxVenta < precioTotal) {
		maxVenta = precioTotal;
		nombreMax = marca;
		}
	
			contTotal++;
			resp = prompt("Desea continuar s/n");
		} while (resp == "s");
	
		
		if (cantFelipe >= 5) {
			descFelipe = precioFelipe - (precioFelipe * 0.10);
		}
	
		if (cantArg >= 3) {
			descArg = precioArg - (precioArg * 0.05);
		}
	
		perdida = Math.round(precioTotal * 100 / (descArg + descFelipe)); 
		promF = contF / contTotal;
		promA = contA / contTotal;
		promI = contI / contTotal;
		
		alert("Cuanto recauda la empresa en concepto de todas las ventas realizadas: " + precioTotal)
		alert("Perdió " + perdida) 
		alert("PromFelipe: " + promF + "PromArg: " + promA + "PromIllu: " + promI)
		alert("La marca que mas ventas realizó: " + nombreMax + " con un total de " + maxVenta)
	}
}	
