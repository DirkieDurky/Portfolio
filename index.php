<?php
function seperate($string) {
    $result = "";
    $lastCharWasSpace = false;
    for ($i=0;$i<strlen($string);$i++) {
        if (substr($string,$i,1) == " "){
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
    <?= seperate("Hallo,")?>
    <br>
    <?= seperate("ik ben Dirk!")?>
    </div>
</section>
<section id="section-aboutMe">
    Over mij:
</section>
</body>
</html>