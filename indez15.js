function puntajeDeGolf(par, golpes) {
    if (golpes == 1){
    return "hole-in-one";}
 else if (golpes == par - 2){
    return "Eagle";
}
else if (golpes == par - 1){
 return "birdie";
}
else if (golpes == par){
    return "par";
}
else if (golpes == par + 1){
return "bogey";} 
else if (golpes == par + 2){
    return "Double Bogey";
}
else if (golpes >= par + 3){
return "GO Home";
}
}

console.log(puntajeDeGolf(4,1));