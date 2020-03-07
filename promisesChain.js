promisesChainBtn = document.querySelector("#promisesChainBtn");
text = document.querySelector("#text");

function promisesChainTest() {
    clearText();
    text.innerHTML = "Loading Promises Chain...<br>";
    
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
    // Encadenación de Promesas, se ejecuta una por una

    promesa3
        .then(
            response => {
                alert("Exito: " + response);
                return promesa2;
            }
        )
        .then(
            ValorSegundaPromesa => {
                alert(ValorSegundaPromesa);
                return promesa4;
            }
        )
        .then(
            ValorCuartaPromesa => {
                alert(ValorCuartaPromesa);
            }
        )
        //Este catch agarra todos los errores
        .catch(
            error => {
                alert("Error en la: " + error);
                throw error;
            }
        )
}

promisesChainBtn.addEventListener("click", promisesChainTest);