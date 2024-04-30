// // register form start

const handleRegistration = async (event) => {
  event.preventDefault();

  document.getElementById("error").innerText = "";

  const username = getValue("Username");
  const first_name = getValue("First_name");
  const last_name = getValue("Last_name");
  const email = getValue("Email_address");
  const password = getValue("Password");
  const confirm_password = getValue("Confirm_password");

  const info = {
    name: username,
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  };

  if (password !== confirm_password) {
    document.getElementById("error").innerText = "Passwords do not match.";
    // alert("Passwords do not match.");
    return;
  }

  if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    )
  ) {
    document.getElementById("error").innerText =
      "Password must be at least eight characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    return; // Exit the function early
  }

  try {
      const response = await fetch(
        "https://smart-shoping-whb0.onrender.com/account/register/",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(info),
        }
      );
    
      const data = await response.json();
      if (data?.id) {
        document.getElementById("error").innerText =
          "Successfully registered";
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      // Display a more user-friendly error message
      document.getElementById("error").innerText =
        "An error occurred. Please try again later.";
   }
 
};

const getValue = (id) => {
  return document.getElementById(id).value;
};



// // register form end

// const handleRegistration = async (event) => {
//   event.preventDefault();
//   console.log('sjdjfjsdjfldsjlfslkjlsj');

//   const username = getValue("Username");
//   const first_name = getValue("First_name");
//   const last_name = getValue("Last_name");
//   const email = getValue("Email_address");
//   const password = getValue("Password");
//   const confirm_password = getValue("Confirm_password");

//   const info = {
//     username,
//     first_name,
//     last_name,
//     email,
//     password,
//     confirm_password
//   };

//   if (password === confirm_password) {
//     document.getElementById("error").innerText = "";

//     if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
//       try {
//         const response = await fetch("https://smart-shoping-whb0.onrender.com/account/register/", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(info),
//         });

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         if (data.token) {
//           // Save the JWT token to local storage or a cookie
//           localStorage.setItem("token", data.token);
//           // Redirect to another page or perform other actions
//           window.location.href = "/dashboard";
//         } else {
//           throw new Error("Token not found in response");
//         }
//       } catch (error) {
//         console.error("Error during fetch:", error);
//         document.getElementById("error").innerText = "An error occurred. Please try again later.";
//       }
//     } else {
//       document.getElementById("error").innerText = "Password must be at least eight characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
//     }
//   } else {
//     document.getElementById("error").innerText = "Passwords do not match.";
//     alert("Passwords do not match.");
//   }
// };

// const getValue = (id) => {
//   return document.getElementById(id).value;
// };
