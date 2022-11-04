let nombreUsuario = "Max";
let passUsuario = "1234";
let ingresar = false;

// \n

class Perro {
    constructor (nombre, raza, edad, sexo, id){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = parseInt(edad);
        this.sexo = sexo;
        this.id = id;
    }

    asignarID(array){
        this.id = array.length;
    }
};

class Gato {
    constructor (nombre, raza, edad, sexo, id){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = parseInt(edad);
        this.sexo = sexo;
        this.id = id;
    }
    asignarID(array){
        this.id = array.length;
    }
};

class Conejo {
    constructor (nombre, raza, edad, sexo, id){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = parseInt(edad);
        this.sexo = sexo;
        this.id = id;
    }
    asignarID(array){
        this.id = array.length;
    }
};

const perritosEnAdopcion = [
    new Perro ('Pluto', 'callejero', 4, 'macho', 1),
    new Perro ('Bono', 'Border Collie', 3, 'macho', 2),
    new Perro ('Nina', 'Jack Russel', 6, 'hembra', 3),
    new Perro ('Wilson', 'Cocker Spaniel', 6, 'macho', 4)
];

const perrosAdoptados = [];
  
const gatitosEnAdopcion = [
    new Gato ('Garfield', 'Americano', 7, 'macho', 1),
    new Gato ('Felix', 'Bombay', 1, 'macho', 2),
    new Gato ('Clara', 'Azul Ruso', 2, 'hembra', 3),
    new Gato ('Bola de nieve', 'Chinchilla', 3, 'hembra', 4)
];

const gatosAdoptados = [];
  
const conejosEnAdopcion = [
    new Conejo ('Tambor', 'Rex', 2, 'macho', 1),
    new Conejo ('Tambora', 'Cabeza de León', 4 ,'hembra', 2),
    new Conejo ('Tita', 'Belier', 6, 'hembra', 3)
];

const conejosAdoptados = [];

let continuar = true;

function darUnPerrito() {
    while (continuar){
        let ingresoDelPerro = prompt('Ingresa la siguiente información del perro: nombre, raza, edad y sexo separados por una barra diagonal (/). Ingresa X para finalizar.'); 

        if (ingresoDelPerro.toLowerCase() === 'x'){
            continuar = false;
            break;
        } 

        const datosDelPerro = ingresoDelPerro.split('/');
        console.log(datosDelPerro);

        const perroNuevo = new Perro (datosDelPerro[0],datosDelPerro[1], datosDelPerro[2], datosDelPerro[3]);

        perritosEnAdopcion.push(perroNuevo);
        perroNuevo.asignarID(perritosEnAdopcion);
        console.log(perritosEnAdopcion);
      }
    }  
  
function darUnGatito() {
    while (continuar){
        let ingresoDelGato = prompt('Ingresa la siguiente información del gato: nombre, raza, edad y sexo separados por una barra diagonal (/). Ingresa X para finalizar.'); 

        if (ingresoDelGato.toLowerCase() === 'x'){
            continuar = false;
            break;
        } 

        const datosDelGato = ingresoDelGato.split('/');
        console.log(datosDelGato);

        const gatoNuevo = new Gato (datosDelGato[0],datosDelGato[1], datosDelGato[2], datosDelGato[3]);

        gatitosEnAdopcion.push(gatoNuevo);
        gatoNuevo.asignarID(gatitosEnAdopcion);
        console.log(gatitosEnAdopcion);
      }
    }

function darUnConejo() {
    while (continuar){
        let ingresoDelConejo = prompt('Ingresa la siguiente información del conejo: nombre, raza, edad y sexo separados por una barra diagonal (/). Ingresa X para finalizar.'); 

        if (ingresoDelConejo.toLowerCase() === 'x'){
            continuar = false;
            break;
        } 

        const datosDelConejo = ingresoDelConejo.split('/');
        console.log(datosDelConejo);

        const conejoNuevo = new Conejo (datosDelConejo[0],datosDelConejo[1], datosDelConejo[2], datosDelConejo[3]);

        conejosEnAdopcion.push(conejoNuevo);
        conejoNuevo.asignarID(conejosEnAdopcion);
        console.log(conejosEnAdopcion);
      }
    }

function darEnAdopcion() {
    let queAnimalitoDar = prompt('Que animal quieres dar en adopción? \n1 - Perro \n2 - Gato \n3 - Conejo');

    switch (queAnimalitoDar) {
        case '1':
            darUnPerrito();            
            break;
        case '2':
            darUnGatito();
            break;
        case '3':
            darUnConejo();
            break;
        default:
            darEnAdopcion();
    }

    alert('Muchas gracias por confiar en nosotros. Le encontraremos una familia que pueda cuidarlo!')
}

