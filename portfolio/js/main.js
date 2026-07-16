
console.log("JavaScript works!");

gsap.registerPlugin(ScrollTrigger);




gsap.utils.toArray(".reveal").forEach(section => {

    gsap.from(section,{

        y:120,

        opacity:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:section,

            start:"top 80%",

            toggleActions:"play none none reverse"

        }

    });

});

gsap.utils.toArray(".project-card").forEach((card,index)=>{

    gsap.from(card,{

        y:80,

        opacity:0,

        duration:.8,

        delay:index*0.08,

        ease:"power3.out",

        scrollTrigger:{

            trigger:card,

            start:"top 85%",

            toggleActions:"play none none reverse"

        }

    });

});

gsap.utils.toArray(".contact-card").forEach((card,index)=>{

    gsap.from(card,{

        y:60,

        opacity:0,

        duration:.8,

        delay:index*0.1,

        ease:"power2.out",

        scrollTrigger:{

            trigger:card,

            start:"top 90%",

            toggleActions:"play none none reverse"

        }

    });

});

gsap.from(".intro-buttons",{

    y:40,

    opacity:0,

    duration:1,

    stagger:0.5,

    delay:1.5,

    ease:"power3.out"

});

// gsap.from(".btn-secondary a", {

//     y: 40,

//     opacity: 0,

//     duration: 0.8,

//     stagger: 0.2,

//     ease: "power3.out",

//     scrollTrigger: {

//         trigger: ".intro",

//         start: "top 70%",

//         toggleActions: "play none none reverse"

//     }

// });

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "home";

    if (window.scrollY < 100) {
        current = "home";
    } else {

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

    }

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});