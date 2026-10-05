// Welcome message
window.onload = function () {
    alert("Welcome to Nithyasree's Portfolio! 😊");
};


// Scroll animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {
    section.classList.add("hidden");
    observer.observe(section);
});