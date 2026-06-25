

// // Register ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// // ===========================
// // Navbar Animation
// // ===========================
// gsap.from("header", {
//     y: -100,
//     opacity: 0,
//     duration: 1,
//     ease: "power4.out"
// });

// // Logo
// gsap.from(".logo", {
//     x: -80,
//     opacity: 0,
//     duration: 1,
//     delay: 0.3,
//     ease: "power3.out"
// });

// // Nav Links
// gsap.from("nav ul li", {
//     y: -30,
//     opacity: 0,
//     stagger: 0.12,
//     duration: 0.8,
//     delay: 0.5,
//     ease: "back.out(1.7)"
// });

// // ===========================
// // Hero Image
// // ===========================
// gsap.from(".image-frame", {
//     x: -120,
//     scale: 0.8,
//     opacity: 0,
//     duration: 1.4,
//     ease: "power4.out"
// });

// // Floating Animation
// gsap.to(".image-frame", {
//     y: -15,
//     duration: 2.5,
//     repeat: -2,
//     yoyo: true,
//     ease: "sine.inOut"
// });


// gsap.to(".image-frame", {
//     y: -20,
//     duration: 3,
//     repeat: -1,
//     yoyo: true,
//     ease: "sine.inOut"
// });
// // ===========================
// // Hero Text
// // ===========================
// gsap.from(".hero-right h1", {
//     x: 80,
//     opacity: 0,
//     duration: 1,
//     delay: 0.4,
//     ease: "power3.out"
// });

// gsap.from(".profession-container", {
//     x: 80,
//     opacity: 0,
//     duration: 1,
//     delay: 0.7,
//     ease: "power3.out"
// });

// gsap.from(".description", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     ease: "power3.out"
// });

// // ===========================
// // Social Icons
// // ===========================
// gsap.from(".social-icons a", {
//     y: 40,
//     opacity: 0,
//     scale: 0,
//     stagger: 0.15,
//     duration: 0.8,
//     delay: 1.3,
//     ease: "back.out(2)"
// });

// // ===========================
// // Download Button
// // ===========================
// gsap.from(".btn-download", {
//     y: 40,
//     opacity: 0,
//     scale: 0.5,
//     duration: 0.8,
//     delay: 1.8,
//     ease: "elastic.out(1,0.5)"
// });

// // ===========================
// // Hover Effects
// // ===========================

// // Image Hover
// const frame = document.querySelector(".image-frame");

// frame.addEventListener("mouseenter", () => {

//     gsap.to(frame, {
//         scale: 1.05,
//         rotate: 3,
//         duration: .4
//     });

// });

// frame.addEventListener("mouseleave", () => {

//     gsap.to(frame, {
//         scale: 1,
//         rotate: 0,
//         duration: .4
//     });

// });

// // Button Hover
// const downloadBtn = document.querySelector(".btn-download");

// downloadBtn.addEventListener("mouseenter", () => {

//     gsap.to(downloadBtn, {
//         scale: 1.08,
//         duration: .3
//     });

// });

// downloadBtn.addEventListener("mouseleave", () => {

//     gsap.to(downloadBtn, {
//         scale: 1,
//         duration: .3
//     });

// });

// // Social Icons Hover
// document.querySelectorAll(".social-icons a").forEach(icon => {

//     icon.addEventListener("mouseenter", () => {

//         gsap.to(icon, {
//             y: -10,
//             rotation: 360,
//             duration: .5
//         });

//     });

//     icon.addEventListener("mouseleave", () => {

//         gsap.to(icon, {
//             y: 0,
//             rotation: 0,
//             duration: .5
//         });

//     });

// });

// // ===========================
// // Navbar Glass Effect on Scroll
// // ===========================
// window.addEventListener("scroll", () => {

//     const header = document.querySelector("header");

//     if (window.scrollY > 50) {

//         gsap.to(header, {
//             background: "rgba(255,255,255,0.2)",
//             backdropFilter: "blur(15px)",
//             duration: .3
//         });

//     } else {

//         gsap.to(header, {
//             background: "transparent",
//             backdropFilter: "blur(0px)",
//             duration: .3
//         });

//     }

// });


// // // javascript
// // // ===============================
// // // GSAP SETUP
// // // ===============================
// // gsap.registerPlugin(ScrollTrigger);

// // // ===============================
// // // ABOUT SECTION
// // // ===============================

// // let aboutTL = gsap.timeline({
// //     scrollTrigger: {
// //         trigger: ".about-section",
// //         start: "top 70%",
// //         toggleActions: "play none none reverse"
// //     }
// // });

