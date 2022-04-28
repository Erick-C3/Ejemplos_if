var alguien = "erick";
var alguienConozco = "erick";

var imgSaludo = "https://c.tenor.com/3qEZ9YweWP8AAAAM/hello.gif";
var imgDesconocido = "https://c.tenor.com/c6S6vcG7724AAAAC/quien-te-conoce-desconocido.gif";

// “está lloviendo y tengo paraguas” o “está soleado y tengo calor?”

if( alguienConozco == alguien){
    document.write(`
        <img width="400" src=${imgSaludo}>
    `);
}else{    
    document.write(`
        <img width="400" src=${imgDesconocido}>
    `);
}