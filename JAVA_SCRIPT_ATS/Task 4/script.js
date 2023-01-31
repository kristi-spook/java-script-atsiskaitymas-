/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const outputDiv = document.querySelector("#output");

async function getCarData() {
  try {
    const res = await fetch(ENDPOINT);
    const carsData = await res.json();
    return carsData;
  } catch (error) {
    console.log(error);
  }
}

getCarData();

const carData = await getCarData();

carData.forEach((carUnit) => generateCarCard(carUnit));

function generateCarCard(car) {
  const card = document.createElement("div");
  card.classList.add("car-card");

  const brand = document.createElement("h3");
  brand.textContent = car.brand;

  const modelList = document.createElement("ul");
  car.models.map((model) => {
    const listItem = document.createElement("li");
    listItem.textContent = model;
    modelList.appendChild(listItem);
  });

  card.append(brand, modelList);
  outputDiv.append(card);
}
