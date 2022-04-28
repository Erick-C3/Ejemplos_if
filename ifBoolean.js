var estaLloviendo = false;
var estaLloviznando = false;

var imgLlueve = "https://c.tenor.com/4qRm8hkyyr8AAAAd/paraguas-roto.gif";
var imgSoleado = "https://z101digital.com/wp-content/uploads/2018/12/ezgif-com-video-to-gif-22.gif";
var imgSolLluvia = "https://i.ytimg.com/vi/b6qpSMHtU-o/maxresdefault.jpg";
var imgLlovizna = "https://c.tenor.com/7UwLhBs0Y-0AAAAM/lluvia-lizard.gif";


if(estaLloviendo){
    document.write(`
        <img src=${imgLlueve} alt="">
    `);
}else if(estaLloviznando){
    document.write(`
        <img width="500" src=${imgLlovizna} alt="">
    `);
}else{
    document.write(`
        <img width="500" src=${imgSolLluvia} alt="">
    `);
}