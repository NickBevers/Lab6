document.querySelector(".teams").addEventListener("click", (e) =>{
    let favoTeam = e.target.parentElement.getAttribute("class");
    console.log(favoTeam);
})