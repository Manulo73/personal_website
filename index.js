// HTML element declaration

// Sections
const aboutMeSection = document.getElementById("about-me-section"), projectsSection = document.getElementById("projects-section"), skillsSection = document.getElementById("skills-section"), contactSection = document.getElementById("contact-section");

// Header y Nav Btns
const aboutMeBtn = document.getElementById("about-me-btn"), projectsBtn = document.getElementById("project-btn"), skillsBtn = document.getElementById("skills-btn"), contactBtn = document.getElementById("contact-btn"), titleDesc = document.getElementById("title-desc");

// HTML elements inside About Me Section
const aboutMeTitleText = document.getElementById("about-me-title-text"), aboutMeDesc = document.getElementById("about-me-desc"), aboutMeLiOne = document.getElementById("about-me-li-one"), aboutMeLiTwo = document.getElementById("about-me-li-two"), aboutMeLiThree = document.getElementById("about-me-li-three");

// HTML elements inside Projects Section
const projectOneTitle = document.getElementById("project-article-title-one"), projectOneDesc = document.getElementById("project-article-desc-one"), projectTwoTitle = document.getElementById("project-article-title-two"), projectTwoDesc = document.getElementById("project-article-desc-two"), projectThreeTitle = document.getElementById("project-article-title-three"), projectThreeDesc = document.getElementById("project-article-desc-three");

// HTML elements inside Skills Section
const skillsTitleOne = document.getElementById("skills-title-one"), skillsLiOneOne = document.getElementById("skills-li-one-one"), skillsLiOneTwo = document.getElementById("skills-li-one-two"), skillsLiOneThree = document.getElementById("skills-li-one-three"), skillsLiOneFour = document.getElementById("skills-li-one-four"), skillsTitleTwo = document.getElementById("skills-title-two"), skillsLiTwoOne = document.getElementById("skills-li-two-one"), skillsLiTwoTwo = document.getElementById("skills-li-two-two"), skillsLiTwoThree = document.getElementById("skills-li-two-three"), skillsLiTwoFour = document.getElementById("skills-li-two-four");

// HTML elements inside Contact Section
const contactTitle = document.getElementById("contact-title"), contactEmail = document.getElementById("contact-email");

// HTML elements inside Language select
const languageSelect = document.getElementById("language-select");

