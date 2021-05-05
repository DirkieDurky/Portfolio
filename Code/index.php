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
    <div id="aboutMe">
        <span>
            Mijn volledige naam is Dirk Freijters, ik woon in Uden, ik ben </span><span id="ageWindow"><span
                    id="age"></span></span><span>
            en in mijn vrije tijd speel ik games (Tetris, Minecraft, osu!), en programmeer ik graag!
        </span>
    </div>
</section>
<section id="section-WIARN">
    <h1>Waar ik nu ben:</h1>
    <p>
        Op mijn 10e ontdekte ik Scratch. Een platform waar je kunt leren programmeren door middel van het slepen van
        blokjes. Daar heb ik ontdekt hoe leuk programmeren kan zijn en ik heb het sindsdien fantastisch gevonden! Op
        de
        middelbare school kreeg ik allerlei vakken die ik helemaal niet interessant vond. Daarom ben ik van Havo 4
        overgestapt naar een opleiding Software Development. Nu krijg ik les over dingen die ik echt interessant
        vind!
    </p>
    <p>
        Ik maak graag websites, of andere applicaties. Hoewel ik met plezier aan de front-end van een site werk,
        werk ik
        liever aan de back-end.
    </p>
</section>
<section id="section-experience">
    <h1>Mijn ervaring met programmeren:</h1>
    <div class="flexbox">
        <div class="flexElement">
            <header style="background-color:#f8a41d">
                <img src="../Sources/Logos/Scratch%20logo.svg" alt="Scratch Logo" width="50">
                <h1 id="drop-shadow">Scratch</h1>
            </header>
            <div class="content">
            <span>
                Scratch is het platform dat mij geïntroduceerd heeft in programmeren. Ik heb op Scratch met plezier aan superveel
                kleine projectjes gewerkt en de basis van programmeren geleerd.<br><br>Voor meer informatie over mijn Scratch-carriere kun je
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
                Een vriend die veel met Java werkt heeft me wat Java geleerd, en daar heb ik een paar projectjes mee gemaakt.
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
        <div class="flexElement">
            <header style="background-color:#56565c">
                <img src="../Sources/Logos/Github.svg" alt="JS Logo" width="50">
                <h1>Github</h1>
            </header>
            <div class="content">
        <span>
            Met Github werk ik samen met anderen aan projecten, of werk ik gemakkelijk aan een project op meerdere apparaten!<br><br>
            Veel van mijn projecten zijn open source, dus kun je gewoon bekijken op mijn Github, waaronder dit portfolio! Neem dus gerust een kijkje!
        </span>
            </div>
        </div>
    </div>
</section>
<section id="section-WDIWTB">
    <h1>Waar ik wil zijn:</h1>
    <p>
        Ik zou graag nog meer willen leren over JavaScript, en over javascript libraries zoals jQuery, en ook zou ik AJAX willen leren.
        Ik wil beter worden in andere talen die ik al beheers (PHP, HTML, CSS, Java).
        Ook zou ik graag nog wat nieuwe talen leren, zoals Python en de C talen.
    </p>
</section>
<section id="section-HDIGT">
    <h1>Hoe kom ik daar:</h1>
    <p>
        Ik ben van plan alles wat ik hierboven heb opgenoemd stuk voor stuk te gaan leren. Nu ben ik bezig met JavaScript!
    </p>
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
            while (rand > "-" + size && rand < size) {
                rand = Math.floor(Math.random() * 1000) - 500;
            }
            while (rand2 > "-" + size && rand2 < size) {
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
            letters[i].addEventListener('mouseover', function e() {
                letters[i].style.transition = "color 50ms, transform 50ms";
                letters[i].style.transitionDelay = "0ms";
                letters[i].style.transform = "rotate(-15deg)";
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

    let ageWindow = document.getElementById('ageWindow');

    age.innerHTML = calcAge().years + " jaar";

    ageWindow.addEventListener("mouseleave", function () {
        const checkExist = setInterval(function () {
            if (window.ageInterval) {
                clearInterval(window.ageInterval);
                clearInterval(checkExist);
            }
        }, 150);
        let age = document.getElementById('age');
        clearInterval(window.ageInterval);
        age.innerHTML = calcAge().years + " jaar";
        age.style.color = "transparent";
        ageWindow.style.width = "135px";
        ageWindow.style.height = "50px";
        age.style.fontSize = "40px";
        ageWindow.style.backgroundColor = "unset";
        age.style.transition = "unset";
        window.i = 0;
        window.removeInterval = setInterval(function () {
            if (window.i > 1) {
                clearInterval(removeInterval);
                return;
            }
            if (window.ageInterval) {
                clearInterval(window.ageInterval);
                age.innerHTML = calcAge().years + " jaar";
            }
            window.i++
        }, 200);
    })

    ageWindow.addEventListener("mouseenter", async function () {
        clearInterval(window.removeInterval);
        let age = document.getElementById('age');
        age.innerHTML = "";
        ageWindow.style.backgroundColor = "white";
        age.style.color = "white";
        age.style.fontSize = "16px";
        ageWindow.style.width = "380px";
        ageWindow.style.height = "60px";
        await sleep(150);
        window.ageInterval = setInterval(function () {
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
            result += " oud om precies te zijn.<br>(2004/04/25 om 23:33)";
            age.innerHTML = result;
        }, 100);
        age.style.transition = "color 500ms";
        age.style.color = "transparent";
    })
</script>