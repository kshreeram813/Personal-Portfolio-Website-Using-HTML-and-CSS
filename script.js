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
