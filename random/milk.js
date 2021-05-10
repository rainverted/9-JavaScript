/*
UZDUOTIS

- gaunam uzsakymu kieki per diena (vienetais)
- gaunam vienos porcijos dydi (litrais)
- vienos karves duodamo pieno kiekis per diena (litrais)
- reikia rasti, kiek reikia tureti karviu, norint patenkinti visus uzsakymus?
*/

function milk(uzsakymai, porcija, dienoslitrai) {

    if (typeof uzsakymai !== 'number'){
        return 'ERROR: PIRMAS PARAMETRAS TURI BUTI SKAICIUS'
    }

    if (typeof porcija !== 'number'){
        return 'ERROR: antras PARAMETRAS TURI BUTI SKAICIUS'
    }

    if (typeof dienoslitrai !== 'number'){
        return 'ERROR: trecias PARAMETRAS TURI BUTI SKAICIUS'
    }

    if (dienoslitrai <= 0) {
        return 'ERROR: trecias parametras turi buti didesnis uz nuli'
    }

    if (uzsakymai < 0){
        return 'ERROR: pirmas PARAMETRAS negali buti neigiamas'
    }


    const kiekPieno = uzsakymai * porcija;
    const kiekKarviu = kiekPieno / dienoslitrai;

    return Math.ceil (kiekKarviu);

}
console.log(milk('labas', -0.5,true), '->', 6);
console.log(milk(100, 'labas' ,true), '->', 6);
console.log(milk(-100, 0.5 ,'labas'), '->', 6);

console.log(milk(-100, 0.5, 9), '->', 1);

console.log(milk(10, 0.5, 9), '->', 1);
console.log(milk(100, 0.5, 9), '->', 6);

