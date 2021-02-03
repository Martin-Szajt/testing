var reference = (function thename(){

var button = document.getElementById("cdn-button");
button.appendChild('<h1>Clickeame</h1>');
var token = button.getAttribute('data-token');
button.addEventListener("click", function() {
  alert("aca estoy");
  window.location.href="https://app.charthop.com/connect/?app="+token;
});
    
console.log("autorun");
}());


