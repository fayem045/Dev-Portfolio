(function(){
  emailjs.init("wN3-1Z9GHvFSoD0kZ");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_k4x2f1t", "template_he5kbpe", this)
    .then(function() {
  alert("Message sent successfully!");
  document.getElementById("contact-form").reset();
    }, function(error) {
      alert("Failed to send: " + error.text);
    });
});