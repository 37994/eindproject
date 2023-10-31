const readline = require("readline-sync");

console.log('welkom bij mijn mooie quiz');
console.log('de qioz begint over 3 sreconde')
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
    prompt('\nvraag\n\ta: ja\n\tb: nee\n\tc: \n\td:\nAntwoord: ', {
        a: vraag2,
        b: vraag3,
        c: vraag4,
        d: vraag5
    });
}

function vraag2() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag6,
        b: vraag7,
    });
}

function vraag3() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag9,
        b: vraag8,
    });
}

function vraag4() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag9,
        b: vraag10,
    });
}

function vraag5() {
    console.log('game over')
}

function vraag6() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag12,
        b: vraag13,
    });
}

function vraag7() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag14,
        b: vraag15,
    });
}

function vraag8() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag15,
        b: vraag16,
    });
}

function vraag9() {
    console.log('game over')
}

function vraag10() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag11,
        b: vraag17,
    });
}

function vraag11() {
    console.log('game over')
}

function vraag12() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag18,
        b: vraag22,
    });
}

function vraag13() {
    console.log('game over')
}

function vraag14() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag18,
        b: vraag19,
    });
}

function vraag15() {
    console.log('game over')
}

function vraag16() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag20,
        b: vraag21,
    });
}

function vraag17() {
    console.log('game over')
}

function vraag18() {
    console.log('game over')
}

function vraag19() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag22,
        b: vraag23,
    });
}

function vraag20() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag23,
        b: vraag24,
    });
}

function vraag21() {
    console.log('game over')
}

function vraag22() {
    console.log('game over')
}

function vraag23() {
    prompt('\nvraag\n\ta: \n\tb: \nAntwoord: ', {
        a: vraag22,
        b: vraag24,
    });
}

function vraag24() {
    console.log('game over')
}