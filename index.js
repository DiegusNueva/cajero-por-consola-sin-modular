let saldo = 1000;
const PIN_CORRECTO = "1234";
let intentosRestantes = 3;

function mostrarSaldo() {
  console.log(`Su saldo actual es $${saldo.toFixed(2)}`);
}

function depositar() {
  const deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
  if (isNaN(deposito) || deposito <= 0) {
    console.log("Cantidad inválida. Intente de nuevo.");
  } else {
    saldo += deposito;
    console.log(`Se han depositado $${deposito.toFixed(2)}.`);
    mostrarSaldo();
  }
}

function retirar() {
  const retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
  if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
    console.log("Cantidad inválida o insuficiente. Intente de nuevo.");
  } else {
    saldo -= retiro;
    console.log(`Ha retirado $${retiro.toFixed(2)}.`);
    mostrarSaldo();
  }
}

function transferir() {
  const monto = parseFloat(prompt("Ingrese la cantidad a transferir:"));
  if (isNaN(monto) || monto <= 0 || monto > saldo) {
    console.log("Cantidad inválida o insuficiente. Intente de nuevo.");
  } else {
    const cuentaDestino = prompt("Ingrese el número de cuenta de destino:");
    console.log(`Se han transferido $${monto.toFixed(2)} a la cuenta ${cuentaDestino}.`);
    saldo -= monto;
    mostrarSaldo();
  }
}

function iniciarSesion() {
  let pin = prompt("Ingrese su PIN:");
  while (pin !== PIN_CORRECTO && intentosRestantes > 1) {
    intentosRestantes--;
    alert(`PIN incorrecto. Le quedan ${intentosRestantes} intentos.`);
    pin = prompt("Ingrese su PIN:");
  }

  if (pin === PIN_CORRECTO) {
    console.log("Inicio de sesión exitoso.");
    mostrarSaldo();
    operacionesCajero();
  } else {
    console.log("PIN incorrecto. El cajero se ha bloqueado.");
    
  }
}

function operacionesCajero() {
  let continuar = true;

  while (continuar) {
    console.log("Menú del Cajero:");
    console.log("1. Consultar saldo");
    console.log("2. Depositar dinero");
    console.log("3. Retirar dinero");
    console.log("4. Transferir dinero");
    console.log("5. Salir");

    const opcion = prompt("Elija una opción:");

    switch (opcion) {
      case "1":
        mostrarSaldo();
        break;

      case "2":
        depositar();
        break;

      case "3":
        retirar();
        break;

      case "4":
        transferir();
        break;

      case "5":
        console.log("Gracias por utilizar el cajero. ¡Hasta luego!");
        continuar = false;
        break;

      default:
        console.log("Opción no válida. Por favor, elija una opción válida.");
    }
  }
}

iniciarSesion();
