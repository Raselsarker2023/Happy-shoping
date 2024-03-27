// register form start

const handleRegistration = (event) => {
    event.preventDefault();
    const username = getValue("username");
    const First_name = getValue("First_name");
    const Last_name = getValue("Last_name");
    const Email = getValue("Email");
    const Password = getValue("Password");
    const Confirm_password = getValue("Confirm_password");
    console.log({ username, First_name, Last_name, Email, Password, Confirm_password});
}

const getValue = (id) => {
    const value = document.getElementById(id).value;
    return value;
}





// register form end
