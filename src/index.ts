let nroUsuario: number = Number(prompt("Ingrese un Numero"));

while (nroUsuario === 0) {
  nroUsuario = Number(prompt("Ingrese otro numero mayor que 0:"));
}

if (nroUsuario % 2 === 0) {
  console.log("El numero ingresado es PAR");
} else {
  console.log("El numero ingresado es IMPAR");
}
