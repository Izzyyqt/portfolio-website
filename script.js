const introSnd = new Audio('intro.mp3');
document.addEventListener('DOMContentLoaded', function () {
    const myPicture = document.querySelector('#myPicture');
    const loadBg = document.querySelector('.loadBg');
    const projects = document.querySelectorAll(".prjcts");

    introSnd.play();
    function checkScroll() {
        projects.forEach(function (project) {
            const projectPosition = project.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (projectPosition < screenPosition) {
                project.classList.add("show");
            }
        });
    }

    checkScroll();

    window.addEventListener("scroll", checkScroll);


    setTimeout(function () {
        document.body.style.overflow = 'hidden'; // Enable scrolling after 3 seconds
    }, 0);

    myPicture.classList.add('animate');
    myPicture.addEventListener('animationend', function () {
        loadBg.style.visibility = 'hidden';
        document.body.style.overflow = 'auto';
        window.scrollTo(0, 0);
    });

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
    // Tilt effect on hover
    projects.forEach(function (project) {
        VanillaTilt.init(project, {
            max: 25,
            speed: 5000,
        });
    });
});

function openLinkInNewTab(url) {
    window.open(url, '_blank');
}

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

let isMouseMoving = false;

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: 'forwards'});
})