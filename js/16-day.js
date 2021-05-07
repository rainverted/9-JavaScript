/*
DAY
jeigu, dabar yra 0:00 iki 4:59 -> naktis
jeigu, dabar yra 5:00 iki 10:59 -> rytas
jeigu, dabar yra 11:00 iki 18:59 -> diena
jeigu, dabar yra 19:00 iki 23:59 -> vakaras
*/

function parosMetas(val, min) {
    if (val < 5) {
        return 'naktis';
    }

    if (val < 11) {
        return 'rytas'
    }

    if (val < 19) {
        return 'diena';
    }

    return 'vakaras';
}

console.log(parosMetas(2, 39), '->', 'naktis');
console.log(parosMetas(10, 39), '->', 'rytas');
console.log(parosMetas(18, 39), '->', 'diena');
console.log(parosMetas(23, 39), '->', 'vakaras');