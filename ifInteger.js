var horaDespierto = 800;
var horaInicioClase = 900;

var imgAlarma = "https://www.recreoviral.com/wp-content/uploads/2016/11/Reci%C3%A9n-levantada-4.gif";
var imgCaminarTranqui = "https://cloud.alqueria.es/wp-content/uploads/sites/8/2020/12/Pantera-Rosa-walking-original-300x300.gif";
var imgHoraJusta = "https://c.tenor.com/Ko8aH6DRw1QAAAAM/wake-up-bed.gif";


if( horaDespierto < horaInicioClase){
    document.write(`
        <img src=${imgCaminarTranqui} alt="">
    `);    
}else if( horaDespierto == horaInicioClase){    
    document.write(`
        <img width="400" src=${imgHoraJusta} alt="">
    `);
}else{    
    document.write(`
        <img src=${imgAlarma} alt="">
    `);
}