// // // Left Image
// // aboutTL.from(".about-image-wrapper", {
// //     x: -120,
// //     opacity: 0,
// //     scale: 0.8,
// //     duration: 1.2,
// //     ease: "power4.out"
// // });

// // // Accent Shape
// // aboutTL.from(".about-image-accent", {
// //     scale: 0,
// //     rotate: 180,
// //     duration: 0.8,
// //     ease: "back.out(1.7)"
// // }, "-=0.6");

// // // Sub Heading
// // aboutTL.from(".sub-heading", {
// //     y: 30,
// //     opacity: 0,
// //     duration: 0.6
// // }, "-=0.5");

// // // Heading
// // aboutTL.from(".about-right h2", {
// //     y: 40,
// //     opacity: 0,
// //     duration: 0.8
// // }, "-=0.4");

// // // Paragraphs
// // aboutTL.from(".about-description", {
// //     y: 40,
// //     opacity: 0,
// //     duration: 0.3,
// //     stagger: 0.2
// // }, "-=0.3");

// // // Skills Heading
// // aboutTL.from(".skills-block h3", {
// //     x: -30,
// //     opacity: 0,
// //     duration: 0.6
// // }, "-=0.3");

// // // Skill Cards
// // // aboutTL.from(".skill-tag", {
// // //     opacity: 0,
// // //     y: 60,
// // //     scale: 0.85,
// // //     stagger: 0.08,
// // //     duration: 0.5,
// // //     ease: "back.out(1.7)"
// // // }, "-=0.2");

// // // Floating About Image
// // gsap.to(".about-image-wrapper", {
// //     y: -12,
// //     repeat: -1,
// //     yoyo: true,
// //     duration: 3,
// //     ease: "sine.inOut"
// // });

// // // ===============================
// // // HOVER EFFECTS
// // // ===============================

// // // Skill Cards Hover
// // document.querySelectorAll(".skill-tag").forEach(card => {

// //     card.addEventListener("mouseenter", () => {

// //         gsap.to(card, {
// //             y: -8,
// //             scale: 1.05,
// //             duration: 0.3
// //         });

// //     });

// //     card.addEventListener("mouseleave", () => {

// //         gsap.to(card, {
// //             y: 0,
// //             scale: 1,
// //             duration: 0.3
// //         });

// //     });

// // });

// // // About Image Hover
// // const aboutImg = document.querySelector(".about-image-wrapper");

// // aboutImg.addEventListener("mouseenter", () => {

// //     gsap.to(aboutImg, {
// //         scale: 1.05,
// //         rotate: 2,
// //         duration: 0.4
// //     });

// // });

// // aboutImg.addEventListener("mouseleave", () => {

// //     gsap.to(aboutImg, {
// //         scale: 1,
// //         rotate: 0,
// //         duration: 0.4
// //     });

// // });



// // =========================
// // ABOUT SECTION ANIMATIONS
// // =========================

// // About Image
// gsap.from(".about-image-wrapper", {
//     scrollTrigger: {
//         trigger: ".about-image-wrapper",
//         start: "top 80%",
//         toggleActions: "play none none none"
//     },
//     x: -100,
//     opacity: 0,
//     scale: 0.85,
//     duration: 1.2,
//     ease: "power4.out"
// });

// // Floating Animation
// gsap.to(".about-image-wrapper", {
//     y: -12,
//     duration: 3,
//     repeat: -1,
//     yoyo: true,
//     ease: "sine.inOut"
// });

// // Accent Shape
// gsap.from(".about-image-accent", {
//     scrollTrigger: {
//         trigger: ".about-image-wrapper",
//         start: "top 80%"
//     },
//     scale: 0,
//     rotation: 180,
//     duration: 1,
//     ease: "back.out(1.7)"
// });

// // Sub Heading
// gsap.from(".sub-heading", {
//     scrollTrigger: {
//         trigger: ".sub-heading",
//         start: "top 85%"
//     },
//     y: 30,
//     opacity: 0,
//     duration: 0.8,
//     ease: "power3.out"
// });

// // Main Heading
// gsap.from(".about-right h2", {
//     scrollTrigger: {
//         trigger: ".about-right h2",
//         start: "top 85%"
//     },
//     y: 40,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out"
// });

// // Paragraphs
// gsap.from(".about-description", {
//     scrollTrigger: {
//         trigger: ".about-description",
//         start: "top 85%"
//     },
//     y: 40,
//     opacity: 0,
//     stagger: 0.2,
//     duration: 0.8,
//     ease: "power3.out"
// });

