import "@fortawesome/fontawesome-free/css/all.min.css";
import { Authorize } from "./authorize.js";

// UI
const signinform = document.getElementById("signinform");
const googleloginbtn = document.getElementById("googleloginbtn");

// Login
signinform.addEventListener("submit", (e) => {
  e.preventDefault();

  const siginemail = document.getElementById("signinemail").value.trim();
  const siginpassword = document.getElementById("signinpassword").value.trim();

  //   const authorize = Authorize();
  //   authorize.registerUser(siginemail,siginpassword);

  const { loginUser } = Authorize();
  loginUser(siginemail, siginpassword);
});

// Google Login
googleloginbtn.addEventListener("click", () => {
  const { googleLogin } = Authorize();
  googleLogin();
});
