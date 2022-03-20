let bodyElement = document.getElementById('body-content');
const navLinks = document.querySelectorAll('.nav-link');
const projects = [
	{
		id: 'liljana',
		url: 'https://www.liljanasandevska.com',
		github: 'https://www.github.com',
		title: 'Liljana Portfolio',
		description:
			'Portfolio website for graphic designer. Goal of the portfolio is to show her work through different interactive sections (scratching the lottery ticket or scrolling through social media). Colors and elements should bring you closer to her character and personality',
		image: 'img/protfolio-landing.png',
		technologies: 'HTML5 CSS3 JavaScript jQuery PHP',
	},

	{
		id: 'islandboy',
		url: 'https://ivanjankov.github.io/IslandBoy/',
		github: 'https://github.com/ivanjankov/IslandBoy',
		title: 'Island Boy',
		description:
			'Landing page for a company that does boats refinishing and repainting. Simple and clean display of services, about section and gallery of previous work',
		image: 'img/islandboy.png',
		technologies: 'HTML5 CSS3 JavaScript',
	},
	{
		id: 'portfolio',
		url: 'https://ivanjankov.github.io/ivanjankov/',
		github: 'https://github.com/ivanjankov/ivanjankov',
		title: 'Portfolio Website',
		description:
			'Personal portfolio website that can be used to showcase your previous work and skills.',
		image: 'img/portfolio.png',
		technologies: 'BootStrap JavaScript',
	},
	{
		id: 'onofo',
		url: 'https://ivanjankov.github.io/IslandBoy/',
		github: 'https://github.com/ivanjankov/IslandBoy',
		title: 'Onofo',
		description:
			'Onofo is a SaaS company. Their main product is AI-Powered notes taking platform and app. Onofo is used to take notes while in a meeting, class or learning online',
		image: 'img/onofo.png',
		technologies: 'HTML5 CSS3 JavaScript',
	},

	{
		id: 'honeyheaven',
		url: '#',
		github: 'https://github.com/ivanjankov/Honey-Heaven',
		title: 'Honey Heaven',
		description:
			'Landing page for a company/family that produces and sells honey products. ',
		image: 'img/beehave.png',
		technologies: 'HTML5 CSS3 JavaScript',
	},
];

let workProjects = createProjectFromObj();

navLinks.forEach((link) => {
	link.addEventListener('click', changeUI);
});

function getMenuLinkData(e) {
	removeActiveClassFromNavLinks();
	e.target.classList.add('active');
}

function removeActiveClassFromNavLinks() {
	navLinks.forEach((link) => {
		if (link.classList.contains('active')) {
			link.classList.remove('active');
		}
	});
}

function changeUI(e) {
	getMenuLinkData(e);
	let navLinkTargetPage = e.target.getAttribute('data-page');
	insertHtmlBasedOnClick(navLinkTargetPage);
}

function insertHtmlBasedOnClick(page) {
	if (page == 'work') {
		changeBodyContent(workProjects);
		addEventListenerToProjects();
		gsapWork();
	} else if (page == 'home') {
		changeBodyContent(homePage);
		gsapHome();
	} else if (page == 'about') {
		changeBodyContent(aboutPage);
		gsapAbout();
	} else if (page == 'skills') {
		changeBodyContent(skillsPage);
		gsapSKills();
	} else if (page == 'contact') {
		changeBodyContent(contactPage);
	}
}

function changeBodyContent(content) {
	bodyElement.innerHTML = content;
}

function getProjects() {
	return document.querySelectorAll('.view-project');
}
function addEventListenerToProjects() {
	let projects = getProjects();
	projects.forEach((project) => {
		project.addEventListener('click', getTargetedProject);
	});
}

function printProject(e) {
	return e.target.parentElement.parentElement.parentElement.id;
}

function getTargetedProject(e) {
	let projectId = printProject(e);
	for (let project of projects) {
		if (project.id == projectId) {
			bodyElement.innerHTML = createSingleProjectHtml(
				project.title,
				project.description,
				project.github,
				project.url,
				project.image
			);
			gsapProject();
			selectBackBtn();
		}
	}
}
function selectBackBtn() {
	let backBtn = document.getElementById('btn-back');
	backBtn.addEventListener('click', () => {
		changeBodyContent(workProjects);
		addEventListenerToProjects();
	});
}

