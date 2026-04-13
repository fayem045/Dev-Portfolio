
        (function(){
            emailjs.init({
              publicKey: "wN3-1Z9GHvFSoD0kZ",
            });
        })();

function sendEmail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };
emailjs.send("service_k4x2f1t", "template_ucext1b", params)
  .then(function(response) {
    console.log("SUCCESS", response);
    alert("Message sent!");
  })
  .catch(function(error) {
    console.error("FAILED", error);
    alert("Failed to send");
  });
}