function mostrar()
{
    let tipo, cantidad, nombre, sexo, nota, edad;
    let mPromedio
    let nMasJoven
    let porcQ = 0
    let porcF = 0
    let porcS = 0;
    let edadR;
    let nombreR;
    let contF = 0 
    let contQ = 0
    let contS = 0;
    let acumF = 0
    let acumQ = 0
    let acumS = 0;
    let maxProm
    let flagProm = 0;
    let minEdad
    let flagMinEdad = 0;
    let maxMaterias
    let flagMaterias = 0;
    let contTotal = 0;
    let nombMaxMat = "", edadMaxMat;
    
  
    {for (let i = 0; i < 500; i++) {
      nombre = prompt("Ingrese su nombre: ");
      while (!isNaN(nombre)) {
        nombre = prompt("Ingrese un nombre valido: ");
      }
    
      tipo = prompt("Ingrese tipo carrera (quimica, fisica, sistemas)");
      while (!(tipo == "quimica" || tipo == "fisica" || tipo == "sistemas")) {
        tipo = prompt("error... Ingrese tipo carrera (quimica, fisica, sistemas)");
      }
    
      sexo = prompt("Ingrese sexo (femenino, masculino, no binario)");
      while (!(sexo == "femenino" || sexo == "masculino" || sexo == "no binario")) {
        sexo = prompt("Reingrese sexo (femenino, masculino, no binario)");
      }
    
      cant = parseInt(prompt("Ingrese cantidad de materias (1 a 5)"));
      while (isNaN(cant) || cant < 0 || cant > 5)
        cant = parseInt(prompt("Reingrese cantidad de materias (1 a 5)"));
      }
    
      nota = prompt("Ingrese nota promedio (entre 0 y 10)");
      while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = prompt("Reigrese nota promedio (entre 0 y 10)");
      }
    
      edad = parseInt(prompt("Ingrese su edad"));
      while (isNaN(edad) || edad < 18 || edad > 100) {
    edad = parseInt(prompt("Reingrese su edad"));
    }
  
    switch (tipo) { 
    case "fisica":
    contF++;
    acumF += nota;
    break;
    case "quimica":
    contQ++;
    acumQ += nota;
    break;
    case "sistemas":
    contS++;
    acumS += nota;
     break;
     }
  
    if (tipo == "fisica") { 
    if (flagProm == 0) { 
    flagProm = 1;
    maxProm = nota;
    mPromedio = nombre; 
}   else if (maxProm < nota) {
    maxProm = nota;
    mPromedio = nombre; 
    }
    }
  
    if (sexo == "femenino") {
    if (flagMinEdad == 0) { 
    flagMinEdad = 1;
    minEdad = edad; 
    nombreR = nombre;
}   else if (minEdad > edad) {
    minEdad = edad; 
    nombreR = nombre; 
    }
    }
  
      
} if (tipo != "quimica") {
    if (flagMaterias == 0) {
    flagMaterias = 1;
    maxMaterias = cantidad;
    edadMaxMat = edad;
    nombMaxMat = nombre;
} else if (maxMaterias < cantidad) {
    maxMaterias = cantidad;
    edadMaxMat = edad;
    nombMaxMat = nombre;
     }
    }
  
      contTotal++;
     
    porcF = contF * 100 / contTotal;
    porcQ = contQ * 100 / contTotal;
    porcS = contS * 100 / contTotal;
    {
       alert("El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo): " + mPromedio);
       alert("El nombre de la alumna mas joven: " + nombreR);
    if (porcF == 0) { 
       alert("porcentaje de las materias: " + "Quimica: "+ porcQ + "Fisica: no existe" + "sistemas: " + porcS);
    } else if (porcQ == 0) { 
       alert("porcentaje de las materias: " + "Quimica: no existe" + "Fisica: " + porcF + "sistemas: " + porcS);
    } else if (porcS == 0) { 
       alert( "porcentaje de las materias: " + "Quimica: " + porcF + "Fisica: " + porcF + "sistemas: no existe");
    } else { 
       alert(" porcentaje de las materias: " + "Quimica: " + porcQ + "Fisica: " + porcF + "sistemas: " + porcS);
    }
       alert("La edad y nombre del que cursa mas materias exceptuando quimica: " +  "Nombre: " + nombMaxMat + "Edad: " + edadMaxMat); 
    }
}
