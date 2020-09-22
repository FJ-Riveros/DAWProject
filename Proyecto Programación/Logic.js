const form = document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  //Gets the operator info
  const dropMenu = document.getElementById("dropMenu");
  const select = dropMenu.options[dropMenu.selectedIndex].value;

  //Gets the InputA info
  const inputA = document.getElementById("inputA").value;

  //Gets the InputB info
  const inputB = document.getElementById("inputB").value;

  //Selector for the result
  const resultMessage = document.getElementById("result");

  const errorMessage = document.createTextNode(
    "None of the input fields can be empty"
  );
  if (inputA !== "" && inputB !== "") {
    let result;
    switch (select) {
      case "+":
        result = Number(inputA) + Number(inputB);
        break;

      case "-":
        result = inputA - inputB;
        break;

      case "*":
        result = inputA * inputB;
        break;

      case "/":
        result = inputA / inputB;
        break;

      case "%":
        result = inputA % inputB;
        break;

      default:
        console.log("There was an error");
    }
    resultMessage.innerHTML = "";
    let operationResult = document.createTextNode(`The result is ${result}`);
    resultMessage.appendChild(operationResult);
  } else {
    resultMessage.innerHTML = "";
    resultMessage.appendChild(errorMessage);
  }
});
