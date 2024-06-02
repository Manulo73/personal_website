// HTML element declaration
// Sections
const aboutMeSection = document.getElementById("about-me-section"), projectsSection = document.getElementById("projects-section"), skillsSection = document.getElementById("skills-section"), contactSection = document.getElementById("contact-section");
// Nav Btns
const aboutMeBtn = document.getElementById("about-me-btn"), projectsBtn = document.getElementById("project-btn"), skillsBtn = document.getElementById("skills-btn"), contactBtn = document.getElementById("contact-btn");

// Nav Btn presses
aboutMeBtn.addEventListener("click", function () {
    aboutMeSection.scrollIntoView();
});

projectsBtn.addEventListener("click", function () {
    projectsSection.scrollIntoView();
});

skillsBtn.addEventListener("click", function () {
    skillsSection.scrollIntoView();
});

contactBtn.addEventListener("click", function () {
    contactSection.scrollIntoView();
});

// Hidden Class (Animations)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenItems = document.querySelectorAll('.hidden');
hiddenItems.forEach((el) => observer.observe(el));