promisesBtn = document.querySelector("#promisesBtn");
text = document.querySelector("#text");

function promisesTest() {

    let promesa = new Promise((resolve, reject) => {
        clearText();
        text.innerHTML = "Loading Promises...<br>";
        setTimeout(() => {
            resolve("Promesa resuelta con éxito");
        }, 1500);

        setTimeout(() => {
            reject("La promesa ha fallado");
        }, 3000);

    });

    promesa
        // "then" se activa en caso de que la promesa esté resuelta y recibe una función como parámetro, y esta función a su vez recibe "response" como parámetro
        .then((response) => {
            clearText();
            alert("Response: " + response);
        })
        // "catch" se activa en caso de la promesa sea rechazada y recibe una función como parámetro, y esta función a su vez recibe "error" como parámetro
        .catch((error) => {
            clearText();
            alert("Error: "  + error);
        });
}

promisesBtn.addEventListener("click", promisesTest);