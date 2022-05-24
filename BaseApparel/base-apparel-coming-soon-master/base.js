//email validation function

function emailValidation()
{
    let userEmail = document.querySelector("#email").value;
    let displayMessage = document.querySelector("#formMessage");
    let form = document.querySelector("#form");

    let errorMessage = document.querySelector("#error");

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail))
    {
        displayMessage.style.color = "green";
        displayMessage.innerHTML = "Email saved successfully";
        form.style.border = "1px solid green";
        errorMessage.style.visibility = "hidden";
    }else
    {
        displayMessage.style.color = "red";
        displayMessage.innerHTML = "Enter valid email";
        form.style.border = "1px solid red";
        errorMessage.style.visibility = "visible";
    }


}