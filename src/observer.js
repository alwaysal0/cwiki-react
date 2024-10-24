const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
    });
};

const observerOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const header = document.querySelector("header");

observer.observe(header);