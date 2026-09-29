// ========================================
// PORTFÓLIO — VITOR VECHIEZ
// ========================================


// ========================================
// MODO CLARO / ESCURO
// ========================================

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "◐";
    }

});


// ========================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ========================================

const animatedElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .about-card-item, .education-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// ========================================
// NAVEGAÇÃO
// ========================================

const navigationLinks = document.querySelectorAll(
    ".navbar nav a"
);

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigationLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// ========================================
// MASCOTE
// ========================================

const mascot = document.querySelector(".mascot");


// Ao passar o mouse
mascot.addEventListener("mouseenter", () => {

    mascot.style.transform = "rotate(-8deg) scale(1.08)";

});


// Ao tirar o mouse
mascot.addEventListener("mouseleave", () => {

    mascot.style.transform = "";

});


// Ao clicar
mascot.addEventListener("click", () => {

    mascot.style.animation = "none";

    mascot.offsetHeight;

    mascot.style.animation =
        "mascotSpin 1s ease";

    setTimeout(() => {

        mascot.style.animation =
            "floating 3s ease-in-out infinite";

    }, 1000);

});


// ========================================
// ANIMAÇÃO DA MASCOTE
// ========================================

const mascotStyle = document.createElement("style");

mascotStyle.innerHTML = `

@keyframes mascotSpin {

    0% {
        transform: rotate(0deg) scale(1);
    }

    50% {
        transform: rotate(180deg) scale(1.15);
    }

    100% {
        transform: rotate(360deg) scale(1);
    }

}

`;

document.head.appendChild(mascotStyle);


// ========================================
// ANO AUTOMÁTICO DO RODAPÉ
// ========================================

const footerYear = document.querySelector("footer p");

if (footerYear) {

    footerYear.textContent =
        "© " + new Date().getFullYear() + " Vitor Vechiez";

}


// ========================================
// CERTIFICAÇÕES
// ========================================

const certificates = [

    "Cisco Networking Academy",
    "Fortinet NSE 3",
    "AWS Academy Cloud Foundations"

];


// Evita repetir a mesma certificação
// duas vezes seguidas.

let lastCertificate = null;


function chooseCertificate() {

    let availableCertificates =
        certificates.filter(
            certificate =>
                certificate !== lastCertificate
        );


    const randomIndex =
        Math.floor(
            Math.random() *
            availableCertificates.length
        );


    lastCertificate =
        availableCertificates[randomIndex];


    return lastCertificate;

}


// ========================================
// PREPARAÇÃO PARA A MASCOTE
// ========================================

const certificateBox =
    document.querySelector(".certificate-box");


if (certificateBox) {

    certificateBox.addEventListener("click", () => {

        const selectedCertificate =
            chooseCertificate();

        console.log(
            "Certificação escolhida:",
            selectedCertificate
        );

    });

}
