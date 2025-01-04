document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    const navLinks = document.querySelectorAll("header a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add dynamic greeting to hero section
    const hero = document.querySelector(".hero");
    const greetings = ["Welcome!", "Hello, Shopper!", "Discover Your Favorites!"];
    let index = 0;
    setInterval(() => {
        hero.textContent = greetings[index];
        index = (index + 1) % greetings.length;
    }, 3000);
});