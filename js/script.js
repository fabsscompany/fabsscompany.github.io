// Inisialisasi AOS (Animasi Saat Scroll)
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800,  // Durasi animasi dalam milidetik
        once: true,     // Animasi hanya berjalan sekali saat muncul
    });
});

// // Navbar berubah warna saat scroll
// window.addEventListener("scroll", function () {
//     let navbar = document.querySelector(".navbar");
//     if (window.scrollY > 50) {
//         navbar.style.backgroundColor = "#16325b"; // Warna saat scroll
//         navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)"; // Efek bayangan
//         navbar.style.transition = "0.3s";
//     } else {
//         navbar.style.backgroundColor = "transparent"; // Kembali transparan
//         navbar.style.boxShadow = "none";
//     }
// });

// Efek hover untuk tombol
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("mouseover", function () {
        btn.style.transform = "scale(1.1)";
        btn.style.transition = "0.2s ease-in-out";
    });

    btn.addEventListener("mouseout", function () {
        btn.style.transform = "scale(1)";
    });
});

// Efek smooth scroll untuk semua link dengan href #
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Sesuaikan offset jika ada navbar
                behavior: "smooth",
            });
        }
    });
});

// Animasi muncul saat scroll menggunakan Intersection Observer
let fadeElements = document.querySelectorAll(".fade-in");

let observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

fadeElements.forEach((el) => observer.observe(el));
// Inisialisasi GSAP
gsap.registerPlugin(ScrollTrigger);

// Animasi muncul saat scroll
gsap.from(".fade-in", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".fade-in",
        start: "top 80%",
        toggleActions: "play none none none",
    }
});

// Efek hover tombol dengan skew dan shadow
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("mouseover", function () {
        gsap.to(btn, { scale: 1.1, skewX: 5, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)", duration: 0.2 });
    });

    btn.addEventListener("mouseout", function () {
        gsap.to(btn, { scale: 1, skewX: 0, boxShadow: "none", duration: 0.2 });
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     AOS.init({
//         duration: 800,  // Durasi animasi
//         once: true,     // Animasi hanya sekali saat muncul
//         easing: "ease-in-out",
//     });
// });

