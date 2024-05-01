

const handleLogin = (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get username and password values from the form
  const username = getValue("login-username");
  const password = getValue("login-password");

  // Construct the info object with username and password
  const info = {
      username,
      password,
  };

  // Send the login information to the server
  fetch("https://smart-shoping-whb0.onrender.com/account/login/", {
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

          
          if(data.token && data.user_id){
              localStorage.setItem("token", data.token);
              localStorage.setItem("user_id", data.user_id);
              window.location.href = "https://raselsarker11.github.io/Happy-shoping/index.html";

              console.log(data.user_id);
          }
          
      })
      .catch((error) => {
          // Handle error
          console.error("Error during fetch:", error);
      });
};

// Assuming this function is defined elsewhere in your code
const getValue = (id) => {
  return document.getElementById(id).value;
};
