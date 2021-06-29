function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

// - Title Letters -

function separate(string)
{
    let result = "";

    for (const character of string)
    {
        result += `<span class="titleLetter ${character === " " ? 'titleSpace' : ''}">${character}</span>`;
    }
    
    return result;
}

hello = document.getElementById("hello");
iam = document.getElementById("iam");
dirk = document.getElementById("dirk");

hello.insertAdjacentHTML("afterbegin", separate("Hallo,"));
iam.insertAdjacentHTML("afterbegin", separate("ik ben"));
dirk.insertAdjacentHTML("afterbegin", separate("Dirk!"));

const letters = document.getElementsByClassName('titleLetter');

//How far the letters have to spawn
const size = 300;

//Send all letters to a random position
window.rotations = [];

async function randPos() {
    for (const letter of letters) {
        let randX = Math.floor(Math.random() * 1000) - 500;
        let randY = Math.floor(Math.random() * 1000) - 500;
        const rotation = Math.floor(Math.random() * 180) - 90;
        while (randX > "-" + size && randX < size) {
            randX = Math.floor(Math.random() * 1000) - 500;
        }
        while (randY > "-" + size && randY < size) {
            randY = Math.floor(Math.random() * 1000) - 500;
        }
        letter.style.transition = "a";
        letter.style.transform = "translate(" + randX + "%," + randY + "%) rotate(" + rotation + "deg)";
        window.rotations.push(rotation);
    }
}

//Make a letter slide on the screen
async function slideInLetter(letter) {
    letter.style.transition = "color 250ms, transform 250ms";
    letter.style.opacity = "100";
    letter.style.transform = "translate(0,0) rotate(0deg)";
}

//Make all letters slide on screen
async function slideIn() {
    for (const letter of letters) {
        slideInLetter(letter);
        await sleep(100);
    }
}

function setHoverEvents() {
    for (const letter of letters) {
        letter.addEventListener('mouseover', function () {
            letter.style.transition = "color 50ms, transform 50ms";
            letter.style.transitionDelay = "0ms";
            if (!isTouchDevice()) {
                letter.style.transform = "rotate(-15deg)";
            }
        })
        letter.addEventListener('mouseleave', function () {
            letter.style.transition = "color 200ms, transform 200ms";
            letter.style.transitionDelay = "200ms";
            letter.style.transform = "";
        })
    }
}

async function callFunc() {
    await setHoverEvents()
    await randPos();
    await sleep(100);
    await slideIn();
}

window.addEventListener('load', function () {
callFunc();
})

// - Exact age calculation -
let dob = new Date(1082928780000);

let dobYear = dob.getFullYear();
let dobMonth = dob.getMonth();
let dobDate = dob.getDate();
let dobHour = dob.getHours();
let dobMins = dob.getMinutes();
let dobSecs = dob.getSeconds();

