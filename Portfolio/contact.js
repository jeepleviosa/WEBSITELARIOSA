// UNSAON NI PUTEK
(function () {
    emailjs.init("SWOqfzISWOqfzIFy0cZAtMWo"); // replace with your EmailJS public key
})();

const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // needed values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // at least na work ni lol
    statusMessage.innerHTML = "Sending...";
    statusMessage.style.color = "blue";

    // sayop siguro ang gi copy nako idk
    emailjs.send("service_zxjytju", "template_n567lbp", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function (response) {
        statusMessage.innerHTML = "Message sent successfully!";
        statusMessage.style.color = "green";

        form.reset();
    })
    .catch(function (error) {
        statusMessage.innerHTML = "Failed to send message. Try again.";
        statusMessage.style.color = "red";

        console.error("EmailJS Error:", error);
    });
});