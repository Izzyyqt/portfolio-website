document.addEventListener('DOMContentLoaded', function () {
    const myPicture = document.querySelector('#myPicture');
    const loadBg = document.querySelector('.loadBg');

    setTimeout(function () {
      document.body.style.overflow = 'auto';
    }, 3000);

    myPicture.classList.add('animate');
    myPicture.addEventListener('animationend', function () {
      loadBg.style.visibility = 'hidden';
      document.body.style.overflow = 'hidden';
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