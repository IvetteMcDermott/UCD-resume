
function sendMail(contactForm) {
    emailjs.send("service_x9335uh","template_rx3kjtk",{
        "from_name": contactForm.name.value,
        "project_request": contactForm.projectsummary.value,
        "reply_to": contactForm.emailaddress.value,
        })
    //emailjs.send("service_x9335uh","template_rx3kjtk")
    //,{
    //    "from_name": contactForm.name.value,
    //    "message": contactForm.projectsummary.value,
    //    "reply_to": contactForm.emailaddress.value,
        //}
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}