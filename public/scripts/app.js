document.addEventListener("DOMContentLoaded", () => {
    const toggleTheme = document.querySelector(".theme");
    const themeIcon = document.querySelector(".theme-icon");
    const blur = document.querySelectorAll(".blur");
    const popup = document.querySelector("#popup");
    const btn = document.querySelector(".info-btn");
    const backBtn = document.querySelector(".back-btn");

    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        themeIcon.classList.toggle("fa-moon");
        themeIcon.classList.toggle("fa-sun");
    });


    btn.addEventListener("click", () => {
        blur.forEach(element => {
            element.classList.toggle("active");
        });
        popup.classList.toggle("active");
    });

    backBtn.addEventListener("click", () => {
        blur.forEach(element => {
            element.classList.toggle("active");
        });
        popup.classList.toggle("active");
    });
});

