document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");
    const menuButton = document.getElementById("mobile-menu-button");
    const navigation = document.getElementById("main-navigation");
    const languageButton = document.getElementById("language-button");
    const navLinks = document.querySelectorAll(".main-navigation a");
    const sections = document.querySelectorAll("main section");
    const footerYear = document.getElementById("current-year");

    /* =========================================
       HEADER — SCROLL
    ========================================= */

    function updateHeader() {
        if (window.scrollY > 30) {
            header.classList.add("is-scrolled");
        } else {
            header.classList.remove("is-scrolled");
        }
    }

    window.addEventListener("scroll", updateHeader);
    updateHeader();


    /* =========================================
       MENU MOBILE
    ========================================= */

    function closeMobileMenu() {
        navigation.classList.remove("is-open");
        menuButton.classList.remove("is-active");
        menuButton.setAttribute("aria-expanded", "false");
    }

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("is-open");

            menuButton.classList.toggle("is-active", isOpen);
            menuButton.setAttribute("aria-expanded", isOpen);
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMobileMenu();
        });
    });


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const sectionId = entry.target.getAttribute("id");

                navLinks.forEach((link) => {
                    link.classList.remove("is-active");

                    const target = link.getAttribute("href");

                    if (target === `#${sectionId}`) {
                        link.classList.add("is-active");
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


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".section-header, " +
        ".about-grid, " +
        ".knowledge-group, " +
        ".project-featured, " +
        ".other-project, " +
        ".certification-item, " +
        ".complementary-courses, " +
        ".education-layout, " +
        ".experience-empty, " +
        ".contact-terminal"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =========================================
       ANIMAÇÃO DE ATRASO NOS ELEMENTOS
    ========================================= */

    document.querySelectorAll(".knowledge-group").forEach((element, index) => {
        element.style.transitionDelay = `${index * 80}ms`;
    });

    document.querySelectorAll(".project-featured").forEach((element, index) => {
        element.style.transitionDelay = `${index * 80}ms`;
    });

    document.querySelectorAll(".other-project").forEach((element, index) => {
        element.style.transitionDelay = `${index * 60}ms`;
    });

    document.querySelectorAll(".certification-item").forEach((element, index) => {
        element.style.transitionDelay = `${index * 60}ms`;
    });


    /* =========================================
       BOTÃO DE IDIOMA
    ========================================= */

    if (languageButton) {
        languageButton.addEventListener("click", () => {
            /*
             * O sistema PT / EN / ES será implementado
             * em uma etapa própria.
             *
             * Por enquanto, o botão permanece visual
             * para não alterar o conteúdo do site.
             */
            languageButton.blur();
        });
    }


    /* =========================================
       ANO DO RODAPÉ
    ========================================= */

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }


    /* =========================================
       FECHAR MENU AO REDIMENSIONAR
    ========================================= */

    window.addEventListener("resize", () => {
        if (window.innerWidth > 850) {
            closeMobileMenu();
        }
    });
});
