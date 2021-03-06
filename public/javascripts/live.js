let primus = Primus.connect("/", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});


primus.on("data", (data) => {
    console.log(data);
    let team = data.team;
    let favos = Number(document.querySelector(`.${team} .votes span`).innerHTML)
    console.log(typeof favos);
    console.log(favos + 1);
    document.querySelector(`.${team} .votes span`).innerHTML = favos += 1
})