const inputEl = document.querySelector(".input__field");
const submitBtn = document.querySelector(".submit__button");
const errorMsg = document.querySelector(".error__message");

const ValidateEmail = function () {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputEl.value.match(mailformat)) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "Thank you for subscribing!";
    errorMsg.style.color = "Green";
    inputEl.style.border = `1px solid green`;
    inputEl.value = "";
  } else {
    errorMsg.innerHTML = "Please provide a valid email address";
    errorMsg.style.display = "block";
    errorMsg.style.color = "red";
    inputEl.style.border = `1px solid red`;
  }
};

submitBtn.addEventListener("click", ValidateEmail);
inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") ValidateEmail();
});

inputEl.addEventListener("click", function () {
  if ((errorMsg.style.display = "block")) {
    errorMsg.style.display = "none";
    inputEl.style.border = `1px solid hsl(223, 100%, 88%)`;
  }
});
