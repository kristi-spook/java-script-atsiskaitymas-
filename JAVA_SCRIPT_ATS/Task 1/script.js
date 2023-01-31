/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const kgInput = document.querySelector("#search");
const calculateButtonFromForm = document.querySelector("form");
const div = document.querySelector("#output");

calculateButtonFromForm.addEventListener("submit", generateAnswers);

function generateAnswers(event) {
  event.preventDefault();
  const kg = +kgInput.value;

  const lb = kg * 2.2046;
  const lbField = document.createElement("div");
  lbField.classList.add("rezult-field");
  const lbResult = document.createElement("h2");
  lbResult.textContent = `${kgInput.value}kg = ${lb.toFixed(2)}lb`;
  lbField.append(lbResult);

  const g = kg / 0.001;
  const gField = document.createElement("div");
  gField.classList.add("rezult-field");

  const gResult = document.createElement("h2");
  gResult.textContent = `${kgInput.value}kg = ${g.toFixed(2)}g`;
  gField.append(gResult);

  const oz = kg * 35.274;
  const ozField = document.createElement("div");
  ozField.classList.add("rezult-field");

  const ozResult = document.createElement("h2");
  ozResult.textContent = `${kgInput.value}kg = ${oz.toFixed(2)}oz`;
  ozField.append(ozResult);

  div.append(lbField, gField, ozField);
}
