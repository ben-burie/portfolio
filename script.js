const portfolioData = {
    name: "Ben Burie",
    tagline: "Computer Science Student | Aspring Software Engineer | Milwaukee, WI",
    contact: {
        email: "benburie22@gmail.com",
        linkedin: "https://www.linkedin.com/in/ben-burie-2a33a6292/",
        github: "https://github.com/ben-burie"
    },
    about: `I am an undergraduate student at the University of Wisconsin-Whitewater pursuing a B.S. in Computer Science with a minor in Data Science. 
            Additionally, I work as an IT Application Development Intern at WEC Energy Group in Milwaukee, WI on the ERP Applications team. I also participate in undergraduate research, 
            working on a project to optimize the accuracy of a deep-learning voice command recognition software system.
            I have experience in back-end software development, cloud platform integrations, artificial intelligence, machine learning, and data analysis.`,
    education: [
        {
            school: "University of Wisconsin-Whitewater",
            degree: "Bachelor of Science in Computer Science | Minor in Data Science",
            year: "Sep 2023 - Dec 2026",
            gpa: "3.9/4.0",
            courses: [
                "Java Programming",
                "Python Programming",
                "Data Structures",
                "Theory of Algorithms",
                "Database Design",
                "SQL Programming",
                "Embedded Systems",
                "JavaScript & DHTML",
                "Machine Learning",
                "Data Science",
                "Software Engineering",
                "Applied Statistics"
            ]
        }
    ],
    experience: [
        {
            company: "WEC Energy Group",
            role: "IT Application Development Intern",
            start: "May 2025",
            end: "Present",
            location: "Milwaukee, WI",
            summary: "Utilizing the SAP ERP system to develop software solutions that support the needs of the human resources and plant maintenance departments at WEC Energy Group.",
            projectHeader: "",
            technologies: ["SAP", "SAP BTP", "ABAP", "SQL", "SOAP API", "SFTP", "Cloud Integration", "Groovy", "Unit Testing"]
        },
        {
            company: "University of Wisconsin-Whitewater",
            role: "Undergraduate Reserach - Software Developer",
            start: "May 2025",
            end: "Present",
            location: "Whitewater, WI",
            summary: "Working under the guidance of Dr. Hairi, Assiatant Professor of Computer Science, to optimize a voice command system using a deep learning neural network.",
            projectHeader: "<a href='https://github.com/ben-burie/voice-command-system-optimization' target='_blank'>Title: Optimizing the Efficiency and Accuracy of a Voice Command Recognition System</a>",
            details: [
                "Investigating and learning Conformer deep-learning architecture and its implementation for voice command recognition.",
                "Designing Python batch testing scripts to evaluate model accuracy at scale and analyzing performance bottlenecks to improve system runtime efficiency.",
                "Executing training audio signal generation in Google Colab and analyzing runtime performance.",
                "Implemented solutions to improve command recognition accuracy by 13% thus far.",
                "2025-26 UW-W URP Seed Grant Winner, Fall 2025 Undergraduate Research Fair Presenter"
            ],
            technologies: ["Artificial Intelligence", "Python", "Conformer", "Google Colab", "Deep Learning", "BarkAI", "Software Testing"]
        },
        {
            company: "University of Wisconsin-Whitewater",
            role: "Teaching Assistant & Computer Science Tutor",
            start: "January 2025",
            end: "May 2025",
            location: "Whitewater, WI",
            summary: "Employed by UW-Whitewater's computer science department as a teaching assistant and tutor for intro-level programming courses.",
            projectHeader: "",
            details: [],
            technologies: ["Teaching", "Code Review", "Python", "Java"]
        }
    ],
    skills: [
        "Problem Solving",
        "User Communication",
        "Machine Learning",
        "Database Design",
        "API Development",
        "Cloud Integration",
        "Agile Development",
        "Artificial Intelligence",
        "Software Testing"
    ],
    technologies: [
        "JavaScript",
        "Python",
        "Java",
        "SQL",
        "React",
        "MySQL",
        "GitHub",
        "SAP",
        "SAP BTP",
        "Google Colab",
        "ABAP",
        "Groovy",
        "SOAP API",
        "SFTP"
    ],
    projects: [
        {
            image: "images/evchargemap.png",
            title: "EV ChargeMap",
            shortDescription: "Full-stack web application that assists electric vehicle drivers planning long road trips.",
            fullDescription: "Developed a full-stack system using Flask, MySQL, and modular Python APIs, with clean routing and frontend integration through JavaScript. Designed a normalized relational database and optimized queries (including geospatial lookups and indexing) to handle large EV and station datasets efficiently.",
            technologies: ["Python", "Flask", "MySQL"],
            features: [
                "Plan EV road trips effortlessly by entering a start and end location and instantly seeing charging stations along your route, complete with suggested stops based on your vehicle’s range.",
                "Personalize your experience with user accounts that let you add your own EVs, save trips, and revisit all your routes and charging stops anytime.",
                "Includes a smooth, map-based interface powered by real EV + charging-station data, delivering fast route calculations and clear visual station displays."
            ],
            github: "https://github.com/ben-burie/EVChargeMap",
            demo: "https://project1-demo.com"
        },
        {
            image: "images/trackrabbit.png",
            title: "TrackRabbit",
            shortDescription: "Physical device that allows runners to get real-time audio feedback on their pace when using an indoor track.",
            fullDescription: "The device uses a sensor input and an internal microcontroller to detect runner passage, calculate split times, and generate pace-based audio feedback. Its circuit board handles all timing logic, audio processing, and LCD output, with the internal wiring connecting the sensor, display, speaker, and power components.",
            technologies: ["C++", "Arduino"],
            features: [
                "The device detects when a runner passes the sensor and automatically records each split time.",
                "It gives audio feedback by announcing how many seconds ahead or behind the goal pace you are, helping you adjust effort in real time.",
                "A live timer and lap counter appears on the LCD screen, with the internal electronics handling the timing logic, sensor input, audio output, and display."
            ],
            github: "https://github.com/ben-burie/TrackRabbit",
            demo: "https://project2-demo.com"
        },
        {
            image: "images/stryde.svg",
            title: "Stryde - <i>In Progress</i>",
            shortDescription: "AI-powered running coach that gives insights, answers questions, and provides tracking capabilities.",
            fullDescription: "Runners can communicate with an AI-powered coach that uses the OpenAI API. Additionally, users can view their vdot score as its predicted by a custom-developed machine learning model.",
            technologies: ["Python", "ML", "OpenAI"],
            features: [
                "Coaching chatbot feature that lets runners ask personalized questions and returns answers based on the runner's training history.",
                "Detailed analytics display powered by a custom ML model allowing runners to get insights on their vdot score and other metrics."
            ],
            github: "https://github.com/benburie/project3",
            demo: null
        },
        {
            image: "images/mealmentor.svg",
            title: "Meal Mentor",
            shortDescription: "Web applcation that allows users to plan their weekly meals and grocery trips.",
            fullDescription: "The application uses JavaScript, DOM manipulation, local storage, and a 3,000-recipe JSON database to manage the kitchen list, grocery list, recipe planner, and recipe suggestions across multiple pages. It relies on functions, event handlers, and table/element generation in the DOM to add, remove, filter, and update data.",
            technologies: ["JavaScript", "HTML/CSS"],
            features: [
                "Users can add ingredients that they already have in their kitchen, and the app keeps that list saved in local storage for future use.",
                "Users pick recipes from a dropdown, and the app automatically builds a grocery list by comparing the recipe ingredients with what is already in the user's kitchen.",
                "Users can also discover recipes they can make right now, as the app only suggests dishes that require ingredients the user already has."
            ],
            github: "https://github.com/ben-burie/MealMentor",
            demo: null
        },
        {
            image: "images/bankportal.svg",
            title: "Bank Portal Simulation",
            shortDescription: "A simulated version of a banking application allowing users to mimic various baking transactions.",
            fullDescription: "Built with Java using strong object-oriented design principles.",
            technologies: ["Java"],
            features: [
                "Users can create accounts and login to their existing account.",
                "Users have the ability to simulate opening checking and savings accounts.",
                "The simulation supports deposits, withdrawls, and transfers between accounts."
            ],
            github: "https://github.com/ben-burie/BankPortalSimulation",
            demo: null
        },
        {
            image: "images/wordle.png",
            title: "Wordle Clone",
            shortDescription: "Re-creation of the popular game Wordle.",
            fullDescription: "Command-line interface version of Wordle built with Python.",
            technologies: ["Python"],
            features: [
                "Large 5-letter word bank containing over 2300 words.",
                "Includes score-tracking and a leaderboard."
            ],
            github: "https://github.com/Bruhmux/Wordle-CLI",
            demo: null
        }
    ],
    honors: [
        {
            title: "2025-26 UW-Whitewater Undergraduate Research Seed Grant",
            date: "November 2025",
            issuedBy: "UW-Whitewater Undergraduate Research Program"
        },
        {
            title: "UW-Whitewater Spring 2024 Programming Competition Champion",
            date: "April 2024",
            issuedBy: "UW-Whitewater Computer Science Department"
        },
        {
            title: "UW-Whitewater Deans List (4x)",
            date: "Fall 2023, Spring 2024, Fall 2025, Spring 2025",
            issuedBy: "UW-Whitewater"
        },
        {
            title: "Fall 2024 Outstanding Python Project Award",
            date: "December 2024",
            issuedBy: "Dr. Hairi, Assistant Professor of Computer Science"
        },
        {
            title: "2026 Boston Marathon Qualifier",
            date: "September 2025",
            issuedBy: "Boston Athletic Association"
        }
    ]
};

