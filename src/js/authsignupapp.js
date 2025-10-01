import { Authorize } from "./authorize.js";
import { auth } from "./firebase.js";

// UI
const signupform = document.getElementById("signupform");

// Register
// console.log('hello');
signupform.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log(fullname, email, password);

  const authorize = Authorize();
  authorize.registerUser(fullname, email, password);
});
