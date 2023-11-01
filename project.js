let projects = document.querySelector(".projects");

let myProjects = [
    {
        projectName: 'Calculator App',
        TechStack: 'HTML, CSS & Javascript',
        Description: 'As you might have already guessed, this is a JavaScript-based calculator. It handles all your day to day mathematical needs very well. Have a look.',
        ProjectImg: './project_img/calculator_app.png',
        ImgAlt: 'Calculator project Image',
        livePreview: 'https://github.com/Demoaccount0-l/calculator/',
        codeLink: 'https://github.com/Demoaccount0-l/calculator/'
    },
    {
        projectName: 'Weather App',
        TechStack: 'JavaScript, HTML, CSS, Weather API',
        Description: 'This app shows the current weather of a city. It uses Weather API to fetch the weather data. The app changes the data according to different weather conditions.',
        ProjectImg: './project_img/weather_app.png',
        ImgAlt: 'Weather App project Image',
        livePreview: 'https://demoaccount0-l.github.io/weather-app/',
        codeLink: 'https://github.com/Demoaccount0-l/weather-app'
    },
    {
        
        projectName: 'Tic Tac Toe',
        TechStack: 'JavaScript, HTML, CSS',
        Description: 'This project is development of tic tac toe game using Javascript, Html and CSS. Go ahead and try it.',
        ProjectImg: './project_img/tic_tac_toe.png',
        ImgAlt: 'Tic Tac Toe project',
        livePreview: 'https://demoaccount0-l.github.io/tic-tac-toe/',
        codeLink: 'https://github.com/Demoaccount0-l/tic-tac-toe'
    },
    {
        projectName: 'Personal Portfolio',
        TechStack: 'JavaScript, HTML, CSS',
        Description: "Yay! You're already here. Why not take a look around!",
        ProjectImg: './project_img/personal_portfolio.png',
        ImgAlt: 'Personal Portfolio',
        livePreview: 'https://demoaccount0-l.github.io/personal-portfolio/',
        codeLink: 'https://github.com/Demoaccount0-l/personal-portfolio'
    },
    {
        projectName: 'Etch-A-Sketch',
        TechStack: 'JavaScript, HTML, CSS',
        Description: 'It is etch a sketch project where we layout to color the grid and make a sketch.',
        ProjectImg: './project_img/etch_a_sketch.png',
        ImgAlt: 'Etch a Sketch project',
        livePreview: 'https://demoaccount0-l.github.io/etch-a-sketch/',
        codeLink: 'https://github.com/Demoaccount0-l/etch-a-sketch'
    },
];


const printProjects = () => {
    myProjects.forEach(project => {
        let newproject = document.createElement("div");
        newproject.classList.add("new-project");
        newproject.innerHTML = 
        `<div class="project">
        <div class="project-img">
        <img src="${project.ProjectImg}" alt="${project.ImgAlt}" style="object-fit:cover; width:300px; height:350px;">
        </div>
        <div class="project-details">
            <h2>${project.projectName}</h2>
            <p><span>Tech Stack:</span> ${project.TechStack}</p>
            <p>${project.Description}</p>
            <div class="code-links">
                <a href="${project.livePreview}" target="_blank" class="livepreview">Live Preview<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg></a>
                <a href="${project.codeLink}" target= "_blank" class="codelink">View Code<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>xml</title><path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" /></svg></a>
            </div>
        </div>
    </div>`;
        projects.appendChild(newproject);
    })

}


printProjects();