function crearStringPerritos() {
    let info = '';
    perritosEnAdopcion.forEach(elemento => {
        info+= elemento.id + ' ' +'Nombre: ' + elemento.nombre + '\nRaza: ' + elemento.raza + '\nEdad: ' + elemento.edad + '\nSexo: ' + elemento.sexo + '\n\n'
    });

    return info; 
}

function adoptarUnPerrito() {
    let perroAdoptado = prompt(crearStringPerritos());
    
    const perroElegido = perritosEnAdopcion.find((perro)=>{
        return perro.id === parseInt(perroAdoptado);
    })
    
    if (!perroElegido) {
        alert('Opción inválida!')
        adoptarUnPerrito();
        return
    } 
    
    const perroElegidoIndex = perritosEnAdopcion.findIndex((perro)=>{
        return perro.id === parseInt(perroAdoptado);
    })
    console.log(perroElegido);
    
    perritosEnAdopcion.splice(perroElegidoIndex, 1);
    perrosAdoptados.push(perroElegido);
    console.log(perrosAdoptados);
    
    alert('Felicitaciones adoptaste a : ' + perroElegido.nombre);
    seguirAdoptando()
}

function crearStringGatitos() {
    let info = '';
    gatitosEnAdopcion.forEach(elemento => {
        info+= elemento.id + ' ' +'Nombre: ' + elemento.nombre + '\nRaza: ' + elemento.raza + '\nEdad: ' + elemento.edad + '\nSexo: ' + elemento.sexo + '\n\n'
    });

    return info; 
}

function adoptarUnGatito() {
    let gatoAdoptado = prompt(crearStringGatitos());

    const gatoElegido = gatitosEnAdopcion.find((gato)=>{
        return gato.id === parseInt(gatoAdoptado);
    })

    if (!gatoElegido) {
        alert('Opción inválida!')
        adoptarUnGatito();
        return
    } 

    const gatoElegidoIndex = gatitosEnAdopcion.findIndex((gato)=>{
        return gato.id === parseInt(gatoAdoptado);
    })
    console.log(gatoElegido);

    gatitosEnAdopcion.splice(gatoElegidoIndex, 1);
    gatosAdoptados.push(gatoElegido);
    console.log(gatosAdoptados);

    alert('Felicitaciones adoptaste a : ' + gatoElegido.nombre);
    seguirAdoptando();
}

function crearStringConejos() {
    let info = '';
    conejosEnAdopcion.forEach(elemento => {
        info+= elemento.id + ' ' +'Nombre: ' + elemento.nombre + '\nRaza: ' + elemento.raza + '\nEdad: ' + elemento.edad + '\nSexo: ' + elemento.sexo + '\n\n'
    });

    return info; 
}
function adoptarUnConejo() {
    let conejoAdoptado = prompt(crearStringConejos());

    const conejoElegido = conejosEnAdopcion.find((conejo)=>{
        return conejo.id === parseInt(conejoAdoptado);
    })

    if (!conejoElegido) {
        alert('Opción inválida!')
        adoptarUnConejo();
        return
    } 

    const conejoElegidoIndex = conejosEnAdopcion.findIndex((conejo)=>{
        return conejo.id === parseInt(conejoAdoptado);
    })
    console.log(conejoElegido);

    conejosEnAdopcion.splice(conejoElegidoIndex, 1);
    conejosAdoptados.push(conejoElegido);
    console.log(conejosAdoptados);

    alert('Felicitaciones adoptaste a : ' + conejoElegido.nombre);
    seguirAdoptando();
}

function adoptar() {
    let queAnimalitoAdoptar = prompt('Que animal quieres adoptar? \n1 - Perro \n2 - Gato \n3 - Conejo');

    switch (queAnimalitoAdoptar) {
        case '1':
            adoptarUnPerrito();
            break;
        case '2':
            adoptarUnGatito();
                break;
        case '3':
            adoptarUnConejo();
            break;
        default:
            alert('No has ingresado una opción válida');
            adoptar();
            break;
    }
}

function menuPrincipal (){
    
    
}

function login() {
    for (let i = 3; i >= 0; i--) {
      if (i === 0) {
        alert("Te equivocaste demasiado, pichón!");
        break;
      }
  
      let nombreElegido = prompt("Ingresa tu nombre de usuario.");
      let passElegida = prompt("Ingresa tu contraseña");
  
      if (nombreElegido === nombreUsuario && passElegida === passUsuario) {
        alert("Ingreso exitoso.");
        ingresar = true;
        break;
      }
    }
  
    return ingresar;
  }

function seguirAdoptando() {
    let respuestaSeguir = prompt("Quieres seguir adoptando?");

    if (respuestaSeguir.toLowerCase() === "si") {
      adoptar();
    } else if (respuestaSeguir.toLowerCase() === "no") {
      menuPrincipal();
    } else {
      while (
        respuestaSeguir.toLowerCase !== "si" &&
        respuestaSeguir.toLowerCase !== "no"
      ) {
        seguirAdoptando();
        break;
      }
    }
  }

