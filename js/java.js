// a) Cargar el sueldo de los trabajadores del rubro (la carga finaliza con sueldo = 0).
let sueldos = []; // un arreglo para guardar los sueldos
let sueldo = prompt("Ingrese el sueldo del trabajador (0 para terminar)"); // pedir el sueldo al usuario
while (sueldo != 0) { // mientras el sueldo no sea 0
  sueldos.push(Number(sueldo)); // agregar el sueldo al arreglo
  sueldo = prompt("Ingrese el sueldo del trabajador (0 para terminar)"); // pedir otro sueldo
}

// b) Saber el promedio de dichos salarios.
let suma = 0; // una variable para guardar la suma de los sueldos
for (let i = 0; i < sueldos.length; i++) { // recorrer el arreglo de sueldos
  suma += sueldos[i]; // sumar cada sueldo a la variable suma
}
let promedio = suma / sueldos.length; // calcular el promedio dividiendo la suma por la cantidad de sueldos
console.log("El promedio de los sueldos es " + promedio); // mostrar el promedio en la consola

// c) Cuántos sueldos fueron cargados.
console.log("Se cargaron " + sueldos.length + " sueldos"); // mostrar la cantidad de sueldos en la consola

// d) Cuántos ganan menos de $200000 y el sueldo promedio de ese grupo.
let contadorMenos = 0; // una variable para contar los sueldos menores a 200000
let sumaMenos = 0; // una variable para sumar los sueldos menores a 200000
for (let i = 0; i < sueldos.length; i++) { // recorrer el arreglo de sueldos
  if (sueldos[i] < 200000) { // si el sueldo es menor a 200000
    contadorMenos++; // incrementar el contador
    sumaMenos += sueldos[i]; // sumar el sueldo a la variable sumaMenos
  }
}
let promedioMenos = sumaMenos / contadorMenos; // calcular el promedio de los sueldos menores a 200000
console.log("Hay " + contadorMenos + " sueldos menores a 200000 y su promedio es " + promedioMenos); // mostrar el resultado en la consola

// e) Cuántas remuneraciones son mayores o iguales que $200000, y el salario promedio de este último grupo también.
let contadorMas = 0; // una variable para contar los sueldos mayores o iguales a 200000
let sumaMas = 0; // una variable para sumar los sueldos mayores o iguales a 200000
for (let i = 0; i < sueldos.length; i++) { // recorrer el arreglo de sueldos
  if (sueldos[i] >= 200000) { // si el sueldo es mayor o igual a 200000
    contadorMas++; // incrementar el contador
    sumaMas += sueldos[i]; // sumar el sueldo a la variable sumaMas
  }
}
let promedioMas = sumaMas / contadorMas; // calcular el promedio de los sueldos mayores o iguales a 200000
console.log("Hay " + contadorMas + " sueldos mayores o iguales a 200000 y su promedio es " + promedioMas); // mostrar el resultado en la consola