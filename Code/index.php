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
    <h1>Over mij:</h1>
    <p class="headline">
        In het algemeen:
    </p>
    <p>
        Hallo! Ik ben Dirk!<br>
        Mijn volledige naam is Dirk Freijters, ik ben opgegroeid in Uden (en woon daar nu nog steeds). Ik ben 16 jaar.
        In mijn vrije tijd kijk ik speel ik games (Tetris, Minecraft, osu!), en programmeer ik graag!
    </p>
    <p class="headline">
        Wat programmeren betreft:
    </p>
    <p>
        Op mijn 10e ontdekte ik Scratch. Een platform waar je kunt leren programmeren door middel van het slepen van
        blokjes. Daar heb ik ontdekt hoe leuk programmeren kan zijn en ik heb het sindsdien fantastisch gevonden! Op de
        middelbare school kreeg ik allerlei vakken die ik helemaal niet interessant vond. Daarom ben ik van Havo 4
        overgestapt naar een opleiding Software Development. Daar krijg ik les over dingen die ik echt interessant vind!
    </p>
</section>
<section id="section-WDIWTB">
    <h1>Waar ik nu ben:</h1>
    <p>Hoewel ik met plezier aan de front-end werk, werk ik liever aan back-end.</p>
    <div class="flexbox">

        <div class="flexElement">
            <h1><img src="../Sources/Logos/Scratch%20logo.svg" alt="Scratch Logo" width="50">Scratch</h1>
            <span>
                Scratch is het platform dat mij geïntroduceerd heeft in programmeren. Ik heb op Scratch met plezier aan superveel
                kleine projectjes gewerkt en de basis van programmeren geleerd.
            </span>
        </div>
        <div class="flexElement">
            <h1>Java</h1>
            <span>
                Een vriend die veel met Java werkt heeft me een klein beetje Java geleerd, en daar heb ik een paar projectjes mee gemaakt.
                Hoewel ik het leuk vond om met Java programma’s te maken, was het nog wat te gecompliceerd.
            </span>
        </div>
        <div class="flexElement">
            <h1>HTML/CSS</h1>
            <span>
                Op school begonnen we met het maken van webapplicaties. Daarbij is HTML en CSS natuurlijk essentieel.
                Ik heb met HTML en CSS aan talloze projecten gewerkt.
            </span>
        </div>
        <div class="flexElement">
            <h1>PHP</h1>
            <span>
                Ik begon met het leren van PHP door school. Voor veel klasgenoten was dit de eerste taal die ze leerden,
                maar door mijn eerdere ervaring met programmeren begreep ik al relatief snel hoe ik ermee moest werken.
                Naast projecten voor school heb ik zelf ook nog wat dingen gemaakt met PHP.
            </span>
        </div>
        <div class="flexElement">
            <h1>JavaScript</h1>
            <span>
                Javascript heb ik hier en daar gebruikt voor wat dingen in andere projecten. Van JavaScript zou ik graag nog wat meer willen leren.
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

    console.log("translate("+(Math.floor(Math.random() * 1000) -500)+"%,"+(Math.floor(Math.random() * 1000) -500)+"%)");

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
            console.log(rand,rand2);
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
</script>