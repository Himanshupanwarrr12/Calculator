

const input = document.querySelector(".inpt");

const buttons = document.querySelectorAll(".btn");

let inputValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim(); 

    if (value === "AC") {
      inputValue = "";
    } else if (button.innerHTML.includes("fa-solid fa-delete-left")) {
      inputValue = inputValue.slice(0, -1);
    } else if (button.innerHTML.includes("fa-solid fa-divide")) {
      
      inputValue += "/"
    } else if (button.innerHTML.includes("fa-solid fa-xmark")) {
      inputValue += "*";
    } else if (button.innerHTML.includes("fa-solid fa-minus")) {
      inputValue += "-";
    } else if (button.innerHTML.includes("fa-solid fa-plus")) {
      inputValue += "+";
    } else if (button.innerHTML.includes("fa-solid fa-equals")) {
      try {
        inputValue = String(eval(inputValue));
      } catch (error) {
        inputValue = "error";
      }
    } else if (value === "%") {
      inputValue = String(parseFloat(inputValue / 100));
    } else {
      inputValue += value;
    }
    input.value = inputValue;
  });
});
