const Primus = require("primus");

function go(server){
    primus = new Primus(server, {});

    primus.on('connection', (spark) => {
        console.log("New spark");

        
        spark.on("data", (data) => {
            primus.write(data);
        })
      });
      
}

module.exports.go = go;