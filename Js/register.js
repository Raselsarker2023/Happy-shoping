// register form start

const handleRegistration = (event) => {
  event.preventDefault();
  const username = getValue("Username");
  const first_name = getValue("First_name");
  const last_name = getValue("Last_name");
  const email = getValue("Email_address");
  const password = getValue("Password");
  const confirm_password = getValue("Confirm_password");
  const info = {
    username,
    first_name,
    last_name,
    email,
    password,
    confirm_password
  };
//   console.log("user registration info",{username,first_name,last_name,email,password});

  if(password == confirm_password){
    document.getElementById("error").innerText = ""
    
    if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
        console.log(info);

        fetch("https://e-shoping-tkrl.onrender.com/account/register/", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(info),
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                // Handle successful response
                console.log(data);
            })
            .catch((error) => {
                // Handle error
                console.error("Error during fetch:", error);
            });
    }
    else{
        document.getElementById("error").innerText = "password must be at least Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
    }
  }

  else{
    document.getElementById("error").innerText="Invalid password! Password and Confirm Password doesn't match"
    alert("Password and Confirm Password doesn't match");
  }

};

const getValue = (id) => {
  const value = document.getElementById(id).value;
  return value;
};

// register form end