// Text for webpage, in EN and ES
const webpageTextContent = {
    en: {
        header_title: "&lt;Web Developer and Learner /&gt;",
        header_about_me: "About Me",
        header_projects: "Projects",
        header_skills: "Skills",
        header_contact: "Contact",
        about_me_title: "About Me",
        about_me_desc: "Hello! I'm <b>Juan Romero</b>, a <b>web developer/programmer</b> fascinated by code and I’m currently studying Software Engineering. Important mentions are:",
        about_me_li_one: "Worked with HTML, CSS, JS, Python, C#, MySQL, etc.",
        about_me_li_two: "Speak Spanish and English fluently.",
        about_me_li_three: "Studying Software Engineering with 3 certificates, graduating in 2026.",
        projects_title_one: '<b class="primary-bold">Pricing</b> Benchmark <b class="primary-bold">Tool</b>',
        projects_desc_one: 'Web based application that uses Flask (Python) combined with webscrapping techniques to get the latest and real result of the searched product. <br />This was developed in a team of 5 members, with me, Juan Romero, being the lead programmer. HTML5, CSS, JavaScript (NodeJS) and Python (Flask/Pywebview/BS4) were used.',
        projects_title_two: 'Website <b class="primary-bold">Showcase</b>',
        projects_desc_two: 'Website highly influenced by Razer Inc’s website, made to practice and showcase website design skills.HTML5, CSS and JavaScript were used.',
        projects_title_three: '<b class="primary-bold">Floppy</b> Bird',
        projects_desc_three: 'Web based videogame made from cero in a web browser environment.<br />This was done to practice problem solving skills and JavaScript logic. Made with HTML5, CSS and JavaScript.',
        skills_tech_title: '<b class="primary-bold">Technical</b> Skills',
        skills_tech_li_one: 'Web-based programming languages, such as HTML5, CSS, JavaScript, and PHP.',
        skills_tech_li_two: 'Other programming languages, such as Python, C, C#, Java, and MySQL.',
        skills_tech_li_three: 'Use of tools like VS Code, MySQL Workbench, and Git.',
        skills_tech_li_four: 'Speaks Spanish (native) and English fluently.',
        skills_pers_title: '<b class="primary-bold">Personal</b> Skills',
        skills_pers_li_one: 'Teamwork and communication. Experienced presenting in teams to large groups.',
        skills_pers_li_two: 'Problem-solving.. Solved multiple LeetCode problems, personal and school projects.',
        skills_pers_li_three: 'Adaptability. Adapted to new tools such as the use of AI in coding.',
        skills_pers_li_four: 'Fast learner!',
        contact_title: 'Contact',
        contact_email: '<b class="primary-bold">Email -</b> romerojuan.manulo@gmail.com',
    },
    es: {
        header_title: "&lt;Desarrollador Web y Estudiante /&gt;",
        header_about_me: "Sobre mí",
        header_projects: "Proyectos",
        header_skills: "Habilidades",
        header_contact: "Contacto",
        about_me_title: "Sobre mí",
        about_me_desc: "Hola! Soy <b>Juan Romero</b>, un <b>desarrollador web/programador</b> fascinado por codigo y estoy actualmente estudiando ingeniería en desarrollo de software. Menciones importantes:",
        about_me_li_one: "Trabajado con HTML, CSS, JS, Python, C#, MySQL, etc.",
        about_me_li_two: "Hablo fluido español e inglés.",
        about_me_li_three: "Estudiando ingeniería en desarrollo de software con 3 certificados, graduándome en 2026.",
        projects_title_one: '<b class="primary-bold">Pricing</b> Benchmark <b class="primary-bold">Tool</b>',
        projects_desc_one: 'Aplicación web que usa Flask (Python) combinado con técnicas de “webscrapping” para obtener los resultados mas reales y actualizados del producto buscado. <br />Desarrollado en un equipo de 5 miembros. HTML5, CSS, JavaScript (NodeJS) y Python (Flask/Pywebview/BS4) fueron usados.',
        projects_title_two: 'Website <b class="primary-bold">Showcase</b>',
        projects_desc_two: 'Pagina web basada en la compañía Razer Inc, echo para demostrar y practicar mis habilidades de diseño web. HTML5, CSS y JavaScript fueron usados.',
        projects_title_three: '<b class="primary-bold">Floppy</b> Bird',
        projects_desc_three: 'Videojuego web echo desde cero en un ambiente de un buscador web.<br />Echo para practicar mi resolución de problemas y lógica de JavaScript. Echo con HTML5, CSS and JavaScript.',
        skills_tech_title: '<b class="primary-bold">Habilidades</b> Técnicas',
        skills_tech_li_one: 'Lenguajes de programación para web como HTML5, CSS, JavaScript, y PHP.',
        skills_tech_li_two: 'Otros lenguajes de programación, como Python, C, C#, Java, y MySQL.',
        skills_tech_li_three: 'Uso de herramientas tales como VS Code, MySQL Workbench, y Git.',
        skills_tech_li_four: 'Hablo español (nativo) e ingles fluido.',
        skills_pers_title: '<b class="primary-bold">Habilidades</b> Personales',
        skills_pers_li_one: 'Trabajo en equipo y comunicación. Con experiencia exponiendo a grupos grandes en equipo.',
        skills_pers_li_two: 'Resolución de problemas. He resuelto problemas de LeetCode, personales y de escuela.',
        skills_pers_li_three: 'Adaptabilidad. Adaptado a nuevas herramientas tales como la IA en programación.',
        skills_pers_li_four: 'Aprendo rápido!',
        contact_title: 'Contacto',
        contact_email: '<b class="primary-bold">Correo -</b> romerojuan.manulo@gmail.com',
    }
};

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

// Change language when loaded
document.addEventListener('DOMContentLoaded', function () {
    changeLanguage(loadLanguage());
});

// When the <select> tag for the language changes value we change the language of the page
languageSelect.addEventListener("change", (event) => {
    changeLanguage(event.target.value);
});

// To check the language to change to
function changeLanguage(lan) {
    switch (lan) {
        case "en":
            changeLanguageEN();
            break;
        case "es":
            changeLanguageES();
            break;
    }
}

