function inValidLength(id, maxLength) {
    var input = document.getElementById(id);
    return input.value.length < maxLength;
}

function login() {
    /* user name and password validation */
    var date = new Date();

    var UserInput = document.getElementById("login-username").value;
    var logonPassword = document.getElementById("login-password").value;
    if (UserInput == "" && logonPassword == "") {
        alert("Please fill the mandatory fields")
    } else {
        alert("Succefully Logged In! at " + date + "");
    }
}

function register() {
    valid = true;
    /* retrieve System Date */
    var date = new Date();
    if (inValidLength("phone", 10)) {
        alert(" - Mobile can only be up to 10 characters long! - ");
        valid = false;
    }
    else if (valid) {
        alert("Succefully Registerd In! at  "
            + date + "  ");
    }


}
function back() {
    /* Nvaigate back to previously loaded page */
    window.history.go("-1");
}
function setFocusToTextBox() {
    document.getElementById("login-username").focus();
}

function orderNow() {
    // Food and drinks order now function
    var text;
    var refNumber = prompt("Please enter your ticket number:", "");

    if (refNumber == null || refNumber == "") {
        text = "User cancelled the prompt.";
    } else {
        alert("Your order with ticket Number " + refNumber + " will be served at your seat");
    }

}



// the send mail function to send mail
function send_mail() {
    // start by verifying that the form is filled
    var name_of_sender = document.getElementById('name_of_sender');
    var message_of_sender = document.getElementById('message_of_sender');
    var email_sender = document.getElementById('email_of_sender');

    if (name_of_sender.value == '') {
        error_web_message("please fill in your name");
    } else if (email_of_sender.value == '') {
        error_web_message("please fill in your email");
    } else if (message_of_sender.value == '') {
        error_web_message("please fill in your message to us");
    } else {
        window.open('mailto:movieplex@gmail.com?subject=feedback from:  ' + name_of_sender.value + '&body=' + message_of_sender.value + '', '_blank');
    }

}
