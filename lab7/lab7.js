import User from "./User.js";

const inputField = document.querySelectorAll("input");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const user = document.querySelector("#user");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");
const newAccountSpan = document.querySelector("span");

document.body.style.background = "#268410c4";

newAccountSpan.style.color = "lightGreen";
newAccountSpan.style.cursor = "pointer";

container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "100vh";

form.style.display = "flex";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.flexDirection = "column";
form.style.gap = "10px";
form.style.background = "#fff";
form.style.height = "300px";
form.style.width = "300px";
form.style.padding = "20px";
form.style.borderRadius = "20px";

inputField.forEach((inp) => {
  inp.style.height = "2.3rem";
  inp.style.width = "100%";
  inp.style.border = "none";
  inp.style.background = "rgb(230 225 225)";
  inp.style.padding = "0.5rem";
});

submitBtn.style.background = "green";
submitBtn.style.color = "#fff";
submitBtn.style.cursor = "pointer";

user.addEventListener("focus", (e) => {
  e.target.style.border = "none";
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let createdUser = new User(user.value, password.value);
  if (createdUser.validUser()) {
    alert("welcome");
  } else {
    alert("not registered");
  }
});
