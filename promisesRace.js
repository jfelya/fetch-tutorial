promisesRaceBtn = document.querySelector("#promisesRaceBtn");
text = document.querySelector("#text");

function promisesRaceTest() {
    clearText();
    text.innerHTML = "Loading Promises Race...<br>";    

    let promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Segunda\n");
        }, 500)
    });

    let promesa3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tercera\n");
        }, 300)
        // reject("ERROR TRIFÁSICO");
    });

    let promesa4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Cuarta\n");
        }, 2500)
    });

    // Retorna la primera promesa en ser resuelta o rechazada

    Promise.race([promesa2, promesa3, promesa4])
        .then((values) => {
            clearText();
            alert("Primera en regresar: " + values);
        })
        .catch((error) => {
            clearText();
            alert("Ha ocurrido un error fatal en la " + error);
        })
    }

promisesRaceBtn.addEventListener("click", promisesRaceTest);