// // Skills Heading
// gsap.from(".skills-block h3", {
//     scrollTrigger: {
//         trigger: ".skills-block h3",
//         start: "top 90%"
//     },
//     x: -30,
//     opacity: 0,
//     duration: 0.8,
//     ease: "power3.out"
// });

// // Skills Cards
// // gsap.from(".skill-tag", {
// //     scrollTrigger: {
// //         trigger: ".skills-grid",
// //         start: "top 85%",
// //         once: true
// //     },
// //     opacity: 0,
// //     y: 50,
// //     scale: 0.9,
// //     stagger: 0.08,
// //     duration: 0.6,
// //     ease: "back.out(1.7)"
// // });
// gsap.utils.toArray(".skill-tag").forEach((card, index) => {

//     gsap.from(card, {

//         scrollTrigger: {
//             trigger: card,
//             start: "top 90%"
//         },

//         y: 50,
//         opacity: 0,
//         duration: .7,
//         delay: index * 0.05,
//         ease: "power3.out"

//     });

// });
// // =========================
// // HOVER EFFECTS
// // =========================

// // About Image Hover
// const aboutImg = document.querySelector(".about-image-wrapper");

// if (aboutImg) {

//     aboutImg.addEventListener("mouseenter", () => {

//         gsap.to(aboutImg, {
//             scale: 1.05,
//             rotate: 2,
//             duration: 0.4,
//             ease: "power2.out"
//         });

//     });

//     aboutImg.addEventListener("mouseleave", () => {

//         gsap.to(aboutImg, {
//             scale: 1,
//             rotate: 0,
//             duration: 0.4,
//             ease: "power2.out"
//         });

//     });

// }

// // Skill Cards Hover
// document.querySelectorAll(".skill-tag").forEach(card => {

//     card.addEventListener("mouseenter", () => {

//         gsap.to(card, {
//             y: -8,
//             scale: 1.05,
//             duration: 0.3,
//             ease: "power2.out"
//         });

//     });

//     card.addEventListener("mouseleave", () => {

//         gsap.to(card, {
//             y: 0,
//             scale: 1,
//             duration: 0.3,
//             ease: "power2.out"
//         });

//     });

// });

// // ```javascript
// // ===============================
// // EDUCATION SECTION GSAP
// // ===============================

// // Section Heading
// gsap.from(".education-section .section-title h2", {
//     scrollTrigger: {
//         trigger: ".education-section",
//         start: "top 75%"
//     },
//     y: 80,
//     opacity: 0,
//     duration: 1,
//     ease: "power4.out"
// });

// gsap.from(".education-section .section-title p", {
//     scrollTrigger: {
//         trigger: ".education-section",
//         start: "top 75%"
//     },
//     y: 40,
//     opacity: 0,
//     duration: 1,
//     delay: .2,
//     ease: "power3.out"
// });


// // ===============================
// // Timeline Line Draw Animation
// // ===============================

// gsap.from(".timeline-line", {

//     scrollTrigger: {
//         trigger: ".timeline-container",
//         start: "top 75%",
//         end: "bottom 20%",
//         scrub: 1
//     },

//     scaleY: 0,
//     transformOrigin: "top center",
//     ease: "none"

// });


// // ===============================
// // Left Cards
// // ===============================

// gsap.utils.toArray(".left-item").forEach((card) => {

//     gsap.from(card, {

//         scrollTrigger: {
//             trigger: card,
//             start: "top 82%"
//         },

//         x: -180,
//         opacity: 0,
//         rotate: -8,
//         duration: 1.2,
//         ease: "power4.out"

//     });

// });


// // ===============================
// // Right Cards
// // ===============================

// gsap.utils.toArray(".right-item").forEach((card) => {

//     gsap.from(card, {

//         scrollTrigger: {
//             trigger: card,
//             start: "top 82%"
//         },

//         x: 180,
//         opacity: 0,
//         rotate: 8,
//         duration: 1.2,
//         ease: "power4.out"

//     });

// });


// // ===============================
// // Timeline Dots Pop
// // ===============================

// gsap.utils.toArray(".timeline-dot").forEach((dot) => {

//     gsap.from(dot, {

//         scrollTrigger: {
//             trigger: dot,
//             start: "top 85%"
//         },

//         scale: 0,
//         rotation: 360,
//         duration: .8,
//         ease: "back.out(2)"

