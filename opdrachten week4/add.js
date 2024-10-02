

function berekenInhoud(lengte, hoogte, diepte){
    return lengte * hoogte * diepte;
}
function cylinder(diameter, hoogte){
    const radius = diameter / 2;
    const pi = Math.PI;
    return Math.pow(radius, 2) * pi * hoogte;
}
function driehoek(lengte, hoogte) {
    return Math.sqrt(Math.pow(lengte, 2) + Math.pow(hoogte, 2));
}
function gemiddelt(getal1, getal2, getal3, getal4, getal5, getal6, getal7) {
    let totaal = getal1 + getal2 + getal3 + getal4 + getal5 + getal6 + getal7;
    return totaal / 7;
}

let yayyy = gemiddelt(10, 20, 30, 40, 50, 60, 70);
console.log(yayyy);
let bereken = driehoek(3, 4);
console.log(bereken);
let cilinderInhoud = cylinder(10, 5);
console.log(cilinderInhoud); 
let kubusInhoud = berekenInhoud(10, 5, 10);
console.log(kubusInhoud);
