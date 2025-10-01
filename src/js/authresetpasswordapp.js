import { Authorize } from "./authorize.js";
import { auth } from "./firebase.js";

// UI
const resetpasswordform = document.getElementById("resetpasswordform");
const msg = document.getElementById("msg");

// Reset
resetpasswordform.addEventListener("submit", (e) => {
  e.preventDefault();

  const resetemail = document.getElementById("resetemail").value.trim();

  //   const authorize = Authorize();
  //   authorize.registerUser(siginemail,siginpassword);

  const { resetPassword } = Authorize();
  resetPassword(resetemail, msg);
});
