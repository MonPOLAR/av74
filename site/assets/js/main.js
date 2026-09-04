/* ============================================================
   ANNEMASSE VOLLEY 74 — main.js
   ============================================================ */

/* ── Navigation : se cache en descendant, réapparaît en remontant ── */
(function () {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    let lastScrollTop = 0;

    function handleNav() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const mobileCheck = document.getElementById("mobile-menu-check");

        if (mobileCheck && mobileCheck.checked) return;

        if (scrollTop <= 10) {
            navbar.classList.remove("nav-hidden");
        } else if (scrollTop > lastScrollTop) {
            navbar.classList.add("nav-hidden");
        } else {
            navbar.classList.remove("nav-hidden");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    let ticking = false;
    window.addEventListener("scroll", function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                handleNav();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
})();

/* ── Menu mobile et sous-menu « Le Club » ────────────────────
   Gérés en CSS pur via des cases à cocher invisibles
   (#mobile-menu-check, .dropdown-check) : pas de JS nécessaire. */

/* ── Fermeture du menu mobile après un clic sur un lien ──────── */
(function () {
    const mobileCheck = document.getElementById("mobile-menu-check");
    if (!mobileCheck) return;
    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            mobileCheck.checked = false;
        });
    });
})();

/* ── Mise en avant du lien de navigation actif ───────────────── */
(function () {
    const current = document.body.getAttribute("data-page");
    if (!current) return;
    document.querySelectorAll(".nav-links a[data-page], .nav-links label[data-page]").forEach(function (link) {
        if (link.getAttribute("data-page") === current) {
            link.classList.add("active");
        }
    });
})();

/* ── Année courante dans le pied de page ─────────────────────── */
(function () {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* ── Apparition en douceur des blocs au scroll ───────────────
   Amélioration progressive : le contenu est visible par défaut.
   ──────────────────────────────────────────────────────────── */
(function () {
    if (!("IntersectionObserver" in window)) return;

    try {
        const items = document.querySelectorAll(".reveal");
        if (!items.length) return;

        items.forEach(el => el.classList.add("reveal-init"));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add("in-view"), index * 40);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

        items.forEach(el => observer.observe(el));

        setTimeout(() => {
            document.querySelectorAll(".reveal-init:not(.in-view)")
                .forEach(el => el.classList.add("in-view"));
        }, 3000);
    } catch (e) {
        /* En cas de souci, on ne prend aucun risque : rien n'est masqué. */
    }
})();
