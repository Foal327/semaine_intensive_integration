var stock = parseInt(document.getElementById("stock").innerHTML);
var quantite = parseInt(document.getElementById("quantite").innerHTML);
var prix = parseInt(document.getElementById("prix").innerHTML);

function quantitePlus(){
  stock--;
  quantite++;
  prix = prix + 35.95;
  
  if (stock <= 0){
    stock = 0;
    quantite--;
    prix = prix - 35.95;
  } 
  
  arrondi = prix * 10;
  prixArrondi = arrondi/10;
  document.getElementById("stock").innerHTML = stock;
  document.getElementById("quantite").innerHTML = quantite;
  document.getElementById("prix").innerHTML = prixArrondi ;
}


function quantiteMoins(){
  stock++;
  quantite--;
  prix = prix - 35.95;
  if (quantite < 0){
    quantite = 0;
    stock--;
    prix = prix + 35.95;
  }
  
  arrondi = prix * 10;
  prixArrondi = arrondi/10;
  document.getElementById("stock").innerHTML = stock;
  document.getElementById("quantite").innerHTML = quantite;
  document.getElementById("prix").innerHTML = prixArrondi;
} 