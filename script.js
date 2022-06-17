const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const userImage = document.getElementById("user-img");
const machineImage = document.getElementById("machine-img");;

const empate = 0;
const ganaste = 1;
const perdiste = 2;

const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";

piedraBtn.addEventListener("click", ()=> {
    play(piedra);
});
papelBtn.addEventListener("click", ()=> {
    play(papel);
})
tijeraBtn.addEventListener("click", ()=> {
    play(tijera);
})

function play(optionUser){
    const machineOption = caclMachineOption();
    const result = calcularResultado(optionUser, machineOption);

    userImage.src = "imagenes/"+optionUser+".png";
    machineImage.src = "imagenes/"+machineOption+".png"

    switch(result){
        case empate:
            resultText.innerHTML = "Empataste"
            break;
        case ganaste:
            resultText.innerHTML = "Ganaste"
            break;
        case perdiste:
            resultText.innerHTML = "Perdiste"
            break;
    }
}

function calcularResultado(optionUser, machineOption){
    if(optionUser === machineOption){
        return empate;
    }else if(optionUser === piedra){
        if(machineOption === papel) return perdiste;
        if(machineOption === tijera) return ganaste;
    }else if(optionUser === papel){
        if(machineOption === tijera) return perdiste;
        if(machineOption === piedra) return ganaste;
    }else if(optionUser === tijera){
        if(machineOption === piedra) return perdiste;
        if(machineOption === papel) return ganaste;
    }
}

function caclMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return piedra;
        case 1: 
            return papel;
        case 2:
            return tijera;
    }
}
