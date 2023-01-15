const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passPara1El = document.getElementById("passPara1");
let passPara2El = document.getElementById("passPara2");



function gnrPass(){
    let randomPassIndex1 = Math.floor(Math.random()*characters.length);
    let randomPassIndex2 = Math.floor(Math.random()*characters.length);
    let randomPassIndex3 = Math.floor(Math.random()*characters.length);
    let randomPassIndex4 = Math.floor(Math.random()*characters.length);
    let randomPassIndex5 = Math.floor(Math.random()*characters.length);
    let randomPassIndex6 = Math.floor(Math.random()*characters.length);
    let randomPassIndex7 = Math.floor(Math.random()*characters.length);
    let randomPassIndex8 = Math.floor(Math.random()*characters.length);
    let randomPassIndex9 = Math.floor(Math.random()*characters.length);
    let randomPassIndex10 = Math.floor(Math.random()*characters.length);
    let randomPassIndex11 = Math.floor(Math.random()*characters.length);
    let randomPassIndex12 = Math.floor(Math.random()*characters.length);
    let randomPassIndex13 = Math.floor(Math.random()*characters.length);
    let randomPassIndex14 = Math.floor(Math.random()*characters.length);
    let randomPassIndex15 = Math.floor(Math.random()*characters.length);
    
   
    let randomPasswoed1 = characters[randomPassIndex1];
    let randomPasswoed2 = characters[randomPassIndex2];
    let randomPasswoed3 = characters[randomPassIndex3];
    let randomPasswoed4 = characters[randomPassIndex4];
    let randomPasswoed5 = characters[randomPassIndex5];
    let randomPasswoed6 = characters[randomPassIndex6];
    let randomPasswoed7 = characters[randomPassIndex7];
    let randomPasswoed8 = characters[randomPassIndex8];
    let randomPasswoed9 = characters[randomPassIndex9];
    let randomPasswoed10 = characters[randomPassIndex10];
    let randomPasswoed11 = characters[randomPassIndex11];
    let randomPasswoed12 = characters[randomPassIndex12];
    let randomPasswoed13 = characters[randomPassIndex13];
    let randomPasswoed14 = characters[randomPassIndex14];
    let randomPasswoed15 = characters[randomPassIndex15];
    
    let randomFPass = randomPasswoed1 + randomPasswoed2 + randomPasswoed3 + randomPasswoed4 + randomPasswoed5 + randomPasswoed6 + randomPasswoed7 + randomPasswoed8 + randomPasswoed9 + randomPasswoed10 + randomPasswoed11 + randomPasswoed12 + randomPasswoed13 + randomPasswoed14 + randomPasswoed15; 
    
    passPara1El.textContent = randomFPass;
    
    //lineebreakkk
    
    let r1andomPassIndex1 = Math.floor(Math.random()*characters.length); 
    let r1andomPassIndex2 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex3 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex4 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex5 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex6 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex7 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex8 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex9 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex10 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex11 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex12 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex13 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex14 = Math.floor(Math.random()*characters.length);
    let r1andomPassIndex15 = Math.floor(Math.random()*characters.length);
    
   
    let r1andomPasswoed1 = characters[r1andomPassIndex1];
    let r1andomPasswoed2 = characters[r1andomPassIndex2];
    let r1andomPasswoed3 = characters[r1andomPassIndex3];
    let r1andomPasswoed4 = characters[r1andomPassIndex4];
    let r1andomPasswoed5 = characters[r1andomPassIndex5];
    let r1andomPasswoed6 = characters[r1andomPassIndex6];
    let r1andomPasswoed7 = characters[r1andomPassIndex7];
    let r1andomPasswoed8 = characters[r1andomPassIndex8];
    let r1andomPasswoed9 = characters[r1andomPassIndex9];
    let r1andomPasswoed10 = characters[r1andomPassIndex10];
    let r1andomPasswoed11 = characters[r1andomPassIndex11];
    let r1andomPasswoed12 = characters[r1andomPassIndex12];
    let r1andomPasswoed13 = characters[r1andomPassIndex13];
    let r1andomPasswoed14 = characters[r1andomPassIndex14];
    let r1andomPasswoed15 = characters[r1andomPassIndex15];
    
    let randomFPass2 = r1andomPasswoed1 + r1andomPasswoed2 + r1andomPasswoed3 + r1andomPasswoed4 + r1andomPasswoed5 + r1andomPasswoed6 + r1andomPasswoed7 + r1andomPasswoed8 + r1andomPasswoed9 + r1andomPasswoed10 + r1andomPasswoed11 + r1andomPasswoed12 + r1andomPasswoed13 + r1andomPasswoed14 + r1andomPasswoed15 ;
     
    passPara2El.textContent = randomFPass2;
   
    
}


function copyonclick1(){
    document.execCommand("copy")
}
function copyonclick2(){
   document.execCommand("copy")
}
