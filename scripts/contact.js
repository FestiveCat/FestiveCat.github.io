function onSubmit(token) {
    document.getElementById("demo-form").submit();
}

window.onload = function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.send("service_ul78njc","template_u7xraid",{
            subject: document.forms["form"]["form-subject"].value,
            from_name: document.forms["form"]["form-name"].value,
            from_email: document.forms["form"]["form-email"].value,
            message: document.forms["form"]["form-contents"].value,
        })
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}