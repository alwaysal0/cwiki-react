const header = document.querySelector("header");
const logoIMG = this.document.querySelector("#logo-photo");
// window.addEventListener("scroll", function(){
//     const scrollPos = window.scrollY;
//     if (scrollPos > 100){
//         header.classList.toggle = "50px";
//         logoIMG.style.width = "50px";
//     } else{
//         header.style.height = "";
//         logoIMG.style.height = "";
//     }
// });


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

// smooth transition

const logoName = document.querySelector("#logo-name");
const rightHead = document.querySelector("#right-head");
const helloWorld = document.querySelector("#hello-world");
const gcc = document.querySelector("#gcc");
const console = document.querySelector("#console");
const cEasy = document.querySelector("#c-easy");
const restOfTextFirst = document.querySelector("#rest-of-text-first");
const restOfTextLast = document.querySelector("#rest-of-text-last");
const startButton = document.querySelector("#start-button");
const firstBox = document.querySelector("#first-box");
const secondBox = document.querySelector("#second-box");
const thirdBox = document.querySelector("#third-box");
const fourBox = document.querySelector("#four-box");
const willFind = document.querySelector("#will-find");
const forTitle = document.querySelector("#for-title");
const firstPartOfText = document.querySelector("#first-part-of-text");
const secondPartOfText = document.querySelector("#second-part-of-text");
const thirdPartOfText = document.querySelector("#third-part-of-text");
const secondStartButton = document.querySelector("#start-button-second");
const arrowBottom = document.querySelector("#arrow-bottom");
setTimeout(function(){observer.observe(cEasy)},200);
setTimeout(function(){observer.observe(restOfTextFirst)},400);
setTimeout(function(){observer.observe(restOfTextLast)},600);
setTimeout(function(){observer.observe(startButton)},700);
setTimeout(function(){observer.observe(willFind)},350);
setTimeout(function(){observer.observe(firstBox)},500);
setTimeout(function(){observer.observe(secondBox)},600);
setTimeout(function(){observer.observe(thirdBox)},700);
setTimeout(function(){observer.observe(fourBox)},800);
setTimeout(function(){observer.observe(firstPartOfText), 300});
setTimeout(function(){observer.observe(secondPartOfText), 400});
setTimeout(function(){observer.observe(thirdPartOfText), 500});
observer.observe(helloWorld);
observer.observe(gcc);
observer.observe(console);
observer.observe(logoName);
observer.observe(rightHead);
setTimeout(function(){observer.observe(arrowBottom)},300);
setTimeout(function(){observer.observe(secondStartButton)},800);

// SCROLL IMAGE

const frames = 120;
const framePath = "./c-animation2/frame";
const frameExtension = ".png"; 
const changingFrame = document.querySelector("#information-about-C"); 

// Массив для хранения загруженных изображений
const frameImages = [];

// функция предзагрузки
function preloadFrames() {
    for (let i = 1; i <= frames; i++) {
        const img = new Image();
        img.src = `${framePath}${i}${frameExtension}`;
        frameImages.push(img); 
    }
}

function changeFrame() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / maxScroll;
    const frameIndex = Math.min(frames - 1, Math.floor(scrollPosition / 15));

    changingFrame.style.backgroundImage = `url('${frameImages[frameIndex].src}')`;
}

window.addEventListener("scroll", changeFrame);

window.addEventListener("load", () => {
    preloadFrames();  // Загрузка всех кадров
    changeFrame();    // Показываем первый кадр
});


// hamburger

const hamburger = document.querySelector("#hamburger");
const listOfLinks = document.querySelector("#right-head");
hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    listOfLinks.classList.toggle("active");
})

// SCREEN ORIENTATIOM

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    if (screen.orientation && screen.orientation.lock) {
        // Пытаемся заблокировать ориентацию в портретном режиме
        screen.orientation.lock('landscape').catch(function(error) {
            alert('Ошибка блокировки ориентации: ' + error);
        });
    } else {
        alert('Screen Orientation API не поддерживается вашим устройством или браузером.');
    }
}
// hello git ss