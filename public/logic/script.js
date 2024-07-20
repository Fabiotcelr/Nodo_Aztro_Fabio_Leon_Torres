document.addEventListener("DOMContentLoaded", () => {
    let projectsData = [];
    let currentPage = 0;
    const projectsPerPage = 10;

    fetch('./public/data/projects.json')
        .then(response => response.json())
        .then(data => {
            projectsData = data.projects;
            const projects = projectsData.slice(0, 6); // Get only the first 6 projects for the carousel
            const carouselContainer = document.getElementById('projects-carousel');

            projects.forEach(project => {
                const slide = document.createElement('div');
                slide.classList.add('swiper-slide');
                slide.innerHTML = `
                    <div class="card">
                        <a  class="card__thumbnail" href="${project.url}">
                            <i class=" card__icon ${project.icon}"></i>
                            <h3 class="card__title">${project.title}</h3>
                            <time class="card__date">${project.date}</time>
                            <p class="card__text" >${project.description}</p>
                        <a>    
                    </div>
                `;
                carouselContainer.appendChild(slide);
            });

            // Initialize Swiper
            new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                slidesPerView: 1, // Default to 1 slide per view
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    }
                },
                loop: true,
            });
        });

    document.getElementById('view-list-button').addEventListener('click', () => {
        document.querySelector('.swiper-container').classList.add('hidden');
        document.getElementById('view-list-button').classList.add('hidden');
        document.getElementById('project-list-section').style.display = 'block';
        displayProjects();
    });

    document.getElementById('next-page-button').addEventListener('click', () => {
        currentPage++;
        displayProjects();
    });

    function displayProjects() {
        const start = currentPage * projectsPerPage;
        const end = start + projectsPerPage;
        const projects = projectsData.slice(start, end);
        const projectList = document.getElementById('project-list');

        projects.forEach(project => {
            const item = document.createElement('div');
            item.classList.add('project-item');
            item.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectList.appendChild(item);
        });

        // Show or hide the "Next" button
        if (end >= projectsData.length) {
            document.getElementById('next-page-button').classList.add('hidden');
        } else {
            document.getElementById('next-page-button').classList.remove('hidden');
        }
    }
});
