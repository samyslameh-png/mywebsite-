function removetext() {
    document.getElementById("heading").textContent = "";
}
function addMessage() {
    document.getElementById("heading").textContent = "Hello world! Welcome to my website.";
}

function alertSubmit() {
    alert("You have successfully submitted your application!");
}
function sayHello() {
    console.log("Hello! Welcome to my website.");
    alert("Hello world! Welcome to my website.");
    document.getElementsByClassName("message")[0].innerHTML = "Hello world! Welcome to my website.";
    setTimeout(function() {
            document.getElementsByClassName("message")[0].innerHTML = "";
    }, 3000);
}
function Changestyle() {
        document.getElementById("title").style.color = "red";
    setTimeout(function() {
        document.getElementById("title").style.color = "orange";
    }, 1000);
    setTimeout(function() {
        document.getElementById("title").style.color = "yellow";
    }, 2000);   
}
function YOURCOOKED() {
    document.body.style.backgroundColor = "red";
    document.head.style.backgroundColor = "red";
    document.getElementById("title").style.color = "white";
    document.getElementById("text").style.color = "white";
    document.getElementById("heading").style.color = "white";
    document.getElementsByClassName("message")[0].style.color = "white";
    document.getElementsByClassName("message")[0].style.backgroundColor = "red";
    document.getElementsByClassName("message")[0].style.borderColor = "white";
    document.getElementById("title").textContent = "SUB TO MY CHANNEL";
    document.getElementById("text").textContent = "SUB TO MY CHANNEL";
    document.getElementById("heading").textContent = "SUB TO MY CHANNEL";

    document.querySelector("p").style.color = "white";
    document.querySelector("section").style.backgroundColor = "red";
    document.querySelector("h2").textContent= "SUB TO MY CHANNEL";
    document.getElementById("contact").style.background = "red";
    document.getElementById("login").style.background = "red";
    document.getElementById("message").textContent = "SUB TO MY CHANNEL"
    document.getElementById("bababoy").textContent = "SUB TO MY CHANNEL"
    document.getElementById("idk").textContent = "SUB TO MY CHANNEL"
    document.getElementById("nav").style.background="red"
    document.getElementById("header").style.background="red"
    document.getElementById("section").textContent = "SUB TO MY CHANNEL"
    document.getElementById("section1").textContent = "SUB TO MY CHANNEL"
    document.getElementById("login2").textContent= "SUB TO MY CHANNEL"
    document.getElementById("login3").textContent = "SUB TO MY CHANNEL"
}



