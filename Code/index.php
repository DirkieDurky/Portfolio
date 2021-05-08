<?php
/*
 * Todo:
 * Fix: If moving quickly over age things look glitchy
 * Add info
 * Adding english option
 * More cool stuffzies? (Text sliding in animation?)
 * Add text at contact??
 *
 * Ipv Ervaring:
 * Programmeertalen
 * IDE's
 * Other software (Git / Github, Photoshop, Illustrator)
 */
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
<body onload="updateScreen()" onresize="updateScreen()">
<section id="section-title">
    <div id="title">
        <?= separate("Hallo,") ?>
        <br>
        <?= separate("ik ben") ?>
        <span id="optionalBr"></span>
        <?= separate("Dirk!") ?>
    </div>
</section>
<section id="section-aboutMe">
    <div id="aboutMe">
        <span>
            Mijn volledige naam is Dirk Freijters, ik woon in Uden, ik ben
        </span>
        <span id="ageWindow"><span id="age"></span></span>
        <span>
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
        werk ik liever aan de back-end.
    </p>
</section>
<section id="section-experience">
    <h1>Mijn ervaring met programmeren:</h1>
    <div class="flexbox">
        <div class="flexElement">
            <header style="background-color:#f8a41d">
                <img src="../Sources/Logos/Scratch%20logo.svg" alt="Scratch Logo" class="logo">
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
                <img src="../Sources/Logos/java.svg" alt="Java Logo" class="logo">
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
                <img src="../Sources/Logos/htmlcss.svg" alt="HTML Logo" class="logo">
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
                <img src="../Sources/Logos/php2.svg" alt="PHP Logo" class="logo">
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
                <img src="../Sources/Logos/javascript.svg" alt="JS Logo" class="logo">
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
            <header style="background-color:#2c712c">
                <img src="../Sources/Logos/ahk.svg" alt="AHK Logo" class="logo">
                <h1>AutoHotkey</h1>
            </header>
            <div class="content">
        <span>
            AutoHotkey is een programmeertaal bedoelt om gemakkelijk toetsenbordcombinaties en hotkeys te maken, maar ondertussen kun je er veel meer mee.
            <br>Met AutoHotkey maak ik graag kleine programmaatjes.
        </span>
            </div>
        </div>
        <div class="flexElement">
            <header style="background-color:#56565c">
                <img src="../Sources/Logos/Github.svg" alt="Github Logo" class="logo">
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
        Ik zou graag nog meer willen leren over JavaScript, en over javascript libraries zoals jQuery, en ook zou ik
        AJAX willen leren.
        Ik wil beter worden in andere talen die ik al beheers (PHP, HTML, CSS, Java).
        Ook zou ik graag nog wat nieuwe talen leren, zoals Python en de C talen.
    </p>
</section>
<section id="section-HDIGT">
    <h1>Hoe kom ik daar:</h1>
    <p>
        Ik ben van plan alles wat ik hierboven heb opgenoemd stuk voor stuk te gaan leren. Nu ben ik bezig met
        JavaScript!
    </p>
</section>
<section id="section-contact">
    <h1>Contact</h1>
    <div class="flexbox">
        <a id="discordLink">
            <img src="../Sources/Logos/discord2.svg" alt="Discord logo" id="discord">
        </a>
        <a id="emailLink">
            <img src="../Sources/Logos/email.svg" alt="Email icon" id="email">
        </a>
    </div>
</section>
</body>
</html>
<script src="main.js"></script>