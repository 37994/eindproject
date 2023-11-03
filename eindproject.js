const readline = require("readline-sync");

console.log('\nwelkom bij mijn mooie quiz');
console.log('\nde quiz begint over 3 seconde');
setTimeout(vraag1, 3000);

function prompt(question, options) {
    while (true) {
        const option = options[ readline.keyIn(question).toLowerCase() ];
        if (option) {
            option();
            break;
        } else {
            console.log('Fout! dat is geen optie!');
        }
    }
}

function vraag1() {
    prompt('\je wordt waker, het is een mooie zomer dag rond 12:00 uur. De zon schijnt naar binnen door je tweede verdieping raam, jij hebt veel dingen te doen vandaag. Wat wilt u eerst doen?\n\ta: terug naar bed gaan\n\tb: eten beneden halen\n\tc: naar de trein station gaan\n\td: uit de raam springen\nAntwoord: ', {
        a: vraag2,
        b: vraag3,
        c: vraag4,
        d: vraag5
    });
}

function vraag2() {
    prompt('\nje bent nog erg moe, je keest om terug naar bed te gaan na dat je hebt een beetje eten op sinds jij hebt niet gegeten sinds die broodje je had op voor avond eten. Je maakt een lekkere soep en gaat terug na bed. Na een paar uurtjes wordt je weer wakker door een hond dat blaft net voor je huis, wat ga je doen?\n\ta: terug naar bed\n\tb: school werk doen\nAntwoord: ', {
        a: vraag6,
        b: vraag7
    });
}

function vraag3() {
    prompt('\nje kiest om eerst ontbijt te pakken, je loopt naar beneden een maakt een broodje voor jezelf met kaas wanneer je hoort een geluid. Je hebt iets duidelijk gehoord maar je weet niet als het komt van de kelder deur of de kast deur daarnast, je loopt naar waar de deuren staat. "welke doe ik open?"\n\ta: kelder deur\n\tb: kast deur\nAntwoord: ', {
        a: vraag9,
        b: vraag8
    });
}

function vraag4() {
    prompt('\nje bepaald dat je liefst een korte rijs gaat doen zo je rijdt naar de trein station. Na je hebt jouw fiets in de stalling gezegt, je loopt over naar de bord dat heeft de lijst van alle treinen die vertrekt binnen kort. Ze ziet die dat jij wilt halen zo je begint om die richten te lopen wanneer je ziet een trein met de naam de polar express\n\ta: terug naar huis gaan\n\tb: instappen bij de polar express\nAntwoord: ', {
        a: vraag16,
        b: vraag10
    });
}

function vraag5() {
    console.log('\nje loopt over naar jouw raam, doet hem open, je een laatste dingen te zeggen, "opera conflict" en je springt. Je land op de stoep op je hoofd een je bent dood.\n\nsnelle einde');
    console.log('  _____');
    console.log(' /     \\');
    console.log('| () () |');
    console.log(' \\  ^  /');
    console.log('  |||||');
}

function vraag6() {
    prompt('\nje hebt besloten dat je nog liever terug naar bed wilt, je vindt een goed positie om makelijk in slaap te vallen en 5 minuten later je zit weer lekker te dromen.\nOpeens wordt je weer waker omdat een van jouw ouders is binnen gelopen om op jouw te checken, "alles goed?" "ja hoor" zeg je een nu je hebt een keuze te maken:\n\ta: terug naar bed\n\tb: je gaat opstaan\nAntwoord: ', {
        a: vraag12,
        b: vraag13
    });
}

function vraag7() {
    prompt('\nje bepaald dat je liever jouw werk gaan doen nu dat jij bent een beetje wakker weer bent. Na een paar uurtjes je hebt eindelijk al jouw school opdrachten afgerond.\n\ta: eten halen\n\tb: naar bed\nAntwoord: ', {
        a: vraag14,
        b: vraag15
    });
}

function vraag8() {
    prompt('\nje kiest om de kast deur open te maken, op eerst je ziet niks maar op eens je ziet twee plekken waar je naartoe mag welke kees je?\n\ta: naar jouw kamer\n\tb: de polar express\nAntwoord: ', {
        a: vraag15,
        b: vraag26
    });
}

function vraag9() {
    console.log('je kiest om de kelder deur te openen. Je probeert om de licht aan te doen maar het werkt niet zo je gaat alsnog naar benenden waar je ziet dat de hele kelder in nog niet weergegeven. Hier door heeft de robots geen keuze behalf jouw te terminaten een sturen naar de schadeuw wereld.\n je bent daarna binnenkort dood')
    console.log('  _____');
    console.log(' /     \\');
    console.log('| () () |');
    console.log(' \\  ^  /');
    console.log('  |||||\neinde');
}