function calcAge() {

    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDate = now.getDate();
    let currentHour = now.getHours();
    let currentMins = now.getMinutes();
    let currentSecs = now.getSeconds();

    let yearAge;
    let monthAge;
    let dateAge;
    let hourAge;
    let minAge;
    let secAge;

    //Years
    yearAge = currentYear - dobYear;

    //Months
    if (currentMonth >= dobMonth) {
        monthAge = currentMonth - dobMonth;
    } else {
        yearAge--;
        monthAge = 12 + currentMonth - dobMonth;
    }

    //Days
    if (currentDate >= dobDate) {
        dateAge = currentDate - dobDate;
    } else {
        monthAge--;
        dateAge = 31 + currentDate - dobDate;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    //Hours
    if (currentHour >= dobHour) {
        hourAge = currentHour - dobHour;
    } else {
        dateAge--;
        hourAge = 24 + currentHour - dobHour;

        if (dateAge < 0) {
            dateAge = 30;
            monthAge--;
        }
    }

    //Minutes
    if (currentMins >= dobMins) {
        minAge = currentMins - dobMins;
    } else {
        hourAge--;
        minAge = 60 + currentMins - dobMins;

        if (hourAge < 0) {
            hourAge = 23;
            dateAge--;
        }
    }

    //Seconds
    if (currentSecs >= dobSecs) {
        secAge = currentSecs - dobSecs;
    } else {
        minAge--;
        secAge = 60 + currentSecs - dobSecs;

        if (minAge < 0) {
            minAge = 59;
            hourAge--;
        }
    }

    return {
        years: yearAge,
        months: monthAge,
        days: dateAge,
        hours: hourAge,
        mins: minAge,
        secs: secAge
    };
}

const ageWindow = document.getElementById('ageWindow');
const age = document.getElementById('age');
const aboutMeSpan = document.getElementById("aboutMe").getElementsByTagName("span")[0];
const ageUnderline = document.getElementById('ageUnderline');

age.innerHTML = calcAge().years + " jaar";

window.ageWindowActive = false;

function setAge() {
    const ageDate = calcAge();
    let result = ageDate.years + " jaar, " + ageDate.months;
    if (ageDate.months === 1) {
        result += " maand, ";
    } else {
        result += " maanden, "
    }
    result += ageDate.days;
    if (ageDate.days === 1) {
        result += " dag, ";
    } else {
        result += " dagen, ";
    }
    result += ageDate.hours + " uur, " + ageDate.mins;
    if (ageDate.mins === 1) {
        result += " minuut,<br>en ";
    } else {
        result += " minuten,<br>en ";
    }
    result += ageDate.secs;
    if (ageDate.secs === 1) {
        result += " seconde";
    } else {
        result += " seconden";
    }
    result += " oud om precies te zijn. ;)<br>(2004/04/25 om 23:33)";
    return result;
}

function mouseLeave() {
    age.classList.remove("ageHover");
    age.classList.add("ageDefault");
    age.style.opacity = "0";
    ageUnderline.style.opacity = "0";
    const checkExist = setInterval(function () {
        if (window.ageInterval) {
            clearInterval(window.ageInterval);
            clearInterval(checkExist);
            age.innerHTML = calcAge().years + " jaar";
            age.style.opacity = "1";
            ageUnderline.style.opacity = "1";
        }
    }, 150);
    window.ageWindowActive = false;
    ageWindow.style.backgroundColor = "unset";
    window.i = 0;
    ageWindow.style.width = "130px";
    ageWindow.style.height = "50px";
}

function mouseEnter() {
    clearInterval(window.ageInterval);
    window.ageWindowActive = true;
    ageWindow.style.backgroundColor = "white";
    age.innerHTML = "";
    ageWindow.style.width = aboutMeSpan.offsetWidth - 20 + "px";
    ageUnderline.style.opacity = "0";
    age.classList.remove("ageDefault");
    age.classList.add("ageHover");

    ageWindow.insertAdjacentHTML("afterend", "<span id=heightSetter>" + setAge() + "</span>");
    const heightSetter = document.getElementById("heightSetter");
    ageWindow.style.height = heightSetter.offsetHeight + "px";
    heightSetter.remove();
    age.innerHTML = setAge();
    window.ageInterval = setInterval(function () {
        age.innerHTML = setAge();
    }, 500);
}

if (!isTouchDevice()) {
    ageWindow.addEventListener("mouseleave", mouseLeave);
    ageWindow.addEventListener("mouseenter", mouseEnter);
} else {
    ageWindow.addEventListener("click", function () {
        if (window.ageWindowActive) {
            mouseLeave();
        } else {
            mouseEnter();
        }
    });
}

ageWindow.addEventListener("keydown", e => {
        if (e.isComposing || e.keyCode === 13) {
            if (window.ageWindowActive) {
                mouseLeave();
            } else {
                mouseEnter();
            }
        }
});

// - Scroll arrows -
setAmountScrolled();
document.addEventListener("scroll", setAmountScrolled);

function setAmountScrolled() {
    //Get scrolled height
    const winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    //Get total document height
    const docHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const trackLength = docHeight - winHeight;
    window.amountScrolled = Math.floor(scrollTop / trackLength * 100);
}

updateScrollTimeout();

document.addEventListener("scroll", updateScrollTimeout);

let oldScrollTimeout = "";

async function updateScrollTimeout() {
    window.iconActive = false;
    window.scrollElem = document.getElementsByClassName("scroll");
    for (const el of window.scrollElem) {
        el.style.opacity = "0";
    }
    await sleep(200);
    for (const el of window.scrollElem) {
        el.remove();
    }
    clearTimeout(window.scrollIcon);
    let scrollTimeout;
    if (window.amountScrolled < 5) {
        scrollTimeout = 8000;
    } else if (window.amountScrolled < 17) {
        scrollTimeout = 15000;
    } else if (window.amountScrolled < 33) {
        scrollTimeout = 43000;
    } else if (window.amountScrolled < 68) {
        scrollTimeout = 120000;
    } else if (window.amountScrolled < 83) {
        scrollTimeout = 25000;
    }
    if (oldScrollTimeout !== "") {
        if (oldScrollTimeout !== scrollTimeout) {
            setScrollTimeout(scrollTimeout);
        }
    } else {
        if (scrollTimeout) {
            setScrollTimeout(scrollTimeout);
        }
    }
    oldScrollTimeout = scrollTimeout;
}

function setScrollTimeout(timeout) {
        window.scrollIcon = setTimeout(async function () {
            if (window.amountScrolled < 95 || window.amountScrolled === undefined) {
                if (!window.iconActive) {
                    window.iconActive = true;
                    document.body.insertAdjacentHTML("beforeend",
                        "<div class=\"scroll\"> Scroll gerust verder " +
                        "<div class=\"arrow\"></div>" +
                        "</div>" +
                        "<div class=\"scroll right\"> Scroll gerust verder " +
                        "<div class=\"arrow\"></div>" +
                        "</div>");
                    window.scrollElem = document.getElementsByClassName("scroll");
                    await sleep(200);
                    for (const elem of window.scrollElem) {
                        elem.style.opacity = "100";
                    }
                }
            }
        }, timeout)
}

// - Copying to clipboard -
function copyStringToClipboard (string) {
    function handler (event){
        event.clipboardData.setData('text/plain', string);
        event.preventDefault();
        document.removeEventListener('copy', handler, true);
    }

    document.addEventListener('copy', handler, true);
    document.execCommand('copy');
}

window.active = 0;
//Puts something in the users clipboard when clicked and makes a bubble pop up
function setCopyEventListeners(elem,copy) {
    elem.addEventListener("click", function(){
        copyBubble(elem,copy);
    })
    elem.addEventListener("keydown", e => {
        if (e.isComposing || e.keyCode === 13) {
            copyBubble(elem, copy);
        }
    })
}

function copyBubble(elem,copy) {
    if (window.active !== elem) {
        copyStringToClipboard(copy);
        elem.insertAdjacentHTML("afterbegin", "<div class=\"bubble\">Gekopieerd!</div>");
        window.active = elem;
        setTimeout(function () {
            for (let i=0;i<elem.childNodes.length;i++) {
                if (elem.childNodes[i].className === "bubble"){
                    elem.childNodes[i].remove();
                }
            }
            window.active = 0;
        }, 1000)
    }
}

const discord = document.getElementById("discordLink");
const email = document.getElementById("emailLink");

setCopyEventListeners(discord,"DirkieDurky#3976");
setCopyEventListeners(email,"dirk@freijters.nl");

// - Responsibility -
function updateScreen() {
    if (window.innerWidth < 480) {
        document.getElementById("optionalBr").innerHTML = "<br>";
    } else {
        document.getElementById("optionalBr").innerHTML = "";
    }
}