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

    if (p.style.display === "none" || p.style.display === "") {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
});