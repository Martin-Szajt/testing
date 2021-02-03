var run = (function createConnectButton(){

    var button = document.getElementById("cdn-button");  
    var div = document.getElementById("cdn-button");
    var button = document.createElement('button');
    button.innerHTML = 'Connect With Charthop';
    button.style.width = "300px";
    button.style.height = "40px";
    button.style.border = "none";
    button.style.backgroundColor = "#ff0000";
    div.appendChild(button);
    var token = div.getAttribute('data-token');
    button.addEventListener("click", function() {
      window.location.href="https://app.charthop.com/connect/?app="+token;
    });
    
}());
