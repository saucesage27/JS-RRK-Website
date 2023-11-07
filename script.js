document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("HelloButton");
    const container = document.getElementById("container");

    button.addEventListener("click", function() {
        const body = document.body;
        body.style.animation = "none";
        button.style.display = "none";
        container.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {

    var num0 = document.getElementById('number0');
    num0.addEventListener("click", function() {
        displayNumber(0);
    });

    var num00 = document.getElementById('number00');
    num00.addEventListener("click", function() {
        displayNumber("00");
    });

    var num9 = document.getElementById('number9');
    num9.addEventListener("click", function() {
        displayNumber(9);
    });

    var num8 = document.getElementById('number8');
    num8.addEventListener("click", function() {
        displayNumber(8);
    });

    var num7 = document.getElementById('number7');
    num7.addEventListener("click", function() {
        displayNumber(7);
    });

    var num6 = document.getElementById('number6');
    num6.addEventListener("click", function() {
        displayNumber(6);
    });

    var num5 = document.getElementById('number5');
    num5.addEventListener("click", function() {
        displayNumber(5);
    });

    var num4 = document.getElementById('number4');
    num4.addEventListener("click", function() {
        displayNumber(4);
    });

    var num3 = document.getElementById('number3');
    num3.addEventListener("click", function() {
        displayNumber(3);
    });

    var num2 = document.getElementById('number2');
    num2.addEventListener("click", function() {
        displayNumber(2);
    });

    var num1 = document.getElementById('number1');
    num1.addEventListener("click", function() {
        displayNumber(1);
    });
});
