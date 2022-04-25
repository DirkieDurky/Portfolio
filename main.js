function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$(document).ready(async function () {
    const id = getCookie("id");
    // if (id.length < 1) {
    //     function getNewID() {
    //         $.ajax({
    //             url: "https://dirkdev-bot.dirkdev.repl.co/api/getNewID",
    //             type: 'GET',
    //             success: function (newID) {
    //                 document.cookie = `id=${newID}; expires=Thu, 01 Jan 9999 00:00:00 UTC; path=/; secure`;
    //                 console.log(`Yayee, we got a new ID! ${newID}`);
    //             }
    //         });
    //     }
    //     await getNewID();
    // }
    getInfo().then(info => {
        $.ajax({
            contentType: 'application/json',
            type: "POST",
            url: "https://dirkdev-bot.dirkdev.repl.co/api/userLogOn",
            data: JSON.stringify({id: id || -1, info: info}),
            success: function (newIDString){
                if (!id){
                    const newID = parseInt(newIDString);
                    document.cookie = `id=${newID}; expires=Thu, 01 Jan 9999 00:00:00 UTC; path=/; secure`;
                    console.log(`Yayee, we got a new ID! ${newID}`);
                }
            },
            error: function (params) {
                console.log("Something went wrong. Bot is probably offline")
            }
        })
        console.log(info);
    });

})

async function getInfo() {
    let totalData = {
        ip: {
            ip4: [],
            ip6: [],
        },
        location: {
            continent: [],
            country: [],
            region: [],
            city: [],
            postal: [],
            coordinates: [],
        },
        security: {
            is_bogon: [],
            is_cloud_provider: [],
            is_tor: [],
            is_tor_exit: [],
            is_proxy: [],
            is_anonymous: [],
            is_abuser: [],
            is_attacker: [],
            is_threat: [],
        },
        time_zone: {
            id: [],
            abbreviation: [],
            name: [],
            time: [],
        },
        user_agent: {
            header: [],
            name: [],
            type: [],
            version: [],
            device: {
                brand: [],
                name: [],
                type: [],
            },
            engine: {
                name: [],
                type: [],
                version: [],
            },
            os: {
                name: [],
                type: [],
                version: [],
            }
        }
    };

    try {
        await $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function (data) {
            totalData.ip.ip4.push(data.ip);
        });
    } catch {
        //Suppress error
    }
    // try {
    //     await $.getJSON('https://ipinfo.io/json', function (data) {
    //         totalData.ip.ip6.push(data.ip);
    //         totalData.location.city.push(data.city);
    //         totalData.location.region.push(data.region);
    //         totalData.location.country.push(data.country.name);
    //         totalData.location.id.push(data.timezone);
    //         totalData.location.coordinates.push(data.loc);
    //     });
    // } catch {
    //     //Suppress error
    // }
    // try {
    //     // await $.getJSON('https://api.ipregistry.co/?key=6j90v0tef9l6f81u', function(data) {
    //     await $.getJSON('https://api.ipregistry.co/?key=tryout', function (data) {
    //         // console.log(data);
    //         // console.log(data.ip);
    //         totalData.ip.ip6.push(data.ip);
    //         totalData.location.continent.push(data.location.continent.name);
    //         totalData.location.country.push(data.location.country.name);
    //         totalData.location.region.push(data.location.region.name);
    //         totalData.location.city.push(data.location.city);
    //         totalData.location.postal.push(data.location.postal);
    //         totalData.location.coordinates.push(data.location.latitude + ", " + data.location.longitude);
    //         totalData.security.is_bogon.push(data.security.is_bogon);
    //         totalData.security.is_cloud_provider.push(data.security.is_cloud_provider);
    //         totalData.security.is_tor.push(data.security.is_tor);
    //         totalData.security.is_tor_exit.push(data.security.is_tor_exit);
    //         totalData.security.is_proxy.push(data.security.is_proxy);
    //         totalData.security.is_anonymous.push(data.security.is_anonymous);
    //         totalData.security.is_abuser.push(data.security.is_abuser);
    //         totalData.security.is_attacker.push(data.security.is_attacker);
    //         totalData.security.is_threat.push(data.security.is_threat);
    //         totalData.time_zone.id.push(data.time_zone.id);
    //         totalData.time_zone.abbreviation.push(data.time_zone.abbreviation);
    //         totalData.time_zone.name.push(data.time_zone.name);
    //         totalData.time_zone.time.push(data.time_zone.current_time);
    //         totalData.user_agent.header.push(data.user_agent.header);
    //         totalData.user_agent.name.push(data.user_agent.name);
    //         totalData.user_agent.type.push(data.user_agent.type);
    //         totalData.user_agent.version.push(data.user_agent.version);
    //         totalData.user_agent.device.brand.push(data.user_agent.device.brand);
    //         totalData.user_agent.device.name.push(data.user_agent.device.name);
    //         totalData.user_agent.device.type.push(data.user_agent.device.type);
    //         totalData.user_agent.engine.name.push(data.user_agent.engine.name);
    //         totalData.user_agent.engine.type.push(data.user_agent.engine.type);
    //         totalData.user_agent.engine.version.push(data.user_agent.engine.version);
    //         totalData.user_agent.os.name.push(data.user_agent.os.name);
    //         totalData.user_agent.os.type.push(data.user_agent.os.type);
    //         totalData.user_agent.os.version.push(data.user_agent.os.version);
    //     });
    // } catch {
    //     //Suppress error
    // }
    // try {
    //     await $.getJSON('https://jsonip.com/', function (data) {
    //         totalData.ip.ip6.push(data.ip);
    //     });
    // } catch {
    //     //Suppress error
    // }
    // try {
    //     await $.getJSON('http://ip.jsontest.com/', function (data) {
    //         totalData.ip.ip6.push(data.ip);
    //     });
    // } catch {
    //     //Suppress error
    // }

    return JSON.stringify(totalData);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

// - Title Letters -

function separate(string) {
    let result = "";

    for (const character of string) {
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
function copyStringToClipboard(string) {
    function handler(event) {
        event.clipboardData.setData('text/plain', string);
        event.preventDefault();
        document.removeEventListener('copy', handler, true);
    }

    document.addEventListener('copy', handler, true);
    document.execCommand('copy');
}

window.active = 0;

//Puts something in the users clipboard when clicked and makes a bubble pop up
function setCopyEventListeners(elem, copy) {
    elem.addEventListener("click", function () {
        copyBubble(elem, copy);
    })
    elem.addEventListener("keydown", e => {
        if (e.isComposing || e.keyCode === 13) {
            copyBubble(elem, copy);
        }
    })
}

function copyBubble(elem, copy) {
    if (window.active !== elem) {
        copyStringToClipboard(copy);
        elem.insertAdjacentHTML("afterbegin", "<div class=\"bubble\">Gekopieerd!</div>");
        window.active = elem;
        setTimeout(function () {
            for (let i = 0; i < elem.childNodes.length; i++) {
                if (elem.childNodes[i].className === "bubble") {
                    elem.childNodes[i].remove();
                }
            }
            window.active = 0;
        }, 1000)
    }
}

const discord = document.getElementById("discordLink");
const email = document.getElementById("emailLink");

setCopyEventListeners(discord, "DirkieDurky#5175");
setCopyEventListeners(email, "dirk@freijters.nl");

// - Responsibility -
function updateScreen() {
    if (window.innerWidth < 480) {
        document.getElementById("optionalBr").innerHTML = "<br>";
    } else {
        document.getElementById("optionalBr").innerHTML = "";
    }
}
