import { Authorize } from "./authorize.js";
import { uiElement } from "./uielement.js";

// UI
const userinfodiv = document.getElementById("userinfo");
const logoutbtn = document.getElementById("logoutbtn");

// Authorize instance
const authorize = Authorize();

// Ui Element instance
const uiele = uiElement(userinfodiv);

// Get info & render
authorize.getUser((data) => {
  // console.log(data);

  uiele.userInfoEle(data);
});

// Logout
logoutbtn.addEventListener("click", () => {
  const { logoutUser } = Authorize();
  logoutUser();
});