//     });

// });


// // ===============================
// // Timeline Content
// // ===============================

// gsap.utils.toArray(".timeline-content h3").forEach((title) => {

//     gsap.from(title, {

//         scrollTrigger: {
//             trigger: title,
//             start: "top 90%"
//         },

//         y: 40,
//         opacity: 0,
//         duration: .8

//     });

// });

// gsap.utils.toArray(".institution").forEach((college) => {

//     gsap.from(college, {

//         scrollTrigger: {
//             trigger: college,
//             start: "top 90%"
//         },

//         x: 30,
//         opacity: 0,
//         duration: .8

//     });

// });

// gsap.utils.toArray(".date-tag").forEach((date) => {

//     gsap.from(date, {

//         scrollTrigger: {
//             trigger: date,
//             start: "top 90%"
//         },

//         scale: .5,
//         opacity: 0,
//         duration: .7,
//         ease: "back.out(1.7)"

//     });

// });

// gsap.utils.toArray(".timeline-content p").forEach((para) => {

//     gsap.from(para, {

//         scrollTrigger: {
//             trigger: para,
//             start: "top 90%"
//         },

//         y: 30,
//         opacity: 0,
//         duration: .8

//     });

// });


// // ===============================
// // Floating Cards
// // ===============================

// gsap.to(".timeline-item", {

//     y: -8,
//     repeat: -1,
//     yoyo: true,
//     stagger: .3,
//     duration: 3,
//     ease: "sine.inOut"

// });


// // ===============================
// // Hover Animation
// // ===============================

// document.querySelectorAll(".timeline-content").forEach(card => {

//     card.addEventListener("mouseenter", () => {

//         gsap.to(card, {

//             scale: 1.04,
//             y: -10,
//             duration: .35,
//             ease: "power2.out"

//         });

//     });

//     card.addEventListener("mouseleave", () => {

//         gsap.to(card, {

//             scale: 1,
//             y: 0,
//             duration: .35

//         });

//     });

// });


// // ===============================
// // Active Card Glow
// // ===============================

// gsap.utils.toArray(".timeline-item").forEach(item => {

//     ScrollTrigger.create({

//         trigger: item,

//         start: "top center",

//         end: "bottom center",

//         onEnter: () => {

//             gsap.to(item, {

//                 scale: 1.03,
//                 duration: .3

//             });

//         },

//         onLeave: () => {

//             gsap.to(item, {

//                 scale: 1,
//                 duration: .3

//             });

//         },

//         onEnterBack: () => {

//             gsap.to(item, {

//                 scale: 1.03,
//                 duration: .3

//             });

//         },

//         onLeaveBack: () => {

//             gsap.to(item, {

//                 scale: 1,
//                 duration: .3

//             });

//         }

//     });

// });

// // =======================================
// // PROJECTS GSAP PREMIUM ANIMATION
// // =======================================

// gsap.registerPlugin(ScrollTrigger);

// // Heading
// let projectHeading = gsap.timeline({

//     scrollTrigger: {
//         trigger: ".projects-heading",
//         start: "top 80%"
//     }

// });

// projectHeading

//     .from(".section-subtitle", {

//         y: 60,
//         opacity: 0,
//         duration: .8,
//         ease: "power4.out"

//     })

//     .from(".section-title", {

//         y: 80,
//         opacity: 0,
//         duration: 1,
//         ease: "power4.out"

//     }, "-=.4")

//     .from(".section-description", {

//         y: 40,
//         opacity: 0,
//         duration: .8

//     }, "-=.6");


// // =======================================
// // EACH PROJECT CARD
// // =======================================

// gsap.utils.toArray(".project-card").forEach((card, index) => {

//     const img = card.querySelector("img");
//     const title = card.querySelector("h3");
//     const para = card.querySelector("p");
//     const tech = card.querySelectorAll(".project-tech span");
//     const buttons = card.querySelectorAll(".project-buttons a");
//     const number = card.querySelector(".project-number");

//     let tl = gsap.timeline({

//         scrollTrigger: {
//             trigger: card,
//             start: "top 78%",
//             end: "bottom 40%",
//             toggleActions: "play none none reverse"
//         }

//     });

//     tl

//         // Card Reveal
//         .from(card, {

//             y: 180,
//             opacity: 0,
//             rotateX: 25,
//             duration: 1.2,
//             ease: "power4.out"

//         })

//         // Image Reveal
//         .from(img, {

//             scale: 1.4,
//             duration: 1.3,
//             ease: "power4.out"

