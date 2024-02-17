document.addEventListener('DOMContentLoaded', function () {
    const myPicture = document.querySelector('#myPicture');
    const loadBg = document.querySelector('.loadBg');
    const projects = document.querySelectorAll(".prjcts");

    function checkScroll() {
        projects.forEach(function (project) {
            const projectPosition = project.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (projectPosition < screenPosition) {
                project.classList.add("show");
            }
        });
    }

    // Check for projects visibility on initial load
    checkScroll();

    // Check for projects visibility on scroll
    window.addEventListener("scroll", checkScroll);


    setTimeout(function () {
        document.body.style.overflow = 'hidden'; // Enable scrolling after 3 seconds
    }, 0);

    myPicture.classList.add('animate');
    myPicture.addEventListener('animationend', function () {
        loadBg.style.visibility = 'hidden';
        // Comment out or remove the following line to allow scrolling
        document.body.style.overflow = 'auto';
        window.scrollTo(0, 0);
    });

    // Add the following lines to handle page reload
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.addEventListener('beforeunload', function () {
        window.scrollTo(0, 0);
    });

    // Redirect to navbar on page load
    const hash = window.location.hash;
    if (hash !== '#navbar') {
        window.location.hash = 'navbar';
    };
});

function openLinkInNewTab(url) {
    window.open(url, '_blank');
}
