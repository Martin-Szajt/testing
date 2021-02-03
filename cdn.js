var reference = (function thename(){

var element = document.getElementByClassName(".button.primary")
element.addEventListener("Click", function() {
    console.log("click");
});
    
document.addEventListener("DOMContentLoaded", function() {
    console.log("click");
});
console.log("autorun");
}());