//         }, "-=1")

//         // Huge Number
//         .from(number, {

//             scale: 0,
//             opacity: 0,
//             rotation: 180,
//             duration: 1,
//             ease: "back.out(2)"

//         }, "-=1")

//         // Title
//         .from(title, {

//             y: 50,
//             opacity: 0,
//             duration: .7

//         }, "-=.8")

//         // Paragraph
//         .from(para, {

//             y: 40,
//             opacity: 0,
//             duration: .7

//         }, "-=.5")

//         // Tech Tags
//         .from(tech, {

//             y: 30,
//             opacity: 0,
//             stagger: .08,
//             duration: .5,
//             ease: "back.out(1.7)"

//         }, "-=.5")

//         // Buttons
//         .from(buttons, {

//             y: 30,
//             opacity: 0,
//             stagger: .12,
//             duration: .6

//         }, "-=.5");

// });


// // =======================================
// // IMAGE PARALLAX
// // =======================================

// gsap.utils.toArray(".project-image img").forEach(img => {

//     gsap.to(img, {

//         y: -60,

//         ease: "none",

//         scrollTrigger: {

//             trigger: img,

//             start: "top bottom",

//             end: "bottom top",

//             scrub: true

//         }

//     });

// });


// // =======================================
// // CARD HOVER 3D
// // =======================================

// document.querySelectorAll(".project-card").forEach(card => {

//     card.addEventListener("mousemove", (e) => {

//         const rect = card.getBoundingClientRect();

//         const x = e.clientX - rect.left;

//         const y = e.clientY - rect.top;

//         const rotateY = ((x / rect.width) - 0.5) * 18;

//         const rotateX = ((y / rect.height) - 0.5) * -18;

//         gsap.to(card, {

//             rotationY: rotateY,

//             rotationX: rotateX,

//             transformPerspective: 1200,

//             duration: .4,

//             ease: "power2.out"

//         });

//     });

//     card.addEventListener("mouseleave", () => {

//         gsap.to(card, {

//             rotationX: 0,

//             rotationY: 0,

//             duration: .5

//         });

//     });

// });


// // =======================================
// // FLOATING TAGS
// // =======================================

// gsap.to(".project-tech span", {

//     y: -6,

//     repeat: -1,

//     yoyo: true,

//     stagger: .12,

//     duration: 1.6,

//     ease: "sine.inOut"

// });


// // =======================================
// // BUTTON MAGNETIC EFFECT
// // =======================================

// document.querySelectorAll(".project-buttons a").forEach(btn => {

//     btn.addEventListener("mousemove", (e) => {

//         const rect = btn.getBoundingClientRect();

//         const x = e.clientX - rect.left - rect.width / 2;

//         const y = e.clientY - rect.top - rect.height / 2;

//         gsap.to(btn, {

//             x: x * .25,

//             y: y * .25,

//             duration: .3

//         });

//     });

//     btn.addEventListener("mouseleave", () => {

//         gsap.to(btn, {

//             x: 0,

//             y: 0,

//             duration: .3

//         });

//     });

// });


// // =======================================
// // PROJECT NUMBER FLOAT
// // =======================================

// gsap.to(".project-number", {

//     y: -20,

//     repeat: -1,

//     yoyo: true,

//     duration: 2.5,

//     stagger: .4,

//     ease: "sine.inOut"

// });


// ==============================
// GSAP INITIALIZATION
// ==============================

gsap.registerPlugin(ScrollTrigger);

// Better performance
gsap.defaults({
    duration: 1,
    ease: "power3.out"
});

// Refresh after everything loads
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});
// ==============================
// HERO SECTION
// ==============================

const heroTL = gsap.timeline();

heroTL
.from("header", {
    y: -100,
    opacity: 0,
    duration: 1
})

.from(".logo", {
    x: -60,
    opacity: 0
}, "-=.6")

.from("nav ul li", {
    y: -25,
    opacity: 0,
    stagger: .08
}, "-=.6")

.from(".image-frame", {
    x: -120,
    opacity: 0,
    scale: .8,
    rotate: -8,
    duration: 1.4
}, "-=.3")

.from(".hero-right h1", {
    x: 80,
    opacity: 0
}, "-=1")

.from(".profession-container", {
    y: 40,
    opacity: 0
}, "-=.5")

.from(".description", {
    y: 30,
    opacity: 0
}, "-=.4")

// .from(".social-icons a", {
//     y: 30,
//     opacity: 0,
//     stagger: .1
// }, "-=.3")

