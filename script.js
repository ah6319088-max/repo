const navbar = document.querySelector(".nav-bar");
const bar = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humbrgerbar = document.querySelector(".humbrger-bar");

const navLinks = document.querySelectorAll(".nav-bar a");


humbrgerbar.addEventListener("click", () => {
    bar.classList.toggle("active");
    xmark.classList.toggle("active");
    navbar.classList.toggle("active");
});


navLinks.forEach(link => {
    link.addEventListener("click", () => {
        bar.classList.add("active");      // إعادة أيقونة الهامبرغر للظهور
        xmark.classList.remove("active");  // إخفاء أيقونة الإغلاق X
        navbar.classList.remove("active"); // إغلاق القائمة
    });
});