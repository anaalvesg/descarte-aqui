// document.querySelectorAll(".faqCard").addEventListener("click", function () {
//     if (document.querySelector(".hide").style.display != "none") {
//         document.querySelector(".hide").style.display = "none"
//     } else {
//         document.querySelector(".hide").style.display = "block"
//     }
// })

document.querySelectorAll(".faqCard").forEach(function (card) {
  card.addEventListener("click", function () {
    const p = card.querySelector(".hide");
    const icon = card.querySelector(".fcImg");

    if (p.style.display === "none" || p.style.display === "") {
      p.style.display = "block";
      icon.src = "/midias/icons/icons-svg/icon-check-opened.svg"
    } else {
      p.style.display = "none";
      icon.src = "/midias/icons/icons-svg/icon-check-closed.svg"
    }
  });
});