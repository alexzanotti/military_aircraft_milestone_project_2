/*jshint esversion: 6 */
//function to ensure all fields are complete before sending email
(function() {
    $('form').keyup(function() {
        var empty = false;
        $('.complete').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });
        //if statement to remove disabled attribute when form completed
        if (empty) {
            $('#register').attr('disabled', 'disabled');
        } else {
            $('#register').removeAttr('disabled');
        }
    });
})();

//function for email submission using emailjs
function sendEmail() {
    // object to collect the users name, email and message
    var content = {
        name: document.getElementById("userName").value,
        email: document.getElementById("userEmail").value,
        message: document.getElementById("userMessage").value,
    };
    // variable for both the emailjs serviceID and templateID
    const serviceID = "service_ujlw0id";
    const templateID = "template_vmke7ek";
    // send the email
    emailjs.send(serviceID, templateID, content)
}