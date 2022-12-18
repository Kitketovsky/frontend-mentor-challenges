import "./css/main.scss";
import thankYouImg from "./assets/illustration-thank-you.svg";

const submitBtn = document.getElementById("submit");
const card = document.getElementById("card");

submitBtn.addEventListener("click", () => {
  const checkedScore = document.querySelector("input[type='radio']:checked");

  if (!checkedScore) return;

  const label = checkedScore.nextElementSibling;

  card.classList.add("thank-you");

  card.innerHTML = `
  <div>
    <img src=${thankYouImg} alt="Thank You illustration">
  </div>
  <span class="selected">
    You selected ${label.textContent} out of 5!
  </span>
  <h1>Thank you!</h1>
  <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
`;
});
