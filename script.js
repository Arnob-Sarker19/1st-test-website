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
    const greetings = ["Welcome!", "Hello, Shopper!", "Discover Your Favorites Easy!"];
    let index = 0;
    setInterval(() => {
        hero.textContent = greetings[index];
        index = (index + 1) % greetings.length;
    }, 3000);
});

// Make the favicon circular using JavaScript
window.addEventListener("load", () => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
        favicon.setAttribute("type", "image/svg+xml");
        favicon.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><circle cx='16' cy='16' r='16' fill='%23ff758c'/></svg>`;
    }
});