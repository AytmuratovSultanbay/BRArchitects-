var telegram_bot_id = "7523496541:AAHjWWsk4D3E9UHG7aHNeCUFow9P4_POrx4"; 
var chat_id = 2567421785; 
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"             
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message,
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};
function toggleSearch() {
    var box = document.getElementById("searchBoxWrapper");
    if (box.style.display === "none" || box.style.display === "") {
      box.style.display = "block";
      document.getElementById("searchInput").focus();
    } else {
      box.style.display = "none";
    }
  }
  
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      let query = event.target.value.trim();
      if (query !== "") {
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
      }
    }
  }