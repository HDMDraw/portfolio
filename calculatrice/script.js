// Ici, je vérifie constamment si des touches sont pressées.
document.addEventListener('keydown', function(event) {
    // S'il s'agit d'un nombre ou d'un opérateur...
    if(isNaN(event.key) == false || event.key.value == '+' || event.key.value == '-' || event.key.value == '*' || event.key.value == '/'){
        //...j'effectue la fonction addToCalc()
        addToCalc(event.key)
    }
    
  });

// Avec cette fonction, on ajoute l'entrée sur l'écran de la calculatrice
function addToCalc(elementToAdd){
     // Si l'écran est vide, ou bien que l'entrée n'est pas un nombre, on affiche un message d'erreur.
    if(document.getElementById("zoneTexte").value == "" && isNaN(elementToAdd) == true) {
        alert("Une opération ne peut pas commencer par un opérateur.");
    }
    else{
        // Sinon, si le dernier caractère est un opérateur, et l'entrée aussi, on fait un nouveau message d'erreur.
        if(isNaN(document.getElementById("zoneTexte").value[document.getElementById("zoneTexte").value.length - 1]) == true && isNaN(elementToAdd) == true) {
            alert("Deux opérateurs ne peuvent se suivrent.");
        }
        else{
            // Sinon, si tout est bon, on ajoute le nombre à la suite.
            document.getElementById("zoneTexte").value += elementToAdd
        }
    }
}

// Il s'agit là d'une fonction temporaire, empêchant de retirer le mode simplifié. Elle sera supprimé une fois que la version complète sera terminée.
function tempImp() {
    document.getElementById("simply").checked = true
    alert("Une version plus complète est en cours de développement. Merci de patienter.")
}

// Cette fonction corrige la saisie, en supprimant le dernier caractère entré.
function correctingCalc() {
    // On renomme la chaine pour plus de simplicité
    chaine = document.getElementById("zoneTexte").value
    // On convertit la chaine en tableau, sans séparations
    table = chaine.split("")
    // On retire le dernier élément entré
    table.pop()
    // On reconvertit la table en chaine, plus précisément directement dans l'écran de la calculatrice, toujours sans séparation.
    document.getElementById("zoneTexte").value = table.join("")
}

// Cette fonction calcul la zone de texte.
function startCalc(){
    // On renomme la chaine pour plus de simplicité
    chaine = document.getElementById("zoneTexte").value
    // On effectue l'opération de la chaine
    let resultat = eval(chaine)
    // On affiche le résultat dans la zone de texte.
    document.getElementById("zoneTexte").value = resultat
}