const portfolioData = {
    name: "Ben Burie",
    tagline: "Computer Science Student | Aspring Software Engineer | Milwaukee, WI",
    contact: {
        email: "benburie22@gmail.com",
        linkedin: "https://www.linkedin.com/in/ben-burie-2a33a6292/",
        github: "https://github.com/ben-burie"
    },
    about: "I am an undergraduate student at the University of Wisconsin-Whitewater pursuing a BS in Computer Science with a minor in Data Science. Additionally, I work as an IT Application Development Intern at WEC Energy Group in Milwaukee, WI on the ERP Applications team. I have experience in back-end software development, cloud platform integrations, machine learning, and data analysis.",
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
                "Embedded Systems",
                "JavaScript & DHTML",
                "Machine Learning",
                "Data Science",
                "Software Engineering"
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
            projectHeader: "Project: Built an application and integration flow that transmits employee premium medical benefit data to a cloud vendor.",       
            details: [
                "Engineered an application in <span class=blue>SAP</span> using <span class=blue>ABAP</span> programming that allows for automatic extraction and preparation of employee PMA data with a selection screen for filtering capabilities.",
                "Constructed an integration flow in <span class=blue>SAP Business Technology Platform</span> used to transmit the data files from the on-premise database to the cloud vendor using <span class=blue>SOAP API</span> and <span class=blue>SFTP.</span>",
                "Developed <span class=blue>Groovy</span> scripts to modify parts of the output file to ensure it included all details required by the vendor.",
                "Conducted quality testing to ensure the proper data was being gathered and received by the vendor as expected."
            ],
            projectHeader2: "Project: Modified an existing application to allow for automatic location premium additions to employee step-up jobs.",
            details2: [
                "Utilized <span class=blue>ABAP</span> object-oriented programming to develop functionality to convert the previously manual process of adding location premiums to employees step up wages to an automatic process.",
                "Devised accurate <span class=blue>SQL</span> queries to gather applicable information from the database during development.",
                "Communicated with internal users to ensure all necessary features were included.",
                "Performed thorough <span class=blue>unit testing</span> and <span class=blue>code review</span> to verify the solution was working as intended, and followed all company development standards."
            ]
        },
        {
            company: "University of Wisconsin-Whitewater",
            role: "Undergraduate Reserach - Software Developer",
            start: "May 2025",
            end: "Present",
            location: "Whitewater, WI",
            summary: "Working under the guideance of Dr. Hairi, Assiatant Professor of Computer Science, to optimize a voice command system using a deep learning neural network.",
            projectHeader: "Title: Optimizing the Efficiency and Accuracy of a Voice Command Recognition System",
            details: [
                "Investigating and learning the <span class=blue>Conformer</span> deep-learning architecture and its implementation for voice command recognition.",
                "Designing <span class=blue>Python</span> batch testing scripts to evaluate model accuracy at scale and analyzing performance bottlenecks to improve system runtime efficiency.",
                "Executing training audio signal generation in <span class=blue>Google Colab</span> and analyzing runtime performance.",
                "Implemented improvements to improve command recognition accuracy by <span class=blue>13%</span> thus far."
            ],
            projectHeader2: "Abstract:",
            details2: [
                "We aim to expand upon a voice command prototype that allows users to speak commands to get their computer to perform certain actions (e.g. “Create new Word Document”). It is built upon the Conformer deep-learning architecture. The goal of this research is to expand upon and optimize the voice command recognition software in terms of latency and accuracy. The current implementation results in a moderate (60-70%) recognition accuracy benchmark. This research aims to improve this metric by augmenting the training audio data made using a generative AI model called BarkAI, experimenting with varying sizes of training data, modifying Conformer model hyper-parameters, and ensuring input audio is clean and high quality. Ultimately, we can visualize a future where improvements to this voice command recognition system could assist users with disabilities that impact their ability to use traditional keyboard and mouse interfaces."
            ]
        }
    ],
    skills: [
        "Problem Solving",
        "Algorithm Design",
        "System Design",
        "Database Design",
        "API Development",
        "Agile Development"
    ],
    technologies: [
        "JavaScript",
        "Python",
        "React",
        "Node.js",
        "SQL",
        "MongoDB",
        "Git",
        "Docker"
    ],
    projects: [
        {
            image: "images/evchargemap.png",
            title: "EV ChargeMap",
            shortDescription: "A brief one-line description",
            fullDescription: "This is a more detailed description of your project. Explain what problem it solves, why you built it, and what makes it interesting.",
            technologies: ["Python", "Flask", "MySQL"],
            features: [
                "Feature 1: Description of the feature",
                "Feature 2: Another cool feature",
                "Feature 3: What makes this special"
            ],
            github: "https://github.com/benburie/project1",
            demo: "https://project1-demo.com"
        },
        {
            image: "images/trackrabbit.png",
            title: "TrackRabbit",
            shortDescription: "Another amazing project you've built",
            fullDescription: "Detailed explanation of this project, the technologies used, and the impact it had.",
            technologies: ["C++", "React", "Arduino"],
            features: [
                "Key feature that stands out",
                "Technical challenge you overcame",
                "Results or metrics if applicable"
            ],
            github: "https://github.com/benburie/project2",
            demo: "https://project2-demo.com"
        },
        {
            image: "images/stryde.svg",
            title: "Stryde - <i>In Progress</i>",
            shortDescription: "Yet another cool project",
            fullDescription: "Tell the story of this project - what inspired it, how you built it, what you learned.",
            technologies: ["React", "Supabase", "SQL"],
            features: [
                "Innovative approach you took",
                "How it helps users",
                "Future improvements planned"
            ],
            github: "https://github.com/benburie/project3",
            demo: null
        },
        {
            image: "images/mealmentor.svg",
            title: "Meal Mentor",
            shortDescription: "Yet another cool project",
            fullDescription: "Tell the story of this project - what inspired it, how you built it, what you learned.",
            technologies: ["JavaScript", "HTML/CSS"],
            features: [
                "Innovative approach you took",
                "How it helps users",
                "Future improvements planned"
            ],
            github: "https://github.com/benburie/project3",
            demo: null
        },
        {
            image: "images/bankportal.svg",
            title: "Bank Portal Simulation",
            shortDescription: "Yet another cool project",
            fullDescription: "Tell the story of this project - what inspired it, how you built it, what you learned.",
            technologies: ["Java"],
            features: [
                "Innovative approach you took",
                "How it helps users",
                "Future improvements planned"
            ],
            github: "https://github.com/benburie/project3",
            demo: null
        },
        {
            image: "images/wordle.png",
            title: "Wordle Clone",
            shortDescription: "Yet another cool project",
            fullDescription: "Tell the story of this project - what inspired it, how you built it, what you learned.",
            technologies: ["Python"],
            features: [
                "Innovative approach you took",
                "How it helps users",
                "Future improvements planned"
            ],
            github: "https://github.com/benburie/project3",
            demo: null
        }
    ]
};

const DEFAULT_PROJECT_IMAGE = 'images/RIASEC Results.png';

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
                <p class="exp-summary">${exp.summary}</p> &nbsp;
                <p class="exp-projectHeader">${exp.projectHeader}</p>
                ${exp.details && exp.details.length ? `<ul class="exp-details">${exp.details.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
                <br>
                <p class="exp-projectHeader2">${exp.projectHeader2}</p>
                ${exp.details2 && exp.details2.length ? (
                    (/abstract/i).test(exp.projectHeader2 || '')
                        ? `<div class="exp-abstract">${exp.details2.join(' ')}</div>`
                        : `<ul class="exp-details">${exp.details2.map(d => `<li>${d}</li>`).join('')}</ul>`
                ) : ''}
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
                <img src="${project.image || DEFAULT_PROJECT_IMAGE}" alt="${project.title} screenshot" class="project-image">
            </div>
            <h3>${project.title}</h3>
            <p>${project.shortDescription}</p>
            <div class="project-tags">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
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
        <img src="${project.image || DEFAULT_PROJECT_IMAGE}" alt="${project.title} screenshot" class="modal-image">` : ''}
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

renderPortfolio();