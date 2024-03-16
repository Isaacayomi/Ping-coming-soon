const inputEl = document.querySelector(".input__field");
const submitBtn = document.querySelector(".submit__button");
const errorMsg = document.querySelector(".error__message");

const submitMail = function () {
  if (inputEl.value.includes(".") && inputEl.value.includes("@")) {
    console.log("Success");
    
    errorMsg.style.display = "block";
    errorMsg.textContent = 'Thank you for subscribing!'
    errorMsg.style.color = 'Green'
    inputEl.style.border = `1px solid green`;
    inputEl.value = "";
  } else if (inputEl.value === "") {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else {
    errorMsg.innerHTML = "Please provide a valid email address";
    errorMsg.style.display = "block";
    inputEl.style.border = `1px solid red`;
  }
};

submitBtn.addEventListener("click", submitMail);
inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") submitMail();
});

inputEl.addEventListener("click", function () {
  if ((errorMsg.style.display = "block")) {
    errorMsg.style.display = "none";
    inputEl.style.border = `1px solid hsl(223, 100%, 88%)`;
  }
});
