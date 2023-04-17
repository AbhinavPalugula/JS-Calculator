var button = document.querySelectorAll("input");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (
      button[i].hasAttribute("id") &&
      button[i].getAttribute("id") == "equalto-sign"
    ) {
      var displayContent = document.querySelector("#user-display").innerHTML;
      document.querySelector("#user-display").innerHTML = eval(displayContent);
    } else {
      var buttonValue = button[i].value;
      var displayContent = document.querySelector("#user-display").innerHTML;
      displayContent += buttonValue;
      document.querySelector("#user-display").innerHTML = displayContent;
    }
  });
}
