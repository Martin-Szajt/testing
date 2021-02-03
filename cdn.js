var reference = (function thename(){

var element = document.querySelector('#cdn-button');
element.addEventListener("Click", function() {
    console.log("click");
});
    
document.addEventListener("DOMContentLoaded", function() {
    console.log("click");
});
console.log("autorun");
}());


