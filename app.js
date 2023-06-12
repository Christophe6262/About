const btns = document.querySelectorAll(".btn");
const cardInfo = document.querySelectorAll(".card-info");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    cardInfo.forEach((card) => {
      if (btn.dataset.id !== card.id) {
        card.classList.remove("actif");
      } else {
        card.classList.add("actif");
      }
    });
    btns.forEach((e) => {
      if (e.dataset.id !== btn.dataset.id) {
        e.classList.remove("actif");
      } else {
        e.classList.add("actif");
      }
    });
  });
});