// .from(".btn-download", {
//     scale: .9,
//     opacity: 0,
//     ease: "back.out(1.7)"
// }, "-=.4");
// Social Icons
gsap.fromTo(
    ".social-icons a",
    {
        opacity: 0,
        y: 30
    },
    {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        delay: 1.4,
        ease: "power3.out"
    }
);

// Download Button
gsap.fromTo(
    ".btn-download",
    {
        opacity: 0,
        scale: 0.9
    },
    {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 1.8,
        ease: "back.out(1.7)"
    }
);

gsap.to(".image-frame", {
    y: -15,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut"
});
ScrollTrigger.create({

    start:50,

    onUpdate:self=>{

        gsap.to("header",{

            backdropFilter:self.progress>0
            ?"blur(15px)"
            :"blur(0px)",

            background:self.progress>0
            ?"rgba(255,255,255,.2)"
            :"transparent",

            duration:.3

        });

    }

});
// ======================================
// ABOUT SECTION
// ======================================

const aboutTL = gsap.timeline({

    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
        once: true
    }

});

aboutTL

.from(".about-image-wrapper", {

    x: -120,
    opacity: 0,
    scale: .8,
    rotate: -6,
    duration: 1.2

})

.from(".about-image-accent", {

    scale: 0,
    rotation: 180,
    duration: .8,
    ease: "back.out(2)"

}, "-=.8")

.from(".sub-heading", {

    y: 40,
    opacity: 0

}, "-=.5")

.from(".about-right h2", {

    y: 50,
    opacity: 0

}, "-=.4")

.from(".about-description", {

    y: 30,
    opacity: 0,
    stagger: .2

}, "-=.4")

.from(".skills-block h3", {

    x: -40,
    opacity: 0

}, "-=.4");


// ======================================
// SKILLS CARDS
// ======================================

gsap.utils.toArray(".skill-tag").forEach((card) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true
        },

        y: 50,
        opacity: 0,
        scale: .85,
        duration: .6,
        ease: "back.out(1.5)"

    });

});


// ======================================
// ABOUT IMAGE FLOAT
// ======================================

gsap.to(".about-image-wrapper", {

    y: -12,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut"

});


// ======================================
// IMAGE HOVER
// ======================================

const aboutImg = document.querySelector(".about-image-wrapper");

if (aboutImg) {

    aboutImg.addEventListener("mousemove", (e) => {

        const rect = aboutImg.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - .5) * 10;
        const rotateX = ((y / rect.height) - .5) * -10;

        gsap.to(aboutImg, {

            rotationY: rotateY,
            rotationX: rotateX,
            transformPerspective: 1000,
            duration: .4

        });

    });

    aboutImg.addEventListener("mouseleave", () => {

        gsap.to(aboutImg, {

            rotationX: 0,
            rotationY: 0,
            duration: .5

        });

    });

}


// ======================================
// SKILL CARD HOVER
// ======================================

document.querySelectorAll(".skill-tag").forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {

            y: -10,
            scale: 1.05,
            duration: .3

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            y: 0,
            scale: 1,
            duration: .3

        });

    });

});


// ======================================
// EDUCATION SECTION
// ======================================

// Section Title
const educationTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".education-section",
        start: "top 75%",
        once: true
    }
});

educationTL
.from(".education-section .section-title h2", {
    y: 60,
    opacity: 0
})
.from(".education-section .section-title p", {
    y: 30,
    opacity: 0
}, "-=0.5");


// ======================================
// TIMELINE LINE
// ======================================

gsap.from(".timeline-line", {

    scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1
    },

    scaleY: 0,
    transformOrigin: "top center",
    ease: "none"

});


// ======================================
// LEFT CARDS
// ======================================

gsap.utils.toArray(".left-item").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true
        },

        x: -120,
        opacity: 0,
        rotate: -5,
        duration: 1

    });

});


// ======================================
// RIGHT CARDS
// ======================================

gsap.utils.toArray(".right-item").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true
        },

        x: 120,
        opacity: 0,
        rotate: 5,
        duration: 1

    });

});


// ======================================
// TIMELINE DOTS
// ======================================

gsap.utils.toArray(".timeline-dot").forEach(dot => {

    gsap.from(dot, {

        scrollTrigger: {
            trigger: dot,
            start: "top 90%",
            once: true
        },

        scale: 0,
        rotation: 360,
        duration: .7,
        ease: "back.out(2)"

    });

});