function vraag10() {
    prompt('\nje beslist om in de polar express te stappen, waar je begint op een lange trein reis helemaal naar de Noordpool. Na een paar lange dagen, je bent eindelijk aangekomen. Na je hebt af de trein gestapt, het bent rond gekijken naar alles dat wordt gedaan daar en ook naar alles dat je kunt daar doen. Na een tijdje, je hoort dat de trein binnenkort gaat terug in de andere richting. Wilt u blijven in de Noordpool of wil je terug gaan?\n\ta: daar blijven\n\tb: terug gaan\nAntwoord: ', {
        a: vraag11,
        b: vraag17
    });
}

function vraag11() {
    console.log('je kiest om daar te gaan blijven, je kijkt de trein de station verlaat terug in de richting van europa. Nu gaat je eigen ding doen.\n\neinde')
}

function vraag12() {
    prompt('\nje ouder verlaat de kamer en je realiseert dat je steeds moe en slap voelt, zo je beslist om nog een keer naar bed te gaan om te zien als dit gaat hem eindelijk oplossen. Zo je vindt weer een lekker posistie om in slaap te vallen, en je bent weer aan het dromen. Later die avond, jij wordt weer wakker met heel veel honger. je gaat beneden om avond eten te hebben en mischien je school werk afmaken. Maar je voelt weer heel erg moe. Wat gaat u doen?\n\ta: terug naar bed\n\tb: aan jouw werk beginnen\nAntwoord: ', {
        a: vraag18,
        b: vraag7
    });
}

function vraag13() {
    console.log('na je ouder verlaat kamer, je staat op lekker klaar om de rest van jouw dag te aan te pakken en jouw school werk eindelijk afmaken, wanneer je hoort een geluid van onder je bed. Je zit even op jouw knieën om onder jouw bed te kijken bij waar de geluid komt van een je ziet een doos. Je pakt deze doos een zet hem op jouw tafel, je doet hem open alleen om een atoombom daar in te vinden. Voordat jij kunt reageren, de bom gaat af een je bent dood');
    console.log('     _.-^^---....,,--       ');
    console.log(' _--                  --_  ');
    console.log('<                        >)');
    console.log('|                         |');
    console.log(' \\._                   _./  ');
    console.log('    ```--. . , ; .--***       ');
    console.log('          | |   |             ');
    console.log('       .-=||  | |=-.   ');
    console.log('       `-=#$%&%$#=-`  ');
    console.log('          | ;  :|     ');
    console.log(' _____.,-#%&$@%#&#~,._____\n\n\teinde');
}

function vraag14() {
    prompt('\nje stapt jouw kamer uit maar je ziet niemand, zo je checkt ook beneden maar kunt nog steeds niemand vinden. Wat wil je gaan doen?\n\ta: gewoon naar bed\n\tb: huis verder zoeken\nAntwoord: ', {
        a: vraag15,
        b: vraag19
    });
}

function vraag15() {
    console.log('Na een lange dag, je kiest om eindelijk naar bed te gaan en goed gaan uitrusten. Je stapt in bed.\n\neinde\n')
    console.log('      ()___ ');
    console.log('    ()//__/)_________________()');
    console.log('    ||(___)//#/_/#/_/#/_/#()/||');
    console.log('    ||----|#| |#|_|#|_|#|_|| ||');
    console.log('    ||____|_|#|_|#|_|#|_|#||/||');
    console.log('    ||    |#|_|#|_|#|_|#|_||');
}

function vraag16() {
    prompt('\nje kiest dat mischien dit was niet zo goed idee en je gaat terug waar je hebt je fiets nier gezet in de stalling om weer thuis te gaan. Onder weg naar huis, je komt naar een intersectie waar je kan kiezen als je wilt de langere route nemen dat heeft een mooier zicht over de stad of de kortere route dat brengt je meteen naar huis. Welke neem je?\n\ta: lange route\n\tb: korte route\nAntwoord: ', {
        a: vraag20,
        b: vraag21
    });
}

function vraag17() {
    console.log('Je kiest om terug naar huis te gaan met de polar exprees hopelijk naar de zelfde plek waar je hebt ingestappen. Onderweg, ergens in noord europa dat was een probleem met de trein waar het is van een berg af gevallen waar niemand overleeft het.\n\n\einde');
}

function vraag18() {
    console.log('je wordt morgen wakker waar je voelt helemaal verfrist met genoeg energy om jouw meerdere dagen door mee te gaan. Je gaat beneden voor jouw ontbijt en je gaat verder met je dag.\n\neinde\n');
    console.log('      ()___ ');
    console.log('    ()//__/)_________________()');
    console.log('    ||(___)//#/_/#/_/#/_/#()/||');
    console.log('    ||----|#| |#|_|#|_|#|_|| ||');
    console.log('    ||____|_|#|_|#|_|#|_|#||/||');
    console.log('    ||    |#|_|#|_|#|_|#|_||');
}