function renderPortfolio() {
    document.getElementById('name').textContent = portfolioData.name;
    document.getElementById('tagline').textContent = portfolioData.tagline;
    
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `
        <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a>
        <a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn</a>
        <a href="${portfolioData.contact.github}" target="_blank">GitHub</a>
        ${portfolioData.contact.website ? `<a href="https://${portfolioData.contact.website}" target="_blank">Website</a>` : ''}
    `;

    document.getElementById('about').textContent = portfolioData.about;

    const educationDiv = document.getElementById('education');
    educationDiv.innerHTML = portfolioData.education.map(edu => `
        <div class="education-item">
            <h3>${edu.school}</h3>
            <p><strong>${edu.degree}</strong></p>
            <p>${edu.year} ${edu.gpa ? `| GPA: ${edu.gpa}` : ''}</p>
            ${edu.courses ? `
            <h4 class="courses-title">Relevant Coursework</h4>
            <div class="courses-grid">
                ${edu.courses.map(course => `<div class="tech-item">${course}</div>`).join('')}
            </div>` : ''}
        </div>
    `).join('');

    const experienceDiv = document.getElementById('experience');
    if (experienceDiv) {
        experienceDiv.innerHTML = (portfolioData.experience || []).map(exp => `
            <div class="experience-item">
                <h3>${exp.role} <span class="at">@</span> <strong>${exp.company}</strong></h3>
                <p class="exp-meta"><strong>${exp.start}${exp.end ? ` — ${exp.end}` : ''}</strong> | ${exp.location}</p>
                <p class="exp-summary">${exp.summary}</p>
                <p class="exp-projectHeader">${exp.projectHeader}</p>
                ${exp.details && exp.details.length ? `<ul class="exp-details">${exp.details.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
                ${exp.technologies ? `
                    <h4 class="courses-title" style="margin-top: 20px;">Skills</h4>
                    <div class="project-tags" style="margin-top: 12px;">
                        ${exp.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `).join('');
    }

    const skillsDiv = document.getElementById('skills');
    skillsDiv.innerHTML = portfolioData.skills.map(skill => 
        `<div class="skill-item">${skill}</div>`
    ).join('');

    const techDiv = document.getElementById('technologies');
    techDiv.innerHTML = portfolioData.technologies.map(tech => 
        `<div class="tech-item">${tech}</div>`
    ).join('');

    const projectsDiv = document.getElementById('projects');
    projectsDiv.innerHTML = portfolioData.projects.map((project, index) => `
        <div class="project-card" onclick="openModal(${index})">
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title} screenshot" class="project-image">
            </div>
            <h3>${project.title}</h3>
            <p>${project.shortDescription}</p>
            <div class="project-tags">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');

    const honorsDiv = document.getElementById('honors');
    honorsDiv.innerHTML = portfolioData.honors.map((honor, index) => `
        <div class="honors-item">
            <h3>${honor.title}</h3>
            <p class="honors-meta"><strong>${honor.date}</strong> | ${honor.issuedBy}</p>
        </div>
    `).join('');
}

function openModal(projectIndex) {
    const project = portfolioData.projects[projectIndex];
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <span class="close-btn" onclick="closeModal()">&times;</span>
        ${project.image ? `\
        <img src="${project.image}" alt="${project.title} screenshot" class="modal-image">` : ''}
        <h3>${project.title}</h3>
        <div class="project-tags">
            ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
        </div>
        <div class="description">
            <p>${project.fullDescription}</p>
        </div>
        <div class="features">
            <h4>Key Features:</h4>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        <div class="project-links">
            ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">View on GitHub</a>` : ''}
            ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link">Live Demo</a>` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Smooth background fade towards blue as the user scrolls
;(function initScrollBackground() {
    const startHex = '#f4f6f8'; // initial --bg
    const endHex = '#e6f8ff';   // target soft blue at bottom

    function hexToRgb(hex) {
        const h = hex.replace('#','');
        return [parseInt(h.substring(0,2),16), parseInt(h.substring(2,4),16), parseInt(h.substring(4,6),16)];
    }

    function rgbToHex(r,g,b) {
        return '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('');
    }

    function lerp(a, b, t) { return Math.round(a + (b - a) * t); }

    const startRgb = hexToRgb(startHex);
    const endRgb = hexToRgb(endHex);

    let ticking = false;

    function updateBg() {
        const scroll = window.scrollY || window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const t = docHeight > 0 ? Math.min(1, scroll / docHeight) : 0;
        const r = lerp(startRgb[0], endRgb[0], t);
        const g = lerp(startRgb[1], endRgb[1], t);
        const b = lerp(startRgb[2], endRgb[2], t);
        const hex = rgbToHex(r,g,b);
        document.documentElement.style.setProperty('--bg', hex);
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(updateBg);
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // initialize on load
    updateBg();
})();

renderPortfolio();