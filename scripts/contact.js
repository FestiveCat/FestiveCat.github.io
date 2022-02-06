window.onload = function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        var valid = validateForm();
        if (!valid) return;
        // these IDs from the previous steps
        emailjs.send("service_ul78njc","template_u7xraid",{
            subject: document.forms["form"]["form-subject"].value,
            from_name: document.forms["form"]["form-name"].value,
            from_email: document.forms["form"]["form-email"].value,
            message: document.forms["form"]["form-contents"].value,
        })
            .then(function() {
                alert("Email sent!");
                console.log('SUCCESS!');
            }, function(error) {
                alert("Something went wrong... please email me manually!");
                console.log('FAILED...', error);
            });
    });
}

function validateForm() {
    var subject = document.forms["form"]["form-subject"].value;
    if (subject == "") {
        alert("Subject cannot be empty!");
        return false;
    }
    var senderName = document.forms["form"]["form-name"].value;
    if (senderName == "") {
        alert("Please enter a name!");
        return false;
    }
    var content = document.forms["form"]["form-contents"].value;
    if (content == "") {
        alert("Please enter a name!");
        return false;
    }
    var email = document.forms["form"]["form-email"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
        alert("Please enter a valid email!");
        return false;
    }
    return true;
}
