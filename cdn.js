var reference = (function thename(){

var button = document.getElementById("cdn-button");
  
  
var div = document.getElementById("cdn-button");
var button = document.createElement('button');
button.innerHTML = 'clickeame';
button.style.backgroundColor = "#ff0000";
div.appendChild(button);
  
var token = div.getAttribute('data-token');
button.addEventListener("click", function() {
  alert("aca estoy");
  window.location.href="https://app.charthop.com/connect/?app="+token;
});
    
console.log("autorun");
}());


