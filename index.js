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
document.getElementById("splash").style.display = "none";
document.getElementById("menu").setAttribute("nom", "Menú");
document.getElementById("superior").classList.add("ocult");
document.getElementById("superior").classList.remove("ocult");
document.getElementById("botó").addEventListener("click", function() {
    // espai per al codi que s'executa quan es fa clic sobre el botó    
});
<button onclick="nou_usuari()">Nou usuari</button>
let scriptURL =    // aquí s'ha d'escriure l'URL del script
let consulta = scriptURL + "?query=select&where=Tipus&is=Turisme";
    fetch(consulta)
        .then((resposta) => {    // primera "promesa"
            return resposta.json();    // retorna les dades JSON obtingudes com a llista
        })
        .then((resposta) => {    // segona "promesa". Resposta = [{"Tipus":"Turisme","Motor":"Elèctric","Any":"2022","Velocitat":"120"}]
// espai per a les instruccions que s'executen en rebre la llista
        });
function canvia_seccio(num_boto) {
    const menu = document.getElementById("menu");
    const num_botons = menu.children.length;    // el nombre de botons dins de l'element "menu"
    for (let i = 1; i < num_botons; i++) {
        let boto = document.getElementById("boto_" + i);
        let seccio = document.getElementById("seccio_" + i);
        if (i == num_boto) {
            boto.style.color = "#950E17";    // es destaca la secció activa amb el canvi de colors del botó corresponent
            boto.style.backgroundColor = "#FCDEE0";
            seccio.style.display = "flex";    // es fa visible la secció activa
        }
        else {
            boto.style.color = "white";    // colors dels botons de seccions inactives
            boto.style.backgroundColor = "#950E17";
            seccio.style.display = "none";    // s'oculten les seccions inactives
        }
    }
}
let validat = false;    // variable que permet saber si hi ha algun usuari validat
let nom, contrasenya;
let scriptURL = "https://script.google.com/.../exec"    // s'ha de substituir la cadena de text per la URL del script

function inici_sessio() {
    nom = document.getElementById("nom_usuari").value;    // la propietat "value" d'un quadre de text correspon al text escrit per l'usuari
    contrasenya = document.getElementById("contrasenya").value;
    let consulta = scriptURL + "?query=select&where=usuari&is=" + nom + "&and=contrasenya&equal=" + contrasenya;
    fetch(consulta)
        .then((resposta) => {   // registres que contenen el nom d'usuari i contrasenya escrits per l'usuari
            return resposta.json();    // conversió a llista
        })
        .then((resposta) => {
            if(resposta.length == 0) {    // llista buida
                window.alert("El nom d'usuari o la contrasenya no són correctes.");
            }
            else {    // llista amb (almenys) un registre
                window.alert("S'ha iniciat correctament la sessió.");
                inicia_sessio();    // usuari validat, s'executen les instruccions del procediment "inicia_sessio"
            }
        });    
}
function inicia_sessio() {
    validat = true;    // usuari validat
    document.getElementById("seccio_0").style.display = "none";    // s'oculta la secció de validació d'usuaris
    canvia_seccio(1);    // es mostra la secció 1
}
