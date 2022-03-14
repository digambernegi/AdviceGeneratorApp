const api = "https://api.adviceslip.com/advice";

const adviceno = document.querySelector(".advice_number");
const advicepara = document.querySelector(".advice");
const spindice = document.querySelector(".dice__container");

async function getdata() {
  let response = await fetch(api);
  let data = await response.json();
  return data;
}

function randomno() {
  return Math.floor(Math.random() * 1000 + 1);
}

spindice.addEventListener("click", () => {
  getdata().then((data) => (advicepara.textContent = data.slip.advice));
  adviceno.textContent = randomno();
});
