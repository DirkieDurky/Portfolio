function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const letters = document.getElementsByClassName('titleLetter');

const size = 300;

async function randPos() {
    for (let i = 0; i < letters.length; i++) {
        let randX = Math.floor(Math.random() * 1000) - 500;
        let randY = Math.floor(Math.random() * 1000) - 500;
        let rotation = Math.floor(Math.random() * 180) - 90;
        while (randX > "-" + size && randX < size) {
            randX = Math.floor(Math.random() * 1000) - 500;
        }
        while (randY > "-" + size && randY < size) {
            randY = Math.floor(Math.random() * 1000) - 500;
        }
        letters[i].style.transition = "a";
        letters[i].style.transform = "translate(" + randX + "%," + randY + "%) rotate(" + rotation + "deg)";
    }
}

function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

async function slideIn() {
    for (let i = 0; i < letters.length; i++) {
        letters[i].style.transition = "color 250ms, transform 250ms";
        letters[i].style.opacity = "100";
        letters[i].style.transform = "translate(0,0) rotate(0deg)";
        letters[i].addEventListener('mouseover', function e() {
            letters[i].style.transition = "color 50ms, transform 50ms";
            letters[i].style.transitionDelay = "0ms";
            if (!isTouchDevice()) {
                letters[i].style.transform = "rotate(-15deg)";
            }
        })
        letters[i].addEventListener('mouseleave', function e() {
            letters[i].style.transition = "color 200ms, transform 200ms";
            letters[i].style.transitionDelay = "200ms";
            letters[i].style.transform = "";
        })
        await sleep(100);
    }
}

async function callFunc() {
    await randPos();
    await sleep(100);
    await slideIn();
}

callFunc();

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

let ageWindow = document.getElementById('ageWindow');
let age = document.getElementById('age');
let aboutMeSpan = document.getElementById("aboutMe").getElementsByTagName("span")[0];

age.innerHTML = calcAge().years + " jaar";

window.ageWindowActive = false;

function mouseLeave() {
    age.innerHTML = calcAge().years + " jaar";
    const checkExist = setInterval(function () {
        if (window.ageInterval) {
            clearInterval(window.ageInterval);
            clearInterval(checkExist);
            age.innerHTML = calcAge().years + " jaar";
        }
    }, 150);
    window.ageWindowActive = false;
    age.style.fontSize = "40px";
    ageWindow.style.backgroundColor = "unset";
    window.i = 0;
    ageWindow.style.width = "130px";
    ageWindow.style.height = "50px";
}

async function mouseEnter() {
    clearInterval(window.ageInterval);
    window.ageWindowActive = true;
    ageWindow.style.backgroundColor = "white";
    age.innerHTML = "";
    age.style.color = "white";
    age.style.fontSize = "16px";
    ageWindow.style.width = aboutMeSpan.offsetWidth - 20 + "px";

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

    ageWindow.insertAdjacentHTML("afterend", "<span id=heightSetter>" + setAge() + "</span>");
    const heightSetter = document.getElementById("heightSetter");
    ageWindow.style.height = heightSetter.offsetHeight + "px";
    heightSetter.remove();
    await sleep(100);
    age.innerHTML = setAge();
    age.style.color = "transparent";
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

function getDocHeight() {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
}

const docHeight = getDocHeight();

document.addEventListener("scroll", function () {
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
})

function setScrollTimeout() {
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
                for (let i = 0; i < window.scrollElem.length; i++) {
                    window.scrollElem[i].style.opacity = "100";
                }
            }
        }
    }, 10000)
}

setScrollTimeout();

document.addEventListener("scroll", async function () {
    window.iconActive = false;
    window.scrollElem = document.getElementsByClassName("scroll");
    for (let i = 0; i < window.scrollElem.length; i++) {
        window.scrollElem[i].style.opacity = "0";
    }
    await sleep(200);
    for (let i = 0; i < window.scrollElem.length; i++) {
        window.scrollElem[i].remove();
    }
    clearTimeout(window.scrollIcon);
    setScrollTimeout();
})

function updateScreen() {
    if (window.innerWidth < 480) {
        document.getElementById("optionalBr").innerHTML = "<br>";
    } else {
        document.getElementById("optionalBr").innerHTML = "";
    }
}

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
function copyBubble(elem,copy) {
    elem.addEventListener("click", function(){
        if (window.active !== elem) {
            copyStringToClipboard(copy);
            elem.insertAdjacentHTML("beforebegin", "<div class=\"bubble\">Gekopieerd!</div>");
            window.active = elem;
            setTimeout(function () {
                elem.parentNode.removeChild(elem.parentNode.children[0]);
                window.active = 0;
            }, 1000)
        }
    })
}

const discord = document.getElementById("discord");
const email = document.getElementById("email");

copyBubble(discord,"DirkieDurky#3976");
copyBubble(email,"dirk@freitjers.nl");