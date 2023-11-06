document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("HelloButton");
    const container = document.getElementById("container");
    const userForm = document.getElementById("userForm"); 
    let userData = {}; 

    button.addEventListener("click", function() {
        const body = document.body;
        body.style.animation = "none";
        button.style.display = "none";
        container.style.display = "block";
    });

    userForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("lastname").value;
        const age = document.getElementById("age").value;

        userData = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        console.log(userData);

        userForm.reset();
    });
});
