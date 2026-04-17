
        (function(){
            emailjs.init({
              publicKey: "wN3-1Z9GHvFSoD0kZ",
            });
        })();
function sendEmail(event) {
  event.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: rawNumber,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  const modalEl = document.getElementById("contactModal");
  const modal = new bootstrap.Modal(modalEl);

  emailjs.send("service_k4x2f1t", "template_ucext1b", params)
    .then(function(response) {
      console.log("SUCCESS", response);

      document.getElementById("modalTitle").innerText = "Message Sent";
      document.getElementById("modalText").innerText =
        "Thank you for contacting me! I will get back to you soon.";

      modal.show();
      document.getElementById("contact-form").reset();
    })
    .catch(function(error) {
      console.error("FAILED", error);
      alert("An error occurred while sending your message. Please try again later.");
    });
}

//Enter key to move to the next input field
const inputs = document.querySelectorAll("#contact-form input, #contact-form textarea");

inputs.forEach((input, index) => {
  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();

      // check if current input is valid
      if (!input.checkValidity()) {
        input.reportValidity(); // show browser validation
        return;
      }

      // move to next input
      const next = inputs[index + 1];
      if (next) {
        next.focus();
      }
    }
  });
});

document.getElementById("number").addEventListener("input", function () {

  // 1. keep digits only
  let value = this.value.replace(/\D/g, "");

  // 2. limit to 11 digits
  value = value.substring(0, 11);

  let formatted = "";

  // 3. format step-by-step safely
  if (value.length <= 7) {
    formatted = value;
  }
  else if (value.length <= 10) {
    formatted = value.replace(/(\d{4})(\d+)/, "$1 $2");
  }
  else {
    formatted = value.replace(/(\d{4})(\d{3})(\d{1,4})/, "$1 $2 $3");
  }

  this.value = formatted;
});