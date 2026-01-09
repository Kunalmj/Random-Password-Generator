let chars = [ "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",

  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

  "0","1","2","3","4","5","6","7","8","9",

  "!","@","#","$","%","^","&","*","(",")",
  "_","+","-","=","[","]","{","}","|",
  ";",":","'",",",".","<",">","?","/"
];

let inp = document.getElementById("password");
let len = document.getElementById("length");
let range = document.getElementById("lengthRange");
len.value=range.value;
function rangeChange(){
    len.value=range.value;
}

function generate(){
    let password = "";
    for(let i = 0; i<Number(len.value); i++){
        password+=chars[Math.floor(Math.random()*chars.length)];
    }
    inp.value = password;
}

function copyPassword(){
    navigator.clipboard.writeText(inp.value)
}