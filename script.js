/* =========================================================
   ANUPAM KUMAR — PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            menuToggle.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuToggle.classList.remove("active");
            });
        });

        document.addEventListener("click", event => {

            const clickedInsideMenu =
                navLinks.contains(event.target) ||
                menuToggle.contains(event.target);

            if (!clickedInsideMenu) {
                navLinks.classList.remove("open");
                menuToggle.classList.remove("active");
            }

        });
    }


    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar = document.getElementById("navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });

    updateNavbar();


    /* =====================================================
       BACKGROUND PARTICLES
       ===================================================== */

    const particleContainer = document.getElementById("particles");

    if (particleContainer) {

        const particleCount =
            window.innerWidth < 600 ? 35 : 75;

        for (let i = 0; i < particleCount; i++) {

            const particle = document.createElement("span");

            particle.className = "particle";

            const size = Math.random() * 2.5 + 1;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            particle.style.left =
                `${Math.random() * 100}%`;

            particle.style.animationDuration =
                `${Math.random() * 15 + 10}s`;

            particle.style.animationDelay =
                `${Math.random() * -20}s`;

            particleContainer.appendChild(particle);
        }
    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =====================================================
       SKILL PROGRESS ANIMATION
       ===================================================== */

    const progressBars =
        document.querySelectorAll(".progress-bar");

    const skillObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const bar = entry.target;
                        const progress =
                            bar.getAttribute("data-progress");

                        bar.style.width = `${progress}%`;

                        skillObserver.unobserve(bar);
                    }

                });

            },
            {
                threshold: 0.4
            }
        );

    progressBars.forEach(bar => {
        skillObserver.observe(bar);
    });


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll("main section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const currentId =
                            entry.target.getAttribute("id");

                        navigationLinks.forEach(link => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                `#${currentId}`
                            ) {
                                link.classList.add("active");
                            }
                        });
                    }
                });

            },
            {
                threshold: 0.35
            }
        );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* =====================================================
       PROFILE 3D MOUSE EFFECT
       ===================================================== */

    const profileCard =
        document.getElementById("profileCard");

    const heroVisual =
        document.querySelector(".hero-visual");

    if (profileCard && heroVisual) {

        heroVisual.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) return;

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                ((x - centerX) / centerX) * 8;

            const rotateX =
                ((centerY - y) / centerY) * 8;

            profileCard.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        heroVisual.addEventListener("mouseleave", () => {

            profileCard.style.transform =
                "rotateX(0deg) rotateY(0deg)";
        });
    }


    /* =====================================================
       PROJECT CARD 3D EFFECT
       ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) return;

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x - rect.width / 2) /
                (rect.width / 2)) * 4;

            const rotateX =
                ((rect.height / 2 - y) /
                (rect.height / 2)) * 4;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;
        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "";
        });
    });


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    const backTop =
        document.getElementById("backTop");

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 600) {
                backTop.classList.add("show");
            } else {
                backTop.classList.remove("show");
            }

        }, {
            passive: true
        });

        backTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       SMOOTH ANCHOR FALLBACK
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", event => {

            const targetId =
                anchor.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    const profileImage =
        document.querySelector(".profile-image img");

    if (profileImage) {

        profileImage.addEventListener("error", () => {

            profileImage.style.opacity = "0";

            const container =
                document.querySelector(".profile-image");

            if (container) {

                container.style.background =
                    "radial-gradient(circle, #164d80, #071526)";

                const initials =
                    document.createElement("span");

                initials.textContent = "AK";

                initials.style.position = "absolute";
                initials.style.left = "50%";
                initials.style.top = "50%";
                initials.style.transform =
                    "translate(-50%, -50%)";

                initials.style.fontFamily =
                    '"Space Grotesk", sans-serif';

                initials.style.fontSize = "60px";
                initials.style.fontWeight = "800";
                initials.style.color = "#5ab5ff";

                container.appendChild(initials);
            }
        });
    }


    /* =====================================================
       CERTIFICATE IMAGE HANDLING
       ===================================================== */

    document
        .querySelectorAll(".certificate-card img")
        .forEach(image => {

            image.addEventListener("load", () => {

                image.style.display = "block";

                const placeholder =
                    image.parentElement
                        .querySelector(".certificate-placeholder");

                if (placeholder) {
                    placeholder.style.display = "none";
                }
            });

        });


    /* =====================================================
       CURSOR GLOW — DESKTOP
       ===================================================== */

    if (window.innerWidth > 900) {

        const cursorGlow =
            document.createElement("div");

        cursorGlow.style.position = "fixed";
        cursorGlow.style.width = "250px";
        cursorGlow.style.height = "250px";
        cursorGlow.style.borderRadius = "50%";
        cursorGlow.style.pointerEvents = "none";
        cursorGlow.style.zIndex = "-1";
        cursorGlow.style.background =
            "radial-gradient(circle, rgba(0,150,255,0.07), transparent 70%)";
        cursorGlow.style.transform =
            "translate(-50%, -50%)";

        document.body.appendChild(cursorGlow);

        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;

        document.addEventListener("mousemove", event => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        });

        function animateGlow() {

            glowX += (mouseX - glowX) * 0.08;
            glowY += (mouseY - glowY) * 0.08;

            cursorGlow.style.left =
                `${glowX}px`;

            cursorGlow.style.top =
                `${glowY}px`;

            requestAnimationFrame(animateGlow);
        }

        animateGlow();
    }


    /* =====================================================
       CONSOLE BRANDING
       ===================================================== */

    console.log(
        "%c Anupam Kumar ",
        "background:#0878ff;color:white;padding:8px 14px;border-radius:6px;font-weight:bold;"
    );

    console.log(
        "%c Computer Science Student • Web Developer ",
        "color:#56b4ff;font-weight:bold;"
    );

});