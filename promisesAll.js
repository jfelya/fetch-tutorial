promisesAllBtn = document.querySelector("#promisesAllBtn");
text = document.querySelector("#text");

function promisesAllTest() {
    clearText();
    text.innerHTML = "Loading Promises All...<br>";

    let promesa1 = new Promise((resolve, reject) => {
        resolve("Primera\n");
    });
    
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
    
    // Retorna un array con los valores de cada promesa, si todas son resueltas
    // Si falla uno se lanza el mensaje de la promesa que falló

    Promise.all([promesa1, promesa2, promesa3, promesa4])
        .then((values) => {
            clearText();
            alert("Valores de promesa: " + values);
        })
        .catch((error) => {
            clearText();
            alert("Ha ocurrido un error");
        })
}

promisesAllBtn.addEventListener("click", promisesAllTest);