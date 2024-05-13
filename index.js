console.log("Visualitzant l'apartat introductori.")    // mostra el text entre cometes en la consola del panell d'eines
const dies = 365; let nom = "Eric"; let edat = 27;
let a = 5; let b = 7; let c = -2;
let r = (a + 3 * b) * a / c;     // resultat: r = -65 
let frase = "El jugador " + nom + " té " + edat + " anys.";    // resultat: frase = "El jugador Eric té 27 anys"
i++;    // equivalent a i = i + 1;
i += 5;    // equivalent a i = i + 5;
let text = "racó ";
text += "de programació";    // resultat: text = "racó de programació"
const estacio = ["primavera","estiu","tardor","hivern"];
let parent = [];
parent[0] = "mare";
parent[1] = "pare";
parent[2] = "fill";
parent[3] = "avi";
const matriu = [[3,7,2],[5,9 -3]];
let element = matriu[1][0];    // resultat: element = 5
(edat == 27)    // igual a 27
(alumnes > 30)   // superior a 30
(estacio != 'hivern')    // diferent a 'hivern'
let temperatura = 23; let roba;
if (temperatura < 15) {
    roba = "d'hivern";
} else {
    roba = "d'estiu";
}    // resultat: roba = "d'estiu";
let frase = "Els valors quadrats dels primers nombres són:"
for (let i = 1; i < 6; i++) {    // índex i des d'1 fins a 5, en increments d'1
    frase += " ";    // s'afegeix un espai per separar els valors numèrics
    frase += i * i;    // s'afegeix el valor de l'index al quadrat
}    // resultat: frase = "Els valors quadrats dels primers nombres són: 1 4 9 16 25"
let i = 1;
while (i < 6) {    // mentre l'índex i sigui inferior a 6
    frase += " ";
    frase += i * i;
    i++;    // s'incrementa l'índex a cada iteració (si no es produïria un bucle infinit)
}
let continent = ["Europa","Àsia","Amèrica","Àfrica","Oceania"];
let llistat = "Nom dels continents:";
for (let i in continent) {    // per cada element de la llista, amb índex i
   llistat += " ";
   llistat += continent[i];
}    // resultat: llistat = "Nom dels continents: Europa Àsia Amèrica Àfrica Oceania"
let temps = 0;
function incrementa(instant, durada) {    // definició de la funció incrementa amb dos paràmetres
    temps += instant;
    temps += durada;
}
incrementa(10, 5);    // crida a la funció amb els arguments instant = 10 i durada = 5. Resultat: temps = 15
function incrementa(instant, durada) {    // definició de la funció incrementa amb dos paràmetres
    instant += durada;
    return instant;    // instrucció de retorn del resultat (15)
}
let temps = incrementa(10, 5)    // crida a la funció amb els arguments instant = 10 i durada = 5. Resultat: temps = 15
function (a) {    // definició convencional
  return a + 100;
}

a => a + 100;    // definició mitjançant "procediment fletxa"
async function saluda() {
    return "Hola";
}
saluda().then(
  salutacio => salutacio + ". Bon dia"
);