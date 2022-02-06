//6LcSjF8eAAAAAPB8GYb6okGmJXdxoi9BGRAYzv0p
function onSubmit(token) {
    document.getElementById("demo-form").submit();
}
function submitForm() {
    emailjs.send("service_ul78njc","template_u7xraid",{
        subject: document.forms["form"]["form-subject"],
        from_name: document.forms["form"]["form-name"],
        from_email: document.forms["form"]["form-email"],
        message: document.forms["form"]["form-contents"],
    });
}