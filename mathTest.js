let finalResult;
let evenOddResult;

// const number1 = 4;
// const number2 = 8;
// const number3 = 12;
// const number4 = 8;

// const additionResult = number1 + number2;
// const subtractionResult = number3 - number4;

// finalResult = additionResult * subtractionResult;

// evenOddResult = finalResult % 2;
  

const section = document.querySelector("section");
const button = document.getElementById("checkBtn");

button.addEventListener("click", () => {
  // Get values from input fields
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const num3 = Number(document.getElementById("num3").value);

  // Calculate finalResult
  const finalResult = num1 + num2 + num3;
  const evenOddResult = finalResult % 2;

  // Clear previous results
  section.innerHTML = "";

//const section = document.querySelector("section");
const para1 = document.createElement("p");

const finalResultCheck = 
    finalResult == 48 ? `yes,well done!` : `no, it is ${finalResult}`;
para1.textContent = `Is the final result 48 ? ${finalResultCheck}`;

const para2 = document.createElement("p");

const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. ";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);
})