function vraag19() {
    prompt('\nna een beetje meer rond zoeken je komt naar de conclusie dat je ouders verschijnlijk niet thuis zijn zo je gaat een lekkere snack halen in de keuken. Na het eten, je wilt iets gaan doen. Wat ga je kiezen?\n\ta: mario gaan spelen\n\tb: naar de achtertuin\nAntwoord: ', {
        a: vraag22,
        b: vraag23
    });
}

function vraag20() {
    prompt('\nzodra je hebt thuis gekomen, je ziet dat je ouders er niet zijn, je wilt iets gaat doen. Je komt uiteindelijk op een boek lezen of naar de achtertuin gaan. Wat doe je?\n\ta: naar de achtertuin gaan\n\tb: boek lezen\nAntwoord: ', {
        a: vraag23,
        b: vraag25
    });
}

function vraag21() {
    console.log('je kiest om de kortere route te nemen zo je sneller thuis kunt komen. Onderweg een auto ongeluk gebuurt en je hebt nergens te gaan daar midde in een je wordt aangereden.\n\neinde')
}

function vraag22() {
    console.log('je hebt beslist dat je wilt een beetje mario gaan spelen, dit houdt je bezig voor de rest van de dag tot dat het is tijd voor jouw naar bed te gaan voor de dag.');
    console.log('──────────────███████──███████');
    console.log('──────────████▓▓▓▓▓▓████░░░░░██');
    console.log('────────██▓▓▓▓▓▓▓▓▓▓▓▓██░░░░░░██');
    console.log('──────██▓▓▓▓▓▓████████████░░░░██');
    console.log('────██▓▓▓▓▓▓████████████████░██');
    console.log('────██▓▓████░░░░░░░░░░░░██████');
    console.log('──████████░░░░░░██░░██░░██▓▓▓▓██');
    console.log('──██░░████░░░░░░██░░██░░██▓▓▓▓██');
    console.log('██░░░░██████░░░░░░░░░░░░░░██▓▓██');
    console.log('██░░░░░░██░░░░██░░░░░░░░░░██▓▓██');
    console.log('──██░░░░░░░░░███████░░░░██████');
    console.log('────████░░░░░░░███████████▓▓██    ');
    console.log('──────██████░░░░░░░░░░██▓▓▓▓██');
    console.log('────██▓▓▓▓██████████████▓▓██');
    console.log('──██▓▓▓▓▓▓▓▓████░░░░░░████');
    console.log('████▓▓▓▓▓▓▓▓██░░░░░░░░░░██');
    console.log('████▓▓▓▓▓▓▓▓██░░░░░░░░░░██');
    console.log('██████▓▓▓▓▓▓▓▓██░░░░░░████████');
    console.log('──██████▓▓▓▓▓▓████████████████');
    console.log('────██████████████████████▓▓▓▓██');
    console.log('──██▓▓▓▓████████████████▓▓▓▓▓▓██');
    console.log('████▓▓██████████████████▓▓▓▓▓▓██');
    console.log('██▓▓▓▓██████████████████▓▓▓▓▓▓██');
    console.log('██▓▓▓▓██████████──────██▓▓▓▓████');
    console.log('██▓▓▓▓████──────────────██████');
    console.log('──████\n\neinde');
}

function vraag23() {
    prompt('\nna dat je heeft rond gekeken voor je ouders, heb je beslist om naar de achtertuin te gaan. Je loopt door de keuken en uit de achter deur de achtertuin in.\n\ta: lekker in de achtertuin uit rusten\nAntwoord: ', {
        a: vraag24
    });
}

function vraag24() {
    console.log('na je buiten de deur staat, jij kiest om plaats te nemen op de tuinstoel en lekker gaan chillen in de zon tot je hebt zin in iets anders doen.');
    console.log('     \\');
    console.log('      \\');
    console.log('       \\');
    console.log('        \\');
    console.log('         \\_______');
    console.log('          |_____\\');
    console.log('          |======\\');
    console.log('          |       \\ .');
    console.log('      `.__|_______.`\n\neinde');
}

function vraag25() {
    console.log('je kiest om een boek te gaan lezen zo je loopt over naar de boekenkast een kiest een klassiek. "Goodnight Moon" je bent bezig met die boek en een paar andere tot later vanavond.\n\neinde')
}

function vraag26() {
    prompt('\nje kiest om naar de polar express trein te gaan zo je loopt door de deur heen en op eens je bent ergens in noord europa onderweg naar de Noordpool. Na een paar dagen je bent eindelijk bij de noordpool aangekomen, je stapt af de trein en je gaat rond kijken naar alle dingen dat wordt gedaan en dingen je kunt doen. Een beetje later, je hoord dat de polar express binnenkort vertrekt richting europa, ga je in de Noordpool blijven of ga terug naar huis?\n\ta: terug gaan\n\tb: daar blijven\nAntwoord: ', {
        a: vraag17,
        b: vraag11
    });
}