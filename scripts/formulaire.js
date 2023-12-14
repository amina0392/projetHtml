function validerFormulaire() {
    // Déclaration des variables pour la récupérations des valeurs du formulaire de contact
    let civilite = document.getElementById("civilite").value;
    let champNom = document.getElementById("nom").value;
    let champPrenom = document.getElementById("prenom").value;
    let champEmail = document.getElementById("email").value;
    let champTel = document.getElementById("numero").value;
    let message = document.getElementById("message").value;
    let caseRGPD = document.getElementById("rgpd");
    let envoyer = document.getElementById("envoyer");
    
    // Utilisation d'une expression régulière pour valider le format de l'e-mail
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (civilite === "Civilité*") {
        // Afficher le message d'erreur
        document.getElementById("messageErreur").innerText = "Veuillez choisir votre civilité.";
        return false; // Arrêter la soumission du formulaire
    }
    else if (champNom === "") {
        document.getElementById("messageErreur").innerText = "Veuillez saisir votre Nom.";
        return false;
    } else if (champPrenom === "") {
        document.getElementById("messageErreur").innerText = "Veuillez saisir votre Prénom.";
        return false;

    } else if (!emailRegex.test(champEmail)) {
        document.getElementById("messageErreur").innerText = "Veuillez saisir une adresse e-mail valide.";
        return false;
    } else if (isNaN(champTel)) {
        document.getElementById("messageErreur").innerText = "Veuillez saisir un numero de téléphone valide.";
        return false; 
    } else if (champTel < 10) {
        document.getElementById("messageErreur").innerText = "Veuillez saisir un numero de téléphone valide.";
        return false;     
    }
    else if (message === "") {
        document.getElementById("messageErreur").innerText = "Veuillez saisir votre message";
    }
    else if (!caseRGPD.checked) {
        document.getElementById("messageErreur").innerText = "Veuillez accepter les termes RGPD avant d'envoyer le formulaire.";
        return false;
    } 
    else {

        document.getElementById("formulaire").submit();
    }
    return true;
}