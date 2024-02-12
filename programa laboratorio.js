//Variables útiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

//Recargo
var recargo = 0;
var recargo_total = 0;

//Precio final 
var precio_final = 0;

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuántos años tiene? Ingrese solamente números ");

var casado = prompt("¿Está casado actualmente?");
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge;
if ("SI" == casado.toUpperCase()) {
  edad_conyuge = prompt("¿Qué edad tiene su esposo/a?", "si/no");
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad);
var edad_conyuge_numero = 0;
//convirtiendo la edad del cónyuge si se está casado/a
if ("SI" == casado.toUpperCase()) {
  edad_conyuge_numero = parseInt(edad_conyuge);
}

var hijos = prompt("¿Tiene hijos o hijas?");
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos;
/**
 * 1. convierta la cantidad de hijos a número
 */
cantidad_hijos = parseInt(hijos);

//Aquí debe calcular el recargo total basado en las respuestas ingresadas
//Aquí es donde debe calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if (edad_numero >= 18 && edad_numero < 25) {
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18;
  //Sumamos todos los recargos que hemos obtenido
  recargo_total += recargo;
}
// Aquí puede colocar un else if() con el siguiente rango

/** 
 * 2. Recargo por la edad del cónyuge
 */
if ("si" == casado.toUpperCase()) {
  if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
    recargo = precio_base * casado_18;
    recargo_total += recargo;
  }
  // aquí puede colocar más condiciones para otras edades del cónyuge
}

/**
 * 3. Recargo por la cantidad de hijos 
 */
if (cantidad_hijos > 0) {
  recargo = precio_base * hijos_recargo * cantidad_hijos;
  recargo_total += recargo;
}

precio_final = precio_base + recargo_total;
//Resultado
alert("Para el asegurado " + nombre);
alert("El recargo total será de: " + recargo_total);
alert("El precio será de: " + precio_final);

