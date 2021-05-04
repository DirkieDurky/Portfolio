<?php
function separate($string)
{
    $result = "";
    $lastCharWasSpace = false;
    for ($i = 0; $i < strlen($string); $i++) {
        if (substr($string, $i, 1) == " ") {
            $lastCharWasSpace = true;
        }
        if ($lastCharWasSpace) {
            $result .= "<span class='titleLetter' style='margin-left: 30px'>" . substr($string, $i, 1) . "</span>";
            $lastCharWasSpace = false;
        } else {
            $result .= "<span class='titleLetter'>" . substr($string, $i, 1) . "</span>";
        }
    }
    return $result;
}
?>

<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Dirk Freijters</title>
</head>
<body>
<section id="section-title">
    <div id="title">
        <?= separate("Hallo,") ?>
        <br>
        <?= separate("ik ben Dirk!") ?>
    </div>
</section>
<section id="section-aboutMe">
    <span>
        Mijn volledige naam is Dirk Freijters, ik woon in Uden, ik ben </span><span id="ageWindow"><span id="age"></span></span><span>
        en in mijn vrije tijd speel ik games (Tetris, Minecraft, osu!), en programmeer ik graag!
    </span>
</section>
<section id="section-WDIWTB">
    <h1>Waar ik nu ben:</h1>
    <p>
        Op mijn 10e ontdekte ik Scratch. Een platform waar je kunt leren programmeren door middel van het slepen van
        blokjes. Daar heb ik ontdekt hoe leuk programmeren kan zijn en ik heb het sindsdien fantastisch gevonden! Op de
        middelbare school kreeg ik allerlei vakken die ik helemaal niet interessant vond. Daarom ben ik van Havo 4
        overgestapt naar een opleiding Software Development. Nu krijg ik les over dingen die ik echt interessant vind!
    </p>
    <p>
        Ik maak graag websites, of andere applicaties. Hoewel ik met plezier aan de front-end van een site werk, werk ik liever aan back-end.
    </p>
    <div class="flexbox">
        <div class="flexElement">
            <header style="background-color:#f8a41d">
                <img src="../Sources/Logos/Scratch%20logo.svg" alt="Scratch Logo" width="50">
                <h1 id="drop-shadow">Scratch</h1>
            </header>
            <div class="content">
            <span>
                Scratch is het platform dat mij geïntroduceerd heeft in programmeren. Ik heb op Scratch met plezier aan superveel
                kleine projectjes gewerkt en de basis van programmeren geleerd. Voor meer informatie over mijn Scratch-carriere kun je
                <a href="https://scratch.mit.edu/users/Dirk993/">hier</a> een kijkje nemen:

            </span>
            </div>
        </div>
        <div class="flexElement">
            <header style="background-color:#78c472">
                <img src="../Sources/Logos/java.svg" alt="Java Logo" width="50">
                <h1>Java</h1>
            </header>
            <div class="content">
            <span>
                Een vriend die veel met Java werkt heeft me een beetje Java geleerd, en daar heb ik een paar projectjes mee gemaakt.
                Hoewel ik het leuk vond om met Java programma’s te maken, was het nog wat te gecompliceerd.
            </span>
            </div>
        </div>
        <div class="flexElement">
            <header style="background-color:#cb9ddb">
                <img src="../Sources/Logos/htmlcss.svg" alt="HTML Logo" width="50">
                <h1>HTML/CSS</h1>
            </header>
            <div class="content">
            <span>
                Op school begonnen we met het maken van webapplicaties. Daarbij is HTML en CSS natuurlijk essentieel.
                Ik heb met HTML en CSS aan talloze projecten gewerkt.
            </span>
            </div>
        </div>
        <div class="flexElement">
            <header style="background-color:#8993be">
                <img src="../Sources/Logos/php2.svg" alt="PHP Logo" width="50">
                <h1>PHP</h1>
            </header>
            <div class="content">
            <span>
                Ik begon met het leren van PHP door school. Voor veel klasgenoten was dit de eerste taal die ze leerden,
                maar door mijn eerdere ervaring met programmeren begreep ik al relatief snel hoe ik ermee moest werken.
                Naast projecten voor school heb ik zelf ook nog wat dingen gemaakt met PHP.
            </span>
            </div>
        </div>
        <div class="flexElement">
            <header style="background-color:#f0db4f">
                <img src="../Sources/Logos/javascript.svg" alt="JS Logo" width="50">
                <h1>JavaScript</h1>
            </header>
            <div class="content">
        <span>
            Javascript heb ik hier en daar gebruikt voor wat dingen in andere projecten.
            Van JavaScript zou ik graag nog wat meer willen leren. Voornamelijk jQuery en Ajax.
        </span>
        </div>
    </div>