// Change webpage's content to english
function changeLanguageEN() {
    // Header
    titleDesc.innerHTML = webpageTextContent.en.header_title;
    aboutMeBtn.innerHTML = webpageTextContent.en.header_about_me;
    projectsBtn.innerHTML = webpageTextContent.en.header_projects;
    skillsBtn.innerHTML = webpageTextContent.en.header_skills;
    contactBtn.innerHTML = webpageTextContent.en.header_contact;
    // About Me Section
    aboutMeTitleText.innerHTML = webpageTextContent.en.about_me_title;
    aboutMeDesc.innerHTML = webpageTextContent.en.about_me_desc;
    aboutMeLiOne.innerHTML = webpageTextContent.en.about_me_li_one;
    aboutMeLiTwo.innerHTML = webpageTextContent.en.about_me_li_two;
    aboutMeLiThree.innerHTML = webpageTextContent.en.about_me_li_three;
    // Project Section
    projectOneTitle.innerHTML = webpageTextContent.en.projects_title_one;
    projectOneDesc.innerHTML = webpageTextContent.en.projects_desc_one;
    projectTwoTitle.innerHTML = webpageTextContent.en.projects_title_two;
    projectTwoDesc.innerHTML = webpageTextContent.en.projects_desc_two;
    projectThreeTitle.innerHTML = webpageTextContent.en.projects_title_three;
    projectThreeDesc.innerHTML = webpageTextContent.en.projects_desc_three;
    // Skills Section
    skillsTitleOne.innerHTML = webpageTextContent.en.skills_tech_title;
    skillsLiOneOne.innerHTML = webpageTextContent.en.skills_tech_li_one;
    skillsLiOneTwo.innerHTML = webpageTextContent.en.skills_tech_li_two;
    skillsLiOneThree.innerHTML = webpageTextContent.en.skills_tech_li_three;
    skillsLiOneFour.innerHTML = webpageTextContent.en.skills_tech_li_four;
    skillsTitleTwo.innerHTML = webpageTextContent.en.skills_pers_title;
    skillsLiTwoOne.innerHTML = webpageTextContent.en.skills_pers_li_one;
    skillsLiTwoTwo.innerHTML = webpageTextContent.en.skills_pers_li_two;
    skillsLiTwoThree.innerHTML = webpageTextContent.en.skills_pers_li_three;
    skillsLiTwoFour.innerHTML = webpageTextContent.en.skills_pers_li_four;
    // Contact Section
    contactTitle.innerHTML = webpageTextContent.en.contact_title;
    contactEmail.innerHTML = webpageTextContent.en.contact_email;
    // Update local storage
    localStorage.setItem("lan", "en");
}

// Change webpage's content to spanish
function changeLanguageES() {
    // Header
    titleDesc.innerHTML = webpageTextContent.es.header_title;
    aboutMeBtn.innerHTML = webpageTextContent.es.header_about_me;
    projectsBtn.innerHTML = webpageTextContent.es.header_projects;
    skillsBtn.innerHTML = webpageTextContent.es.header_skills;
    contactBtn.innerHTML = webpageTextContent.es.header_contact;
    // About Me Section
    aboutMeTitleText.innerHTML = webpageTextContent.es.about_me_title;
    aboutMeDesc.innerHTML = webpageTextContent.es.about_me_desc;
    aboutMeLiOne.innerHTML = webpageTextContent.es.about_me_li_one;
    aboutMeLiTwo.innerHTML = webpageTextContent.es.about_me_li_two;
    aboutMeLiThree.innerHTML = webpageTextContent.es.about_me_li_three;
    // Project Section
    projectOneTitle.innerHTML = webpageTextContent.es.projects_title_one;
    projectOneDesc.innerHTML = webpageTextContent.es.projects_desc_one;
    projectTwoTitle.innerHTML = webpageTextContent.es.projects_title_two;
    projectTwoDesc.innerHTML = webpageTextContent.es.projects_desc_two;
    projectThreeTitle.innerHTML = webpageTextContent.es.projects_title_three;
    projectThreeDesc.innerHTML = webpageTextContent.es.projects_desc_three;
    // Skills Section
    skillsTitleOne.innerHTML = webpageTextContent.es.skills_tech_title;
    skillsLiOneOne.innerHTML = webpageTextContent.es.skills_tech_li_one;
    skillsLiOneTwo.innerHTML = webpageTextContent.es.skills_tech_li_two;
    skillsLiOneThree.innerHTML = webpageTextContent.es.skills_tech_li_three;
    skillsLiOneFour.innerHTML = webpageTextContent.es.skills_tech_li_four;
    skillsTitleTwo.innerHTML = webpageTextContent.es.skills_pers_title;
    skillsLiTwoOne.innerHTML = webpageTextContent.es.skills_pers_li_one;
    skillsLiTwoTwo.innerHTML = webpageTextContent.es.skills_pers_li_two;
    skillsLiTwoThree.innerHTML = webpageTextContent.es.skills_pers_li_three;
    skillsLiTwoFour.innerHTML = webpageTextContent.es.skills_pers_li_four;
    // Contact Section
    contactTitle.innerHTML = webpageTextContent.es.contact_title;
    contactEmail.innerHTML = webpageTextContent.es.contact_email;
    // Update local storage
    localStorage.setItem("lan", "es");
}

function loadLanguage() {
    let selectedLanguage = localStorage.getItem("lan");
    if (selectedLanguage == null) selectedLanguage = languageSelect.value;
    languageSelect.value = selectedLanguage;
    return selectedLanguage;
}