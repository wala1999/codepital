
class Patient {
    constructor(nom, maladie, argent, poche, etatSante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.lieu = ''

    }
    traitement() {
        this.etatSante = 'traitement'
    }
    goTo(lieu) {
        this.lieu = lieu.nom
    }
    takeCare() {

    }
    paye(prix) {
        this.argent -= prix;
    }

}

let marcus = new Patient('Marcus', 'mal indenté', 100, [], 'malade')
let optimus = new Patient('Optimus', 'unsave', 200, [], 'malade')
let Sangoku = new Patient('Sangoku', '404', 80, [], 'malade')
let darthVader = new Patient('DarthVader', 'azmatique', 110, [], 'malade')
let semicolon = new Patient('Semicolon', 'syntaxError', 60, [], 'malade')

class Doctor {
    constructor(nom, argent, cabinet) {
        this.nom = nom
        this.argent = argent
        this.cabinet = cabinet
        this.consulation = 50
    }
    diagnostique(maladie) {
        let traitement
        switch (maladie) {
            case 'mal indenté':
                traitement = `ctrl+maj+f`;
                break;
            case 'unsave':
                traitement = `saveOnFocusChange`;
                break;
            case '404':
                traitement = `CheckLinkRelation`;
                break;
            case 'azmatique':
                traitement = `Ventoline`;
                break;
            case 'syntaxError':
                traitement = `f12+doc`;
                break;
            default:
                console.log("Vous n'etes pas malade !")
        }
        return traitement;

    }
    patientIn(malade) {
        this.cabinet.push(malade)
    }
    patientOut() {
        this.argent += this.consulation
        this.cabinet.pop()
    }
}


let chat ={
    nom : "chat"
}
let doc = new Doctor('Debugger', 0, ['chat'])

class Lieu {
    constructor(nom) {
        this.nom = nom
        this.personnes = []
    }
    quitter() {
        this.personnes.shift()
    }


}
let sdt = new Lieu("Salle d'attente")
let allPatients = [marcus, optimus, Sangoku, darthVader, semicolon]
for (let i = 0; i < allPatients.length; i++) {

    sdt.personnes.push(allPatients[i]);
}


let trait;


class Pharmacien {
    constructor(nom) {
        this.nom = nom;
    }
    prescrire() {
        let prix
        switch (trait) {
            case `ctrl+maj+f`:
                prix = 60;
                break;
            case `saveOnFocusChange`:
                prix = 100;
                break;
            case `CheckLinkRelation`:
                prix = 35;
                break;
            case `Ventoline`:
                prix = 40
                break;
            case `f12+doc`:
                prix = 20
                break;
        }
        return prix;
    };

}


let pharmacie = new Lieu('Pharmacie')

let pharmacien = new Pharmacien('Le pharmacien')
let prixMedoc;

let i = 0;
let timer = 0
let diff;

let j = -1

function doSetTimeout(j) {
    
        setTimeout(() => {
        
            console.log('Le patient est ' + sdt.personnes[0].nom)
        }, timer += 1000);
        setTimeout(() => {
            console.log('Il attend dans la ' + sdt.nom);
        }, timer += 1000);
        setTimeout(() => {
            console.log('Le docteur ' + doc.nom + " le reçoit dans son cabinet.")
            doc.patientIn(sdt.personnes[0]);
            sdt.quitter()
        }, timer += 1000);
    
    
    
      
        setTimeout(() => {
            console.log(allPatients[j].nom + " lui explique son problème");
    
        }, timer += 1000);
    
        setTimeout(() => {
            console.log('Le docteur ' + doc.nom + ' lui diagnostique : ' + allPatients[j].maladie);
    
        }, timer += 1000);
    
        setTimeout(() => {
            trait = doc.diagnostique(allPatients[j].maladie)
            console.log('Le docteur lui son indique son traitement qui est : ' + trait + "\nEt lui donne son ordonnace");
    
        }, timer += 1000);
    
        setTimeout(() => {
            console.log(allPatients[j].nom + ' remercie le doc et le paye');
            marcus.paye(doc.consulation)
            doc.patientOut();
        }, timer += 1000);
    
        setTimeout(() => {
                console.log(allPatients[j].nom + " se rend a la pharmacie ");
        marcus.goTo(pharmacie)
        }, timer += 1000);
    
        setTimeout(() => {
                console.log(allPatients[j].nom + " est arrivé a la pharmacie ");
    
        }, timer += 1000);
    
        setTimeout(() => {
                console.log(allPatients[j].nom + " donne l'ordonnace au pharmacien ");
        prixMedoc = pharmacien.prescrire();
        }, timer += 1000);
        
        setTimeout(() => {
                console.log(pharmacien.nom + " lui donne son traitement qui coûte " + prixMedoc);
    
        }, timer += 1000);
    
        setTimeout(() => {
            console.log(allPatients[j].nom+" paye so medocs");
            
            marcus.paye(prixMedoc)
    
        }, timer += 1000);
    
        setTimeout(() => {
                console.log(allPatients[j].nom + " prends son medocs");
    
        }, timer += 1000);
     j++
  }
// let p = sdt.personnes.length - 1;
// setInterval(() => {
//     console.log('MIAAAAOUW')
//     if(p == 1) {
//         clearInterval();
//     }

// }, 2000)

  for (let i = sdt.personnes.length - 1; i >= 0; i--) {

      doSetTimeout(j++);
    //   p--;
      
      
  }

















