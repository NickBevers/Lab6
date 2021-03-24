const Primus = require("primus");

function go(server){
    primus = new Primus(server, {});
    // primus.save(__dirname +'/primus.js');
}

module.exports.go = go;