</section>
</body>
</html>
<script>
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const letters = document.getElementsByClassName('titleLetter');

    const size = 300;

    async function randPos() {
        for (let i = 0; i < letters.length; i++) {
            let rand = Math.floor(Math.random() * 1000) - 500;
            let rand2 = Math.floor(Math.random() * 1000) - 500;
            while (rand > "-"+size && rand < size) {
                rand = Math.floor(Math.random() * 1000) - 500;
            }
            while (rand2 > "-"+size && rand2 < size) {
                rand2 = Math.floor(Math.random() * 1000) - 500;
            }
            letters[i].style.transition = "a";
            letters[i].style.transform = "translate(" + rand + "%," + rand2 + "%)";
        }
    }

    async function slideIn() {
        for (let i = 0; i < letters.length; i++) {
            letters[i].style.transition = "color 250ms, transform 250ms";
            letters[i].style.opacity = "100";
            letters[i].style.transform = "translate(0,0)";
            letters[i].addEventListener('mouseover', function e(){
                letters[i].style.transition = "color 50ms, transform 50ms";
                letters[i].style.transitionDelay = "0ms";
                letters[i].style.transform = "rotate(-15deg)";
            })
            letters[i].addEventListener('mouseleave', function e(){
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

        age = {
            years: yearAge,
            months: monthAge,
            days: dateAge,
            hours: hourAge,
            mins: minAge,
            secs: secAge
        };
        return age;
    }

    // let birthday = new Date(1082928780000);
    // let now = new Date();
    let ageWindow = document.getElementById('ageWindow');

    age.innerHTML = calcAge().years + " jaar";

    ageWindow.addEventListener("mouseleave", async function() {
        let age = document.getElementById('age');
        age.innerHTML = calcAge().years + " jaar";
        age.style.webkitTextFillColor = "transparent";
        ageWindow.style.width = "135px";
        ageWindow.style.height = "50px";
        age.style.fontSize = "40px";
        ageWindow.style.backgroundColor = "unset";
        clearInterval(window.ageInterval);
    })

    ageWindow.addEventListener("mouseenter", async function() {
        let age = document.getElementById('age');
        ageWindow.style.backgroundColor = "white";
        age.style.webkitTextFillColor = "white";
        age.style.fontSize = "16px";
        window.ageInterval = setInterval(function(){
            // now = new Date();
            // window.years = (now.getFullYear() - birthday.getFullYear());
            // window.months = (now.getMonth() - birthday.getMonth());
            // window.days = (now.getDate() - birthday.getDate());
            // window.hours = (now.getHours() - birthday.getHours());
            // window.mins = (now.getMinutes() - birthday.getMinutes());
            // window.secs = (now.getSeconds() - birthday.getSeconds());
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
                result += " seconde ";
            } else {
                result += " seconden";
            }
            result += " oud om precies te zijn.<br>(2004/04/25 om 23:33)"
            //age.innerHTML = ageDate.years + " jaar, " + ageDate.months + " maanden, " + ageDate.days + " dagen, " + ageDate.hours + " uur, " +
            //ageDate.mins + " minuten, en " + ageDate.secs + " seconden om precies te zijn. (2004/04/25 om 23:33)"
            age.innerHTML = result;
        },100);
        ageWindow.style.width = "400px";
        ageWindow.style.height = "60px";
        await sleep(400);
        age.style.webkitTextFillColor = "transparent";
    })
</script>