// ======================================
// DATE TAG
// ======================================

gsap.utils.toArray(".date-tag").forEach(tag => {

    gsap.from(tag, {

        scrollTrigger: {
            trigger: tag,
            start: "top 90%",
            once: true
        },

        y: -20,
        opacity: 0,
        duration: .6

    });

});


// ======================================
// CARD CONTENT
// ======================================

gsap.utils.toArray(".timeline-content").forEach(content => {

    const title = content.querySelector("h3");
    const institute = content.querySelector(".institution");
    const para = content.querySelector("p");

    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: content,
            start: "top 88%",
            once: true
        }

    });

    tl

    .from(title, {

        y: 25,
        opacity: 0

    })

    .from(institute, {

        y: 20,
        opacity: 0

    }, "-=.3")

    .from(para, {

        y: 20,
        opacity: 0

    }, "-=.3");

});


// ======================================
// FLOATING DOTS
// ======================================

gsap.to(".timeline-dot", {

    y: -5,
    repeat: -1,
    yoyo: true,
    stagger: .2,
    duration: 1.5,
    ease: "sine.inOut"

});


// ======================================
// CARD HOVER
// ======================================

document.querySelectorAll(".timeline-content").forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {

            y: -8,
            scale: 1.03,
            duration: .3

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            y: 0,
            scale: 1,
            duration: .3

        });

    });

});


// ======================================
// ACTIVE CARD EFFECT
// ======================================

gsap.utils.toArray(".timeline-item").forEach(item => {

    ScrollTrigger.create({

        trigger: item,
        start: "top center",
        end: "bottom center",

        onEnter: () => {

            gsap.to(item, {
                scale: 1.02,
                duration: .3
            });

        },

        onLeave: () => {

            gsap.to(item, {
                scale: 1,
                duration: .3
            });

        },

        onEnterBack: () => {

            gsap.to(item, {
                scale: 1.02,
                duration: .3
            });

        },

        onLeaveBack: () => {

            gsap.to(item, {
                scale: 1,
                duration: .3
            });

        }

    });

});


// ======================================
// PROJECTS HEADING
// ======================================

const projectsHeadingTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects-section",
        start: "top 75%",
        once: true
    }
});

projectsHeadingTL

.fromTo(".projects-heading .section-subtitle",
{
    y:40,
    opacity:0
},
{
    y:0,
    opacity:1,
    duration:.8
})

.fromTo(".projects-heading .section-title",
{
    y:60,
    opacity:0
},
{
    y:0,
    opacity:1,
    duration:1
},"-=.5")

.fromTo(".projects-heading .section-description",
{
    y:30,
    opacity:0
},
{
    y:0,
    opacity:1,
    duration:.8
},"-=.5");

// ======================================
// PROJECT CARDS
// ======================================

gsap.utils.toArray(".project-card").forEach((card) => {

    gsap.fromTo(card,

    {
        opacity:0,
        y:120,
        scale:.92
    },

    {
        opacity:1,
        y:0,
        scale:1,
        duration:1,
        ease:"power4.out",

        scrollTrigger:{
            trigger:card,
            start:"top 82%",
            once:true
        }

    });

});

gsap.utils.toArray(".project-image img").forEach(img=>{

    gsap.fromTo(img,

    {
        scale:1.25
    },

    {
        scale:1,
        duration:1.6,
        ease:"power3.out",

        scrollTrigger:{
            trigger:img,
            start:"top 85%",
            once:true
        }

    });

});

gsap.utils.toArray(".project-content").forEach(content=>{

    const tl=gsap.timeline({

        scrollTrigger:{
            trigger:content,
            start:"top 85%",
            once:true
        }

    });

    tl

    .fromTo(content.querySelector(".project-number"),

    {
        scale:0,
        opacity:0
    },

    {
        scale:1,
        opacity:1,
        duration:.7,
        ease:"back.out(2)"
    })

    .fromTo(content.querySelector("h3"),

    {
        y:30,
        opacity:0
    },

    {
        y:0,
        opacity:1,
        duration:.6
    })

    .fromTo(content.querySelector("p"),

    {
        y:25,
        opacity:0
    },

    {
        y:0,
        opacity:1,
        duration:.6
    },"-=.3")

    .fromTo(content.querySelectorAll(".project-tech span"),

    {
        y:20,
        opacity:0
    },

    {
        y:0,
        opacity:1,
        stagger:.08,
        duration:.4
    },"-=.3")

    .fromTo(content.querySelectorAll(".project-buttons a"),

    {
        y:20,
        opacity:0
    },

    {
        y:0,
        opacity:1,
        stagger:.1,
        duration:.5
    },"-=.2");

});
gsap.to(".project-image",{

    y:-10,

    repeat:-1,

    yoyo:true,

    duration:3,

    stagger:.3,

    ease:"sine.inOut"

});

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        gsap.to(card,{

            y:-12,
            scale:1.02,
            duration:.35,
            ease:"power2.out"

        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{

            y:0,
            scale:1,
            duration:.35

        });

    });

});

