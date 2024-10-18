let btnOK = document.querySelector('.kupit-form');

let outputDiv = document.querySelector('.hvala');


btnOK.addEventListener('click', function (e){
    outputDiv.innerHTML = '<label for="thanku">Niste unjeli sve podatke</label>';
});

function obojiFrom(){
    let klase = document.querySelectorAll(".prvi-odl-iznad-form");
    for(let kls of klase){
        kls.style.backgroundColor = "red";

    }

    alert("Kirvo si unio podatke majstore")
}
