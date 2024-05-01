

const handleLogin = (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get username and password values from the form
  const email = getValue("login-email");
  const password = getValue("login-password");

  // Construct the info object with username and password
  const info = {
      email,
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

          
          if(data.access && data.refresh){
              localStorage.setItem("token", data.access);
              localStorage.setItem("refresh", data.refresh);
              window.location.href = "https://raselsarker11.github.io/Happy-shoping/index.html";

              console.log(data.access);
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