// ======================================
// CONTACT SECTION
// ======================================

const contactTL = gsap.timeline({

    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%",
        once: true
    }

});

// Form Panel
contactTL.fromTo(".form-panel-v2",

{
    opacity:0,
    x:-120,
    rotateY:-15
},

{
    opacity:1,
    x:0,
    rotateY:0,
    duration:1,
    ease:"power4.out"
})


// Info Sidebar
.fromTo(".info-sidebar-v2",

{
    opacity:0,
    x:120,
    rotateY:15
},

{
    opacity:1,
    x:0,
    rotateY:0,
    duration:1
},"-=.8");


// ======================================
// FORM TITLE
// ======================================

gsap.fromTo(".panel-title",

{
    opacity:0,
    y:40
},

{
    opacity:1,
    y:0,
    duration:.8,

    scrollTrigger:{
        trigger:".panel-title",
        start:"top 85%",
        once:true
    }

});


// ======================================
// FORM INPUTS
// ======================================

gsap.utils.toArray(".form-group-v2").forEach((field)=>{

    gsap.fromTo(field,

    {
        opacity:0,
        y:35
    },

    {
        opacity:1,
        y:0,
        duration:.6,

        scrollTrigger:{
            trigger:field,
            start:"top 90%",
            once:true
        }

    });

});


// ======================================
// SUBMIT BUTTON
// ======================================

gsap.fromTo(".btn-submit-v2",

{
    opacity:0,
    scale:.8
},

{
    opacity:1,
    scale:1,
    duration:.7,
    ease:"back.out(1.7)",

    scrollTrigger:{
        trigger:".btn-submit-v2",
        start:"top 90%",
        once:true
    }

});


// ======================================
// INFO CARDS
// ======================================

gsap.utils.toArray(".info-card-v2,.promo-card-v2").forEach((card,index)=>{

    gsap.fromTo(card,

    {
        opacity:0,
        x:80,
        scale:.92
    },

    {
        opacity:1,
        x:0,
        scale:1,
        duration:.9,
        delay:index*.15,

        scrollTrigger:{
            trigger:card,
            start:"top 85%",
            once:true
        }

    });

});


// ======================================
// INFO ITEMS
// ======================================

gsap.utils.toArray(".info-item-v2").forEach((item,index)=>{

    gsap.fromTo(item,

    {
        opacity:0,
        x:30
    },

    {
        opacity:1,
        x:0,
        duration:.5,
        delay:index*.1,

        scrollTrigger:{
            trigger:item,
            start:"top 90%",
            once:true
        }

    });

});


// ======================================
// ICON FLOATING
// ======================================

gsap.to(".icon-circle-v2",{

    y:-6,
    repeat:-1,
    yoyo:true,
    stagger:.15,
    duration:1.8,
    ease:"sine.inOut"

});


// ======================================
// HOVER EFFECTS
// ======================================

document.querySelectorAll(".info-card-v2,.promo-card-v2").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        gsap.to(card,{

            y:-10,
            scale:1.02,
            duration:.3,
            ease:"power2.out"

        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{

            y:0,
            scale:1,
            duration:.3

        });

    });

});


// ======================================
// INPUT FOCUS ANIMATION
// ======================================

document.querySelectorAll(".form-group-v2 input,.form-group-v2 textarea").forEach(input=>{

    input.addEventListener("focus",()=>{

        gsap.to(input,{

            scale:1.02,
            duration:.2

        });

    });

    input.addEventListener("blur",()=>{

        gsap.to(input,{

            scale:1,
            duration:.2

        });

    });

});


// ======================================
// BUTTON HOVER
// ======================================

document.querySelectorAll(".btn-submit-v2,.btn-hire-v2").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        gsap.to(btn,{

            scale:1.06,
            y:-3,
            duration:.3

        });

    });

    btn.addEventListener("mouseleave",()=>{

        gsap.to(btn,{

            scale:1,
            y:0,
            duration:.3

        });

    });

});