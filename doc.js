document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.querySelector("#cookieBanner");
    const acceptButton = document.querySelector("#acceptButton");
    const refuseButton = document.querySelector("#refuseButton");

    // Controleer of cookies al geaccepteerd zijn
    if (localStorage.getItem("cookiesAccepted") === "true") {
        console.log("Cookies zijn al geaccepteerd.");
        cookieBanner.style.display = "none"; // Verberg de banner
    }

    // Gebruiker accepteert cookies
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true"); // Sla acceptatie op
        console.log("Cookies zijn geaccepteerd.");
        cookieBanner.style.display = "none"; // Verberg de banner
    });

    // Gebruiker weigert cookies
    refuseButton.addEventListener("click", function () {
        console.log("Cookies zijn geweigerd.");
        cookieBanner.style.display = "none"; // Verberg de banner
    });
});

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    // Verander de knoptekst afhankelijk van de modus
    let button = document.querySelector("button[onclick='myFunction()']");
    if (element.classList.contains("dark-mode")) {
        button.textContent = "Light";
        console.log("Dark mode ingeschakeld");
    } else {
        button.textContent = "Dark";
        console.log("Light mode ingeschakeld");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    function setGreeting() {
        const greetingElement = document.getElementById("greeting");
        const currentHour = new Date().getHours();
        let greeting;

        if (currentHour >= 6 && currentHour < 12) {
            greeting = "Goedemorgen!";
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = "Goedemiddag!";
        } else if (currentHour >= 18 && currentHour < 24) {
            greeting = "Goedenavond!";
        } else {
            greeting = "Goedenacht!";
        }

        greetingElement.textContent = greeting;
    }

    setGreeting();
});


    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function hopla() {
    document.getElementById("myDropdown").classList.toggle("show");
}

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
}
}
}
}

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);