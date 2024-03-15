const inputEl = document.querySelector(".input__field");
const submitBtn = document.querySelector(".submit__button");
const errorMsg = document.querySelector(".error__message");

submitBtn.addEventListener("click", function () {
  if (inputEl.value.includes(".") && inputEl.value.includes("@")) {
    console.log("Success");
    errorMsg.style.display = "none";
    inputEl.style.border = `1px solid hsl(223, 100%, 88%)`;
    inputEl.value = ''

  } else {
    errorMsg.style.display = "block";
    inputEl.style.border = `1px solid red`;
  }
});

inputEl.addEventListener('click', function() {
    if (errorMsg.style.display = 'block') {
        errorMsg.style.display = 'none'
        inputEl.style.border = `1px solid hsl(223, 100%, 88%)`
    }
})
