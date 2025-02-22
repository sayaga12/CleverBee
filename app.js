console.log("CleverBee қосымшасына қош келдіңіз!");

// Түймені басқанда хабарлама шығаратын функция
function showMessage() {
    alert("Бұл CleverBee қосымшасының негізгі файлы!");
}

// HTML-дегі батырманы табу және оқиға қосу
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", showMessage);
    }
});
