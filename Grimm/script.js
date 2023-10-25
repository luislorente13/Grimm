
// clase Wessen 
class Wesen {
    constructor(nombre, foto, tipo, peligrosidad, aspecto, notas) {
        this.nombre = nombre;
        this.foto = foto;
        this.tipo = tipo;
        this.peligrosidad = peligrosidad;
        this.aspecto = aspecto;
        this.notas = notas;
    }
}

// wessen 1
const Rosalee = new Wesen("Rosalee", "images/rosalee.png", "Cánido", "Neutral", "Cabello largo y castaño, pelaje anaranjado, ojos amarillentos", "Hermana menor de Freddy y esposa de Monroe"); 

// wessen 2
const Freddy = new Wesen("Freddy", "images/freddy.png", "Cánido", "Violento", "Cabello corto negro y barba, pelaje anaranjado", "Hermano mayor de Rosalee"); 

// wessen 3
const Ian = new Wesen("Ian", "images/ian.png", "Cánido", "Pacífico", "Cabello corto y castaño, pelaje de la barbilla blanquecino", "Líder de la resistencia");

// wessen 4
const Monroe = new Wesen("Monroe", "images/monroe.png", "Lobo", "Peligroso", "Ojos rojos, orejas punteagudas, pelo negro", "Mejor amigo de Nick Burkhardt"); 

// Wessen 5
const Angelina = new Wesen("Angelina", "images/angelina.png", "Lobo", "Peligroso", "Pelo largo y rubio", "Asesinó a los hermanos Bauerschwein"); 

// wessen 6 
const Hap = new Wesen("Hap", "images/hap.png", "Lobo", "Neutral", "Pelo y barba castaños, orejas punteagudas, cejas peludas", "Hermano de Angelina");

// wessen 7 
const Valentina = new Wesen("Valentina", "images/valentina.png", "Felino", "Neutral", "Pelo largo y castaño, ojos amarillentos, pelaje blanquecino y rallas negras", "Ex-detective que trabajaba en Alburqueque");

// wessen 8
const Benito = new Wesen("Benito", "images/benito.png", "Reptil", "Violento", "Púas alrededor de la cabeza, piel seca, dientes punteagudos", "Fué un fabricante de máscaras");

// wessen 9 
const Peter = new Wesen("Peter", "images/peter.png", "Cerdo", "Pacífico", "Pelo corto y canoso, perilla, nariz de cerdo", "Se dedicaba a investigar incendios");

// wessen 10 
const Coco = new Wesen("Coco", "images/coco.png", "Monstruo", "Violento", "Semi-calvo, ojos amarillos, dientes punteagudos", "Se alimenta de aquellos que causan daño a los demás");

// array
const ArrayWesen = [];

ArrayWesen.push(Rosalee);
ArrayWesen.push(Freddy);
ArrayWesen.push(Ian);
ArrayWesen.push(Monroe);
ArrayWesen.push(Angelina);
ArrayWesen.push(Hap);
ArrayWesen.push(Valentina);
ArrayWesen.push(Benito);
ArrayWesen.push(Peter);
ArrayWesen.push(Coco);

// mostrar foto wessens 
function mostrarArrayWesen() {

    const lista = document.getElementById("lista"); 

    lista.innerHTML = "";

    ArrayWesen.forEach(Wesen => {

        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = Wesen.foto;
        img.alt = Wesen.nombre;
        img.width = 150;
        img.height = 150;
        
        const p = document.createElement("p");
        p.textContent = Wesen.nombre;

        img.onclick = function() {
        
            // cogemos los valores del formulario 
            const nombre = document.getElementById("nombre");
            const foto = document.getElementById("foto");
            const tipo = document.getElementById("tipo");
            const peligrosidad = document.querySelectorAll('input[name="peligrosidad"]');
            const aspecto = document.getElementById("aspecto");
            const notas = document.getElementById("notas");

            // asociamos los valores del formulario con los de los wessens del array
            nombre.value = Wesen.nombre;
            foto.value = Wesen.foto;
            tipo.value = Wesen.tipo;
            
            // marcamos el radiobutton correspondiente de peligrosidad
            for (let i = 0; i < peligrosidad.length; i++) {

                if (peligrosidad[i].value === Wesen.peligrosidad) {

                    peligrosidad[i].checked = true;
                    break;
                }
            }   

            aspecto.value = Wesen.aspecto;
            notas.value = Wesen.notas;    
        };

        li.appendChild(img);
        li.appendChild(p);

        lista.appendChild(li);
    });
}

// agregar wessen
function agregarWesen() {

    if (!validarFormulario()) return;
    const nombre = document.getElementById("nombre").value;
    const foto = document.getElementById("foto").value;
    const tipo = document.getElementById("tipo").value;
    const peligrosidad = document.querySelector('input[name="peligrosidad"]:checked').value;
    const aspecto = document.getElementById("aspecto").value;
    const notas = document.getElementById("notas").value;

    const nuevoWesen = new Wesen(nombre, foto, tipo, peligrosidad, aspecto, notas);   

    ArrayWesen.push(nuevoWesen);

    mostrarArrayWesen();
    validarFormulario();   
    limpiarFormulario();

    alert("Wessen agregado correctamente.");
}

// borrar wessen
function borrarWesen() {

    const nombre = document.getElementById("nombre").value;
    const posicion = ArrayWesen.findIndex(Wesen => Wesen.nombre === nombre);

    ArrayWesen.splice(posicion, 1);

    mostrarArrayWesen();
    limpiarFormulario();

    alert("Wessen eliminado correctamente.");
}

// modificar wessen
function modificarWesen() {

    const nombre = document.getElementById("nombre").value;
    const foto = document.getElementById("foto").value;
    const tipo = document.getElementById("tipo").value;
    const peligrosidad = document.querySelector('input[name="peligrosidad"]:checked').value;
    const aspecto = document.getElementById("aspecto").value;
    const notas = document.getElementById("notas").value;

    const posicion = ArrayWesen.findIndex(Wesen => Wesen.nombre === nombre);

    ArrayWesen[posicion].foto = foto;
    ArrayWesen[posicion].tipo = tipo;
    ArrayWesen[posicion].peligrosidad = peligrosidad;
    ArrayWesen[posicion].aspecto = aspecto;
    ArrayWesen[posicion].notas = notas;

    mostrarArrayWesen();
    validarFormulario();
    limpiarFormulario();

    alert("Datos modificados correctamente.");
}

// limpiar datos del formulario
function limpiarFormulario() {

    let formulario = document.getElementById("form");

    formulario.reset();
}


// mostrar los wessens cargador en memoria al iniciar la página
document.addEventListener("DOMContentLoaded", function() {

    mostrarArrayWesen();
});

// validar formulario
function validarFormulario() {

    const nombre = document.getElementById("nombre").value;
    const foto = document.getElementById("foto").value;
    const tipo = document.getElementById("tipo").value;
    const peligrosidad = document.querySelector('input[name="peligrosidad"]:checked');

    if (nombre == "" || foto == "" || tipo == "" || peligrosidad == null) {

        alert("ERROR. Compruebe los campos.");
        return false;
        
    } else return true;
}