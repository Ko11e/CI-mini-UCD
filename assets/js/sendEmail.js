function sendMail(contactFrom) {
    emailjs.send("service_qio26wo","rosie", {
        to_name: "Emmelie",
        from_name: contactFrom.fullname.value,
        from_email: contactFrom.emailaddress.value,
        project_request: contactFrom.projectsummary.value,
        })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}