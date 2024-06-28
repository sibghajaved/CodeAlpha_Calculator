// Selecting elements
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");


buttons.forEach(button => {
  button.addEventListener("click", () => {
    calculate(button.dataset.value);
  });
});

const calculate = (btnValue) => {
  if (btnValue === "AC") {
  
    display.value = "";
  } else if (btnValue === "DEL") {
   
    display.value = display.value.slice(0, -1);
  } else if (btnValue === "=") {
   
    try {
      display.value = eval(display.value.replace("%", "/100"));
    } catch (error) {
      display.value = "Error";
    }
  } else {
    
    display.value += btnValue;
  }
};
