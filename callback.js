function callbackTest() {
    let text = document.querySelector("#text");
    clearText();

    function first() {
        // Simulate a code delay
        setTimeout(function() {
            text.innerHTML += "<br>This one is the first<br>";
        }, 2500);
    }

    function second() {
        text.innerHTML += "This one is the second<br>";
    }

    // JS doesn't wait for each response of the first function because it takes too much time
    first();
    second();

    // Set the function in this case with two parameters
    // First one is the name of the subject to show
    // Second one is the name of the function to be executed inside the function
    function doHomework(subject, callback) {
        alert(`Starting my ${subject} homework.`);
        // This one calls another function inside of the current function
        callback();
    }

    function alertFinished() {
        alert("Finished my homework");
    }

    // The name of the subject and the callback function is set
    doHomework("math", alertFinished);
}

function clearText() {
    text.innerHTML = "";
}

document.querySelector("#callbackBtn").addEventListener("click", callbackTest);