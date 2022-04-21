function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    var flag = 0;

    if(name=='') {
        document.getElementById("name").style.border = "1px solid red";
        document.getElementById("nameError").style.display = "inline-block";
        flag = 1;
    } else {
        document.getElementById("name").style.border = "";
        document.getElementById("nameError").style.display = "none";
    }

    if(email=="") {
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("emailError").style.display = "inline-block";
        flag = 1;
    } else {
        document.getElementById("email").style.border = "";
        document.getElementById("emailError").style.display = "none";
    }

    if(message=="") {
        document.getElementById("message").style.border = "1px solid red";
        document.getElementById("msgError").style.display = "inline-block";
    } else {
        document.getElementById("message").style.border = "";
        document.getElementById("msgError").style.display = "none";
    }

    if(subject=="") {
        document.getElementById("subject").style.border = "1px solid red";
        document.getElementById("subError").style.display = "inline-block";
    } else {
        document.getElementById("subject").style.border = "";
        document.getElementById("subError").style.display = "none";
    }

    if(flag == 0) {
        var emailBody = "Hello Eswar, \n My name is " + name + "\n and My email is " + email + "\nI would like to convey you that '" + message +"'";
        var emailBody = emailBody.replace(/\n/g, "%0D%0A");
        var mailto_link = "mailto:eswar.benarjee2002@gmail.com?subject=" + subject +"&body=" + emailBody;
        document.getElementById("mail").action = mailto_link;
    } else {
        return false;
    }
}