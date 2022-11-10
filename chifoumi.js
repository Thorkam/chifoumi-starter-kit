let chifoumi=["pierre", "feuille", "ciseau"];

let joueur1=document.getElementById("image-gauche");
let joueur2=document.getElementById("image-droite");
let titre=document.getElementById("titre");
let gauche=document.getElementById("gauche");
let droite=document.getElementById("droite");
let rejouer=document.getElementById("boutonRejouer")
let randomLeft;
let randomRight;

rejouer.style.display = "none"

joueur1.addEventListener("click", (event) => {
    let random1=Math.floor(Math.random()*chifoumi.length);
    joueur1.style.backgroundImage =`url(./images-pfc/${chifoumi[random1]}.jpg)`;
    joueur1.style.pointerEvents="none";
   randomLeft=chifoumi[random1];
   verifEgalite();
});

joueur2.addEventListener("click", (event) => {
    let random2=Math.floor(Math.random()*chifoumi.length);
    joueur2.style.backgroundImage =`url(./images-pfc/${chifoumi[random2]}.jpg)`;
    joueur2.style.pointerEvents="none";
    randomRight =chifoumi[random2];
    verifEgalite();
    rejouer.style.display = "initial"
    rejouer.addEventListener('click', (event) => {
        initialisation();
    });
});

function verifEgalite () {
    if (randomLeft == randomRight) {
        titre.textContent="Egalité";
        gauche.style.backgroundColor="blue";
        droite.style.backgroundColor="blue";        
    } else if (randomLeft == "pierre" && randomRight == "ciseau") {
        titre.textContent = "Les pierres ont gagné";
        gauche.style.backgroundColor="green";
        droite.style.backgroundColor="red";
    } else if (randomLeft == "ciseau" && randomRight == "feuille") {
        titre.textContent="Les ciseaux ont gagné";
        gauche.style.backgroundColor="green";
        droite.style.backgroundColor="red";
    } else if (randomLeft == "feuille" && randomRight == "pierre") {
        titre.textContent = "Les feuilles ont gagné";
        gauche.style.backgroundColor="green";
        droite.style.backgroundColor="red";
    }    else if (randomRight == "pierre" && randomLeft == "ciseau") {
        titre.textContent="Les pierres ont gagné";
        droite.style.backgroundColor="green";
        gauche.style.backgroundColor="red";
    } else if (randomRight == "ciseau" && randomLeft == "feuille") {
        titre.textContent ="Les ciseaux ont gagné";
        droite.style.backgroundColor ="green";
        gauche.style.backgroundColor= "red";
     } else if (randomRight == "feuille" && randomLeft == "pierre") {        
            titre.textContent = "Les feuilles ont gagné";
            droite.style.backgroundColor= "green";
            gauche.style.backgroundColor="red";
        }        
    };
//function initialisation() { } à faire

