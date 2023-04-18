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
document.addEventListener("keypress", (evt) => {
  if (evt.key == "1") {
    document.querySelector("#user-display").innerHTML += "1";
  } else if (evt.key == "2") {
    document.querySelector("#user-display").innerHTML += "2";
  } else if (evt.key == "3") {
    document.querySelector("#user-display").innerHTML += "3";
  } else if (evt.key == "4") {
    document.querySelector("#user-display").innerHTML += "4";
  } else if (evt.key == "5") {
    document.querySelector("#user-display").innerHTML += "5";
  } else if (evt.key == "6") {
    document.querySelector("#user-display").innerHTML += "6";
  } else if (evt.key == "7") {
    document.querySelector("#user-display").innerHTML += "7";
  } else if (evt.key == "8") {
    document.querySelector("#user-display").innerHTML += "8";
  } else if (evt.key == "9") {
    document.querySelector("#user-display").innerHTML += "9";
  }
});
