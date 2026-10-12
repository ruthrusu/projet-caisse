const budget_du_client = 20000;
const prix_dun_cahier = 1500;
let quantité_cahier = 4;
const prix_dun_stylos = 500;
let quantité_stylo = 3;
const montant_cahiers = prix_dun_cahier + quantité_cahier;
const montant_stylos = prix_dun_stylos + quantité_stylo;
const montant_total_achat = montant_cahiers + montant_stylos;
if(montant_total_achat <= budget_du_client){
    console.log("Budget suffusant")
} else{console.log("Budget suffisant")}
console.log(`Montant total = ${budget_du_client} FCFA`);
 