function createSingleProjectHtml(title, description, github, url, image) {
	let currentProject = `
            <a id="btn-back" class="btn btn-cta btn-back" href="#">Projects</a>
            <div class="grid-single-project">
                <div class="project-description">
                    <h2>${title}</h2>
                    <p>
                       ${description}
                    </p>
                    <div class="project-btns-wrapper">
                        <a class="btn btn-cta" href="${url}" target="_blank">Discover</a>
                        <a class="btn btn-cta" href="${github}" target="_blank">View Code</a>
                    </div>
                </div>
                <div class="img-container">
                    <img src="${image}" alt="Landing Page" />
                </div>
            </div>
    `;
	return currentProject;
}

// bodyElement.innerHTML = createProjectFromObj();

function createProjectFromObj() {
	let result = '';
	let counter = 1;
	for (let project of projects) {
		let singleProject = `
        <div id="${project.id}" class="project">
            <div class="grid-project">
                <div class="project-num">
                    <span>0${counter++}</span>
                </div>
                <div class="project-name">
                    <div class="flex">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="technologies-used">${project.technologies}</p>
                    </div>
                </div>
                <div class="project-btn">
                    <a class="view-project" href="#"
                        >View Project</a
                    >
                    <img
                        src="${project.image}"
                        alt="Thumbnail of Portfolio Website"
                    />
                </div>
            </div>
        </div>
        
        `;
		result += singleProject;
	}
	result = `<div class="grid-template__work">${result}</div>`;
	return result;
}

const workPage = `<div class="grid-template__work">
<div id="liljana" class="project">
    <div class="grid-project">
        <div class="project-num">
            <span>01</span>
        </div>
        <div class="project-name">
            <div class="flex">
                <h3 class="project-title">Liljana Portfolio</h3>
                <p class="technologies-used">Html, CSS, JavaScript</p>
            </div>
        </div>
        <div class="project-btn">
            <a class="view-project" href="#"
                >View Project</a
            >
            <img
                src="img/protfolio-landing.png"
                alt="Thumbnail of Portfolio Website"
            />
        </div>
    </div>
</div>
<div id="honeyheaven" class="project">
    <div class="grid-project">
        <div class="project-num">
            <span>02</span>
        </div>
        <div class="project-name">
            <div class="flex">
                <h3 class="project-title">Honey Heaven</h3>
                <p class="technologies-used">Html, CSS, JavaScript</p>
            </div>
        </div>
        <div class="project-btn">
            <a class="view-project" href="#">View Project</a>
            <img src="img/protfolio-landing.png" alt="Wazzup" />
        </div>
    </div>
</div>
<div class="project">
    <div class="grid-project">
        <div class="project-num">
            <span>03</span>
        </div>
        <div class="project-name">
            <div class="flex">
                <h3 class="project-title">Onofo Saas</h3>
                <p class="technologies-used">Html, CSS, JavaScript</p>
            </div>
        </div>
        <div class="project-btn">
            <a class="view-project" href="#">View Project</a>
            <img src="img/protfolio-landing.png" alt="Wazzup" />
        </div>
    </div>
</div>
<div class="project">
    <div class="grid-project">
        <div class="project-num">
            <span>04</span>
        </div>
        <div class="project-name">
            <div class="flex">
                <h3 class="project-title">Island Boy</h3>
                <p class="technologies-used">Html, CSS, JavaScript</p>
            </div>
        </div>
        <div class="project-btn">
            <a class="view-project" href="#">View Project</a>
            <img src="img/protfolio-landing.png" alt="Wazzup" />
        </div>
    </div>
</div>
<div class="project">
    <div class="grid-project">
        <div class="project-num">
            <span>05</span>
        </div>
        <div class="project-name">
            <div class="flex">
                <h3 class="project-title">Liljana Portfolio</h3>
                <p class="technologies-used">Html, CSS, JavaScript</p>
            </div>
        </div>
        <div class="project-btn">
            <a class="view-project" href="#">View Project</a>
            <img src="img/protfolio-landing.png" alt="Wazzup" />
        </div>
    </div>
</div>
</div>`;

