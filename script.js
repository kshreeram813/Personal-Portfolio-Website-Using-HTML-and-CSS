// Toggle Dark Theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Show Project Details
function showProject(id) {
    let projects = document.querySelectorAll('.project-details');
    projects.forEach(project => project.classList.remove('active'));

    document.getElementById(id).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function updateActiveLink() {
        let scrollPosition = window.scrollY + 100; // Offset for better accuracy

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => link.classList.remove("active")); // Remove previous active class
                document.querySelector(`nav a[href="#${section.id}"]`).classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
});
