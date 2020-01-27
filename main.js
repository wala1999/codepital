class Patient {
    //je définis les parametres
    constructor(name, maladie, argent,traitement) {


        this.name = name;
        this.maladie = maladie;
        this.argent = argent;
        this.traitement = traitement;
        // this.etatSante = malade;
        // this.localisatin;


    }

    goTo(endroit) {
        this.localisation = endroit;
    }
    paye(personne, montant) {
        personne.argent += montant;
        this.argent -= montant;
    }


}

let Marcus=new Patient('mal indenté','100','aucun','malade')
console.log(Marcus)

let Optimus=new Patient('unsave','200','vide','malade')
console.log(Optimus)

let Sangoku=new Patient('404','80','vide','malade')
console.log(Sangoku)

let DarthVader=new Patient('azmatique','110','vide','malade')
console.log(DarthVader)

let Semicolon=new Patient('syntaxError','60','vide','malade')
console.log(Semicolon)

////////==================Description du doctor================***///

class Doctor {
    constructor(nom, argent) {
        this.nom = nom;
        this.argent = argent;
        this.cabinet = [];
        this.salleDattente = [];
    }

    


    //DIAGNOSTIQUER LES PATIENTS
    diagnostique(patient) {
if(patient.maladie == 'mal indenté'){
    console.log('Le traitement de ${patient.nom} est ${tarif1.traitements)')
}else if(patient.maladie =="unsave"){
    console.log('Le traitement de ${patient.nom} est ${traif2.traitement')
}else if (patient.maladie =="404")  {
    console.log('Le traitement de ${patient.nom} est ${traif3.traitement')
}else if (patient.maladie== azmatique){
    console.log('Le traitement de ${patient.nom} est ${traif4.traitement')
}
        
                console.log("je ne sait pas ce que vous avez");

        }
// //propriété etatSante du patient à "diagnostiqué"
//         this.cabinet.etatSante = "diagnostiqué";

    }

    // Le doctor fait entré le patient dans son cabinet
    patientIn(patient) {
        // le doctor met le patient dans le cabinet
        this.cabinet.push(patient);
        // le doctor sort le patient de la salle d'attente
        this.salleDattente.shift()
    }
    // le doctor fait sortir le patient de sont cabinet
    patientOut() {
        this.cabinet.pop();
    }

}


///LA PHARMACIE

class Pharmacie {
    constructor() {
        this.argent = 0;
    }
}

(Patient); {
    let prixMedoc;
    switch (Patient.traitement) {
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
        console.log("Nous somme désolé mais nous n'avons pas de traitement pour vous!");
    }


//SI le patient a assez d'argent il paye

if (Patient.argent >= prixMedoc) {
    // le patient paye la pharmacie
    Patient.paye(this, prixMedoc);
    // le patient est en bonne santé
    Patient.etatSante = "bonne santé";
} else {// sinon le patient devient mourrant
    Patient.etatSante = "mourrant";
}


