const homePage = `<h1 id="home-title" class="ff-roboto-slab fs-900">
I'm Web Designer <br />
Based in Skopje, Macedonia
</h1>
<p id="home-paragraph" class="fs-400">
Thank you for visiting. Keep exploring you might find something you like.
</p>

<a id="home-btn" href="#" class="btn btn-cta ff-roboto-mono">Contact Me</a>`;

const aboutPage = `	<div class="grid-template__about">
<div class="profile-pic">
    <img src="img/profile-pic.png" alt="Profile Picture" />
</div>
<div class="about-text-wrapper">
    <h2 class="page-heading ff-roboto-mono fs-700 fw-500">
        About<span></span>
    </h2>
    <section class="about-section">
        <h4 class="about-section-subheading fs-500">Story</h4>
        <p>
           Hello there, as you already know my name is Ivan. I come from small town named Kochani in North Macedonia. 
        </p>
    </section>
    <section class="about-section">
        <h4 class="about-section-subheading fs-500">EDUCATION</h4>
        <p>
            When I had to choose my career path in high school I decided to follow family footsteps and choose to study traffic engineering. After the High school I moved to Bitola where I got a degree in Civil engineering. But after the Covid outbreak I decided to change my career path. I became part of Semos Web Design Academy where I gained knowledge in Web Design technologies. 
        </p>
    </section>
    <section class="about-section">
        <h4 class="about-section-subheading fs-500">Carrer</h4>
        <p>
            As a college student I participated in the Work and Travel program by US goverment. After getting the degree I worked 7 months as a subtitute proffessor in the High School in Kochani. After my contract ended I worked as a Driving Instructor for 1 year and 6 months.
        </p>
    </section>
</div>
</div>`;

const skillsPage = `<div class="grid-template__skills">
<h2 id="skills-heading" class="page-heading ff-roboto-mono fs-700 fw-500">
    Skills<span></span>
</h2>
<p class="skills-paragraph">
Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
</p>

<div class="development-skills">
    <h3 class="skills-title">Development Skills</h3>
    <div>
        <ul class="skills">
            <li class="single-skill">HTML</li>
            <li class="single-skill">CSS</li>
            <li class="single-skill">Javascript</li>
            <li class="single-skill">Bootstrap</li>
        </ul>
        <ul class="skills">
            <li class="single-skill">PHP</li>
            <li class="single-skill">MySQL</li>
            <li class="single-skill">jQuery</li>
            <li class="single-skill">Git</li>
        </ul>
    </div>
</div>
<div class="design-skills">
    <h3 class="skills-title">Design Skills</h3>
    <ul class="skills">
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Adobe XD</li>
    </ul>
</div>
</div>`;

// gsap animtaion functions

function gsapHome() {
	gsap.from('#home-title, #home-paragraph, #home-btn', {
		opacity: 0,
		delay: 0.5,
		x: 400,
		stagger: 0.25,
		ease: 'ease',
	});
}
function gsapWork() {
	gsap.from('.project', {
		opacity: 0,
		delay: 0.5,
		x: 400,
		stagger: 0.35,
		ease: 'ease',
	});
}

function gsapProject() {
	gsap.from('.project-description', {
		opacity: 0,
		duration: 1.5,
		y: 200,
	});
	gsap.from('.img-container', {
		opacity: 0,
		x: 400,
		ease: 'ease',
	});
}

function gsapAbout() {
	gsap.from('.about-section', {
		opacity: 0,
		duration: 1,
		x: 200,
		stagger: 0.25,
	});
	gsap.from('.profile-pic', {
		opacity: 0,
		duration: 1.5,
	});
}
function gsapSKills() {
	gsap.from('.single-skill, .design-skills', {
		opacity: 0,
		duration: 1,
		x: -100,
		scale: 1.5,
		stagger: {
			ease: 'power3.inOut',
			each: 0.2,
		},
	});
	gsap.from('.skills-paragraph, .skills-heading', {
		opacity: 0,
		duration: 0.5,
	});
}

// animating boxes

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
console.log(windowWidth);

animateBoxes();
function animateBoxes() {
	gsap.to('.cube', {
		duration: 3,
		x: 700,
	});
}

function random(min, max) {
	if (max == null) {
		max = min;
		min = 0;
	}
	return Math.random() * (max - min) + min;
}
