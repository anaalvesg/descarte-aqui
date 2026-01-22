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


document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");
    const topbar = document.querySelector(".contact");

    let headerHeight = header.offsetHeight;
    let topbarHeight = topbar ? topbar.offsetHeight : 0;

    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {

        const st = window.pageYOffset || document.documentElement.scrollTop;

        if (st >= 1) {

            header.classList.add("fixedHeader");

            if (st > lastScrollTop) {
                /* scroll para baixo → esconde tudo */
                header.style.transform = `translateY(-${headerHeight}px)`;
            } else {
                /* scroll para cima → mostra só o mainHeader */
                header.style.transform = `translateY(-${topbarHeight}px)`;
            }

            lastScrollTop = st <= 0 ? 0 : st;

        } else {
            /* topo da página */
            header.style.transform = "translateY(0)";
            header.classList.remove("fixedHeader");
        }

    }, false);
});
