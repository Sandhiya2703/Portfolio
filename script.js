// ==========================
// PARTICLE BACKGROUND
// ==========================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#38bdf8"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {

            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.4,
            width: 1

        },

        move: {

            enable: true,
            speed: 3

        }

    }

});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

function revealSections() {

    let reveals = document.querySelectorAll(
        ".about-card, .skill-card, .timeline-item, .project-card, .stat-card"
    );

    for (let i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;

        let elementTop =
            reveals[i].getBoundingClientRect().top;

        let revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            reveals[i].classList.add("active");

        }

    }

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

// ==========================
// COUNTER ANIMATION
// ==========================

const counters =
    document.querySelectorAll(".stat-card h3");

const startCounter = () => {

    counters.forEach(counter => {

        let target =
            counter.innerText.replace("+", "");

        let count = 0;

        let increment =
            Math.ceil(target / 100);

        let updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.innerText = count + "+";

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText =
                    target + "+";

            }

        };

        updateCounter();

    });

};

startCounter();

// ==========================
// NAVBAR ACTIVE LINK
// ==========================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >=
            sectionTop - 200
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

// ==========================
// TYPING EFFECT
// ==========================

const textArray = [

    "Full Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Frontend Developer"
   

];

let textIndex = 0;
let charIndex = 0;

const typingElement =
    document.querySelector(".typing-text");

function typeText() {

    if (!typingElement) return;

    if (
        charIndex <
        textArray[textIndex].length
    ) {

        typingElement.textContent +=
            textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(
            eraseText,
            1500
        );

    }

}

function eraseText() {

    if (
        charIndex > 0
    ) {

        typingElement.textContent =
            textArray[textIndex].substring(
                0,
                charIndex - 1
            );

        charIndex--;

        setTimeout(
            eraseText,
            50
        );

    } else {

        textIndex++;

        if (
            textIndex >=
            textArray.length
        ) {

            textIndex = 0;

        }

        setTimeout(
            typeText,
            300
        );

    }

}

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (typingElement) {

            typingElement.textContent = "";

            setTimeout(
                typeText,
                500
            );

        }

    }
);

// ==========================
// HERO BUTTON RIPPLE EFFECT
// ==========================

const buttons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn"
    );

buttons.forEach(button => {

    button.addEventListener(
        "click",
        function (e) {

            const circle =
                document.createElement("span");

            const diameter =
                Math.max(
                    this.clientWidth,
                    this.clientHeight
                );

            circle.style.width =
                circle.style.height =
                `${diameter}px`;

            circle.style.left =
                `${e.clientX -
                this.offsetLeft -
                diameter / 2}px`;

            circle.style.top =
                `${e.clientY -
                this.offsetTop -
                diameter / 2}px`;

            circle.classList.add(
                "ripple"
            );

            this.appendChild(circle);

            setTimeout(() => {

                circle.remove();

            }, 600);

        }
    );

});

// ==========================
// IMAGE PARALLAX EFFECT
// ==========================

window.addEventListener(
    "mousemove",
    function (e) {

        const image =
            document.querySelector(
                ".hero-right img"
            );

        if (!image) return;

        let x =
            (window.innerWidth / 2 -
                e.pageX) / 40;

        let y =
            (window.innerHeight / 2 -
                e.pageY) / 40;

        image.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);

// ==========================
// PROJECT CARD TILT EFFECT
// ==========================

const cards =
    document.querySelectorAll(
        ".project-card"
    );

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left;

            const y =
                e.clientY -
                rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 15;

            const rotateY =
                (centerX - x) / 15;

            card.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "rotateX(0deg) rotateY(0deg)";

        }
    );

});

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topButton =
    document.createElement("button");

topButton.innerHTML =
    "↑";

topButton.id =
    "topBtn";

document.body.appendChild(
    topButton
);

topButton.style.position =
    "fixed";

topButton.style.bottom =
    "20px";

topButton.style.right =
    "20px";

topButton.style.padding =
    "15px";

topButton.style.borderRadius =
    "50%";

topButton.style.border =
    "none";

topButton.style.background =
    "#38bdf8";

topButton.style.display =
    "none";

topButton.style.cursor =
    "pointer";

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 300
        ) {

            topButton.style.display =
                "block";

        } else {

            topButton.style.display =
                "none";

        }

    }
);

topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);

// ==========================
// PRELOADER
// ==========================

window.addEventListener(
    "load",
    () => {

        const loader =
            document.getElementById(
                "loader"
            );

        if (loader) {

            loader.style.display =
                "none";

        }

    }
);

// ==========================
// CONTACT FORM VALIDATION
// ==========================

const form =
    document.querySelector("form");

if (form) {

    form.addEventListener(
        "submit",
        function (e) {

            const email =
                document.querySelector(
                    'input[type="email"]'
                );

            if (
                email &&
                !email.value.includes("@")
            ) {

                e.preventDefault();

                alert(
                    "Enter valid email address"
                );

            }

        }
    );

}