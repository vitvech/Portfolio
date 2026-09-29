document.addEventListener("DOMContentLoaded", () => {
    /* =========================================================
       MENU MOBILE
    ========================================================= */

    const menuButton = document.getElementById("mobile-menu-button");
    const navigation = document.getElementById("main-navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("is-open");
            menuButton.classList.toggle("is-active");

            const isOpen = navigation.classList.contains("is-open");

            menuButton.setAttribute("aria-expanded", isOpen);
        });

        // Fecha o menu ao clicar em um link
        const navigationLinks = navigation.querySelectorAll("a");

        navigationLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove("is-open");
                menuButton.classList.remove("is-active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =========================================================
       NAVEGAÇÃO SUAVE
    ========================================================= */

    const pageLinks = document.querySelectorAll('a[href^="#"]');

    pageLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (!targetSection) {
                return;
            }

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });


    /* =========================================================
       HEADER AO ROLAR A PÁGINA
    ========================================================= */

    const header = document.getElementById("site-header");

    function updateHeader() {
        if (!header) {
            return;
        }

        if (window.scrollY > 30) {
            header.classList.add("is-scrolled");
        } else {
            header.classList.remove("is-scrolled");
        }
    }

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });


    /* =========================================================
       SEÇÕES APARECENDO NO SCROLL
    ========================================================= */

    const revealElements = document.querySelectorAll(
        ".about-section, " +
        ".knowledge-section, " +
        ".projects-section, " +
        ".certifications-section, " +
        ".education-section, " +
        ".experience-section, " +
        ".contact-section"
    );

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach((element) => {
            element.classList.add("is-visible");
        });
    }


    /* =========================================================
       DESTAQUE DA SEÇÃO ATUAL NO MENU
    ========================================================= */

    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(
        '.main-navigation a[href^="#"]'
    );

    if ("IntersectionObserver" in window && sections.length > 0) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const currentId = entry.target.getAttribute("id");

                    navLinks.forEach((link) => {
                        const linkTarget = link.getAttribute("href");

                        if (linkTarget === `#${currentId}`) {
                            link.classList.add("is-active");
                        } else {
                            link.classList.remove("is-active");
                        }
                    });
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0
            }
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }


    /* =========================================================
       BOTÃO DE IDIOMA
    ========================================================= */

    const languageButton = document.getElementById("language-button");

    if (languageButton) {
        languageButton.addEventListener("click", () => {
            /*
             * PT é o idioma atual.
             *
             * A estrutura para EN/ES será implementada
             * posteriormente, sem alterar a identidade visual.
             */

            console.log("Sistema de idiomas: PT ativo.");
        });
    }


    /* =========================================================
       ANO AUTOMÁTICO DO FOOTER
    ========================================================= */

    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =========================================================
       ACESSIBILIDADE DO MENU
    ========================================================= */

    if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
    }

    console.log("VITOR VECHIEZ | Portfolio carregado.");
});
