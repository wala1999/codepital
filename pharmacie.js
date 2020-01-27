 class Pharmacie {
    constructor() {
        this.argent = 0;

    }

    donnerTraitement(patient) {
        let prixMedoc;
        switch (patient.traitement) {
            case "ctrl+maj+f":
                prixMedoc = 60;
                break;
            case "saveOnFocuxChange":
                prixMedoc = 100;
                break;
            case "CheckLinkRelation":
                prixMedoc = 35;
                break;
            case "Ventoline":
                prixMedoc = 40;
                break;
            case "f12+doc":
                prixMedoc = 20;
                break;
            default:
                console.log("Nous n'avons pas de trainement pour vous");

        }
        // Si le patient à assez d'argent il paye
        if (patient.argent >= prixMedoc) {
            // le patient paye la pharmacie
            patient.paye(this, prixMedoc);
            // le patient est en bonne santé
            patient.etatSante = "bonne santé";
        } else {// sinon le patient devient mourrant
            patient.etatSante = "mourrant";
        }
    }
}