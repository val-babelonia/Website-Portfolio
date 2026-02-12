$("#submit").click(function() {
    if ($("#email").val()===""&&        //email and password required browser promt
    $("#password").val()==="") {
        alert('Email and Password required');
    } else {
        alert ('Email and Password is accepted');
    }
});

 function toggle() {
        const input = document.getElementById("password");   //show and hide password
        if (input.type === "password") {
             input.type = "text";
        } else {
             input.type = "password";
        }
    }