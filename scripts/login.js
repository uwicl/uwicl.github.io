const form_submit = (event) => {
    event.preventDefault();
    const form_username = document.getElementById("username");
    const form_password = document.getElementById("password");
    const form_response = document.getElementById("login_response");
    // clear input
    form_username.value       = "";
    form_password.value       = "";
    form_response.textContent = "Incorrect username or password."
}

window.addEventListener("load", () => {
    const form_button = document.getElementById("login_submit");
    if (form_button === null) return;
    form_button.addEventListener("click", form_submit);
});