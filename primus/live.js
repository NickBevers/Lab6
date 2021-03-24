const Primus = require("primus");

function go(server){
    primus = new Primus(server, {});
}

module.exports.go = go;