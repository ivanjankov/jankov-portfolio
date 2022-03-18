let bodyElement = document.getElementById('body-content');
const navLinks = document.querySelectorAll('.nav-link');

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
		changeBodyContent(workPage);
		addEventListenerToProjects();
	} else if (page == 'home') {
		changeBodyContent(homePage);
	} else if (page == 'about') {
		changeBodyContent(aboutPage);
	} else if (page == 'skills') {
		changeBodyContent(skillsPage);
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
				project.website,
				project.github,
				project.image
			);
			selectBackBtn();
		}
	}
}
function selectBackBtn() {
	let backBtn = document.getElementById('btn-back');
	backBtn.addEventListener('click', () => {
		changeBodyContent(workPage);
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

const projects = [
	{
		id: 'liljana',
		url: 'https://www.liljanasandevska.com',
		github: 'https://www.github.com',
		title: 'Liljana Portfolio',
		description: 'This is liljana website',
		image: 'img/protfolio-landing.png',
	},
	{
		id: 'honeyheaven',
		url: 'https://www.google.com',
		github: 'https://www.github.com',
		title: 'Honey Heaven',
		description: 'Website about honey heaven',
		image: 'img/beehave.png',
	},
];

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

const homePage = `<h1 class="ff-roboto-slab fs-900">
I'm Web Designer <br />
Based in Skopje, Macedonia
</h1>
<p class="fs-400">
Thank you for visiting my portfolio. Keep exploring you might find
something we can talk about.
</p>

<a href="#" class="btn btn-cta ff-roboto-mono">Contact Me</a>`;

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, possimus incidunt nam maxime inventore voluptatum
            dolorum nihil iure consequatur odio aut culpa nisi aliquid? Ab
            cupiditate, consequatur, ipsam iusto fugit nostrum neque magni
            labore unde iure consectetur eaque dolorem quaerat maiores dicta
            a. Nesciunt sed, nulla perferendis, minima esse ullam.
        </p>
    </section>
    <section class="about-section">
        <h4 class="about-section-subheading fs-500">EDUCATION</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, possimus incidunt nam maxime inventore voluptatum
            dolorum nihil iure consequatur odio aut culpa nisi aliquid? Ab
            cupiditate, consequatur, ipsam iusto fugit nostrum neque magni
            labore unde iure consectetur eaque dolorem quaerat maiores dicta
            a. Nesciunt sed, nulla perferendis, minima esse ullam.
        </p>
    </section>
    <section class="about-section">
        <h4 class="about-section-subheading fs-500">CArrer</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, possimus incidunt nam maxime inventore voluptatum
            dolorum nihil iure consequatur odio aut culpa nisi aliquid? Ab
            cupiditate, consequatur, ipsam iusto fugit nostrum neque magni
            labore unde iure consectetur eaque dolorem quaerat maiores dicta
            a. Nesciunt sed, nulla perferendis, minima esse ullam.
        </p>
    </section>
</div>
</div>`;

const skillsPage = `<div class="grid-template__skills">
<h2 class="page-heading ff-roboto-mono fs-700 fw-500">
    Skills<span></span>
</h2>
<p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
    asperiores laboriosam nostrum? Dolor ipsam consequuntur animi
    maiores! Tempore eum sunt non esse officiis est repellendus eaque
    iusto omnis, obcaecati corporis voluptatem quidem?.
</p>

<div class="development-skills">
    <h3 class="skills-title">Development Skills</h3>
    <div>
        <ul class="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
        </ul>
        <ul class="skills">
            <li>PHP</li>
            <li>MySQL</li>
            <li>jQuery</li>
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
