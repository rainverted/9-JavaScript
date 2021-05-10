/*
UZDUOTIS:
- gaunam, kiek sienu turi namas
- gaunam, kokio plocio yra kiekviena siena (metrais)
- sienos neturi angu ir/ar skyliu
- gaunam sienos auksti, kuris visur yra vienodas
- turim plytos dydi (aukstis ir plotis) (metrais)
- reikia suzinoti, keliu plytu mums reikes, jei plytu skaldyti negalima
*/

function bricks(sienuPlociai, sienosAukstis, plytosAukstis, plytosPlotis) {
    let bendrasPlotis = 0;
    
    for (let i = 0; i < sienuPlociai.length; i++) {
        bendrasPlotis += sienuPlociai[i]
    }


    const plytuPlotyje = bendrasPlotis / plytosPlotis;
    const plytuAukstyje = sienosAukstis / plytosAukstis;
    return plytuPlotyje * plytuAukstyje;
}

console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);