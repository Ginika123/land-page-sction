const furnitureMenu = document.getElementById("furnitureMenu");
const dropdownList = document.getElementById("dropdownList");


furnitureMenu.addEventListener("click", function() {
    dropdownList.classList.toggle("show");

});



const more1 = document.getElementById("more1");
const more2 = document.getElementById("more2");
const more3 = document.getElementById("more3");

more1.addEventListener("click", function() {

    alert("luxury facilities information" );

});

more2.addEventListener("click", function() {
    alert("Affordable price information");

});

more3.addEventListener("click", function() {
    alert("Many Choices information");

});

