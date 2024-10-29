document.getElementById("infoButton").addEventListener("click", function() {
    document.getElementById("infoBox").classList.remove("hidden");
  });
  
  document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("infoBox").classList.add("hidden");
  });