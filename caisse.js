const budget_du_client = 20000;
const prix_dun_cahier = 4500;
let quantité_cahier = 4;
const prix_dun_stylos = 1500;
let quantité_stylo = 3;
const montant_cahiers = prix_dun_cahier * quantité_cahier;
const montant_stylos = prix_dun_stylos * quantité_stylo;
const montant_total_achat = montant_cahiers + montant_stylos;
console.log("===== CAISSE =====");
console.log(`Cahier: ${montant_cahiers} FCFA`);
console.log(`Stylos: ${montant_stylos} FCFA`);
console.log(`Total: ${montant_total_achat} FCFA`);
console.log(`Montant total = ${budget_du_client} FCFA`);
if(montant_total_achat <= budget_du_client){
    console.log("Budget suffisant")
} else{console.log("Budget insuffisant")}
console.log(" ");
for(let i = 1; i <= 5; i++){
    console.log(`Achat numéro ${i}`)}