function menuPrincipal(){
  let respuestaMenu = prompt('Hola ' + nombreUsuario + '! \n1- Quieres adoptar \n2- Dar en adopción \n3- Cerrar sesión.');
  switch(respuestaMenu){
      case '1':
          adoptar();
          break;
      case '2':
          darEnAdopcion();
          menuPrincipal();
          break;
      case '3':
          alert('Has cerrado sesión. Muchas gracias.')
          break;
      default:
          alert('No elegiste una opción válida');
          menuPrincipal();
          break;
  }
}

login();

if (ingresar) {
menuPrincipal();    
}

// function menuPrincipal() {
//     let respuestaMenu = prompt(
//       "Bienvenido/a " +
//         usuario +
//         " que tipo de mascota quieres adoptar hoy? \n1- Animales \n2- Peces \n3- Pájaros \n4- Cerrar sesión."
//     );
  
//     switch (respuestaMenu) {
//       case "1":
//         const animal = prompt(
//           "Puedes adoptar: \n1- Gato \n2- Perro \n3- Conejo"
//         );
//         switch (animal) {
//           case "1":
//             let preguntaAnimal = prompt("Tienes red?");
//             preguntaAnimal.toLowerCase();
//             if (preguntaAnimal.toLowerCase() === "si") {
//               alert("Felicidades por adoptar un mishi!");
//               seguirAdoptando();
//             } else {
//               alert(
//                 "No puedes adoptar un mishi, tienes que poner una red en tu casa!"
//               );
//               seguirAdoptando();
//               break;
//             }
//             break;
//           case "2":
//             alert("Felicitaciones, adoptaste un perrito!");
//             seguirAdoptando();
//             break;
//           case "3":
//             alert("Felicitaciones, adoptaste un conejo!");
//             seguirAdoptando();
//             break;
//           default:
//             alert("No ingresaste una opción válida");
//             seguirAdoptando();
//             break;
//         }
//         break;
//       case "2":
//         let preguntaPez = prompt("Tienes pecera?");
//         preguntaPez.toLowerCase();
//         if (preguntaPez.toLowerCase() === "si") {
//           alert("Felicidades, puedes adoptar un pez!");
//         } else if (preguntaPez.toLowerCase() === "no") {
//           alert(
//             "No puedes adoptar un pez, primero tienes que comprar una pecera!"
//           );
//           seguirAdoptando();
//           break;
//         } else {
//           alert("No ingresaste una opción válida.");
//           seguirAdoptando();
//         }
//         const pez = prompt(
//           "Puedes adoptar: \n1- Goldfish \n2- Angel \n3- Payaso"
//         );
//         switch (pez) {
//           case "1":
//             alert("Felicitaciones, adoptaste un Goldfish");
//             seguirAdoptando();
//             break;
//           case "2":
//             alert("Felicitaciones, adoptaste un Pez Ángel!");
//             seguirAdoptando();
//             break;
//           case "3":
//             alert("Felicitaciones, adoptaste un Pez Payaso!");
//             seguirAdoptando();
//             break;
//           default:
//             alert("No escogiste una opción válida, intentalo de nuevo!");
//             seguirAdoptando();
//             break;
//         }
//         break;
//       case "3":
//         let preguntaPajaro = prompt("Tienes jaula?");
//         preguntaPajaro.toLowerCase();
//         if (preguntaPajaro.toLowerCase() === "si") {
//           alert("Felicidades, puedes adoptar un pajarito!");
//         } else if (preguntaPajaro.toLowerCase() === "no") {
//           alert(
//             "No puedes adoptar un pájaro, primero tienes que comprar una jaula!"
//           );
//           seguirAdoptando();
//           break;
//         } else {
//           alert("No ingresaste una opción válida.");
//           seguirAdoptando();
//         }
//         const pajaro = prompt(
//           "Puedes adoptar: \n1- Cotorra \n2- Loro \n3- Tucán"
//         );
//         switch (pajaro) {
//           case "1":
//             alert("Felicidades, adoptaste una cotorra!");
//             seguirAdoptando();
//             break;
//           case "2":
//             alert("Felicidades, adoptaste un loro!");
//             seguirAdoptando();
//             break;
//           case "3":
//             alert("Felicidades, adoptaste un tucán!");
//             seguirAdoptando();
//             break;
//           default:
//             alert("No has ingresado una opción válida.");
//             seguirAdoptando();
//             break;
//         }
//         break;
//       case "4":
//         alert("Has cerrado sesión.");
//         break;
//       default:
//         alert("No has ingresado una opción válida.");
//         menuPrincipal();
//         break;
